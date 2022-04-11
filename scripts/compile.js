"use strict";
/**
 * Compiler.ts - For compiling TypeScript files to Lua files using TypeScriptToLua.
 *
 * (Designed for the Project Zomboid environment)
 *
 * TODO: Create declaration files.
 * TODO: Manual copying of Lua files from src/ to media/
 *
 * @author JabDoesThings
 */
exports.__esModule = true;
var ansi = require('ansi');
var cursor = ansi(process.stdout);
var fs = require("fs");
var chokidar = require("chokidar");
var typescript_to_lua_1 = require("typescript-to-lua");
var PREFIX = '[COMPILER]';
var LUA_HEADER_FILE = '';
if (fs.existsSync('./src/header.lua'))
    LUA_HEADER_FILE = fs.readFileSync('./src/header.lua').toString();
var LUA_FOOTER_FILE = '';
if (fs.existsSync('./src/footer.lua'))
    LUA_FOOTER_FILE = fs.readFileSync('./src/footer.lua').toString();
var main = function () {
    if (!fs.existsSync('./media/lua'))
        fs.mkdirSync('./media/lua', { recursive: true });
    if (!fs.existsSync('./media/lua/client'))
        fs.mkdirSync('./media/lua/client', { recursive: true });
    if (!fs.existsSync('./media/lua/server'))
        fs.mkdirSync('./media/lua/server', { recursive: true });
    if (!fs.existsSync('./media/lua/shared'))
        fs.mkdirSync('./media/lua/shared', { recursive: true });
    var args = process.argv.reverse();
    args.pop();
    args.pop();
    args = args.reverse();
    if (args.length !== 0) {
        var argLower = args[0].toLowerCase();
        if (argLower === '-w' || argLower === '--watch') {
            PREFIX = '[WATCHER]';
            chokidar.watch('./src', { ignoreInitial: true }).on('all', function (event, path) {
                while (path.indexOf('\\') !== -1) {
                    path = path.replace('\\', '/');
                }
                var pathLower = path.toLowerCase();
                if (pathLower === 'src/header.lua' || pathLower === 'src/footer.lua') {
                    return;
                }
                if (event === 'add' || event === 'change') {
                    if (!fs.lstatSync(path).isFile())
                        return;
                    if (pathLower.endsWith('.lua')) {
                        copyFile(path, 'media/lua' + path.substring(3));
                        return;
                    }
                    if (pathLower.endsWith('.d.ts') || !pathLower.endsWith('.ts')) {
                        return;
                    }
                    cursor.grey();
                    console.log("".concat(PREFIX, " - File changed: ").concat(path));
                    cursor.reset();
                    compileProject();
                }
                else if (event === 'unlink') {
                    var dst = 'media/lua' + path.substring(3);
                    if (dst.toLowerCase().endsWith('.ts')) {
                        dst = dst.substring(0, dst.length - 2) + 'lua';
                    }
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        cursor.reset();
                        fs.rmSync(dst);
                        console.log("".concat(PREFIX, " - Deleted file: ").concat(dst));
                    }
                }
                else if (event === 'unlinkDir') {
                    var dst = 'media/lua' + path.substring(3);
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        cursor.reset();
                        fs.rmdirSync(dst);
                        console.log("".concat(PREFIX, " - Deleted directory: ").concat(dst));
                    }
                }
                else if (event === 'addDir') {
                    var dst = 'media/lua' + path.substring(3);
                    if (!fs.existsSync(dst)) {
                        cursor.grey();
                        console.log("".concat(PREFIX, " - Created file: ").concat(dst));
                        cursor.reset();
                        fs.mkdirSync(dst, { recursive: true });
                    }
                }
            });
        }
    }
    compileProject();
};
var copyFile = function (src, dst) {
    cursor.grey();
    console.log("".concat(PREFIX, " - Copying \"").concat(src, "\" to \"").concat(dst, "\".."));
    cursor.reset();
    checkDir(dst);
    if (dst.toLowerCase().endsWith('.lua')) {
        var lua = (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
            fs.readFileSync(src).toString() +
            (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
        fs.writeFileSync(dst, lua);
    }
    else {
        fs.copyFileSync(src, dst);
    }
};
var compileProject = function () {
    cursor.brightGreen();
    process.stdout.write("".concat(PREFIX, " - Compiling project.."));
    cursor.reset();
    var timeThen = new Date().getTime();
    (0, typescript_to_lua_1.transpileProject)('tsconfig.json', {}, function (fileName, data, _writeByteOrderMark, _onError) {
        while (fileName.indexOf('\\') !== -1)
            fileName = fileName.replace('\\', '/');
        if (fileName.endsWith('.d.ts')) {
            // Let's figure out what to do for declarations later.
            return;
        }
        var splitter = 'media/lua/shared/';
        var indexOf = fileName.indexOf('media/lua/shared/');
        if (indexOf !== -1) {
            var subFileName = void 0;
            if (fileName.endsWith('lualib_bundle.lua')) {
                subFileName = 'media/lua/shared/lualib_bundle.lua';
            }
            else {
                subFileName = 'media/lua/' + fileName.substring(indexOf + splitter.length);
            }
            var lua = void 0;
            if (subFileName.endsWith('lualib_bundle.lua')) {
                lua = data;
            }
            else {
                var scope = 'none';
                if (subFileName.startsWith('media/lua/client'))
                    scope = 'client';
                else if (subFileName.startsWith('media/lua/server'))
                    scope = 'server';
                else if (subFileName.startsWith('media/lua/shared'))
                    scope = 'shared';
                lua =
                    (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
                        fixRequire(scope, data) +
                        (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
            }
            checkDir(subFileName);
            fs.writeFileSync(subFileName, lua);
        }
    });
    var timeNow = new Date().getTime();
    var timeDelta = timeNow - timeThen;
    var timeSeconds = timeDelta / 1000;
    cursor.brightGreen();
    process.stdout.write(" Complete. Took ".concat(timeSeconds, " second(s).\n"));
    cursor.reset();
};
var checkDir = function (file) {
    var split = file.split('/');
    var dir = split[0];
    for (var i = 1; i < split.length - 1; i++) {
        dir += "/".concat(split[i]);
    }
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir, { recursive: true });
};
var fixRequire = function (scope, lua) {
    var fix = function (fromImport) {
        var toImport = fromImport.replace('.', '/');
        // let split = toImport.split('.');
        // if(split.length) {
        //     if(split.length === 1) {
        //         toImport = split[0];
        //     } else {
        //         toImport = split[1];
        //         for(let i = 2; i < split.length; i++) {
        //             toImport += '.' + split[i];
        //         }
        //     }
        // }
        // Remove cross-references for client/server/shared.
        if (toImport.startsWith('shared/')) {
            toImport = toImport.substring('shared/'.length);
        }
        else if (toImport.startsWith('client/')) {
            if (scope === 'server') {
                cursor.yellow();
                console.warn("".concat(PREFIX, " - Cannot reference code from src/client from src/server. (Code will fail when ran)"));
                cursor.reset();
            }
            toImport = toImport.substring('client/'.length);
        }
        else if (toImport.startsWith('server/')) {
            if (scope === 'client') {
                cursor.yellow();
                console.warn("".concat(PREFIX, " - Cannot reference code from src/server from src/client. (Code will fail when ran)"));
                cursor.reset();
            }
            toImport = toImport.substring('server/'.length);
        }
        return toImport;
    };
    var index = -1;
    do {
        var fromImport = '';
        index = lua.indexOf('require("');
        if (index !== -1) {
            index += 9;
            // Grab the require string.
            while (index < lua.length) {
                var char = lua.charAt(index++);
                if (char === '"')
                    break;
                fromImport += char;
            }
            var toImport = fix(fromImport);
            // Kahlua only works with '/', nor '.' in 'require(..)'.
            var from = 'require("' + fromImport + '")';
            var to = "require('" + toImport.replace('.', '/') + "')";
            lua = lua.replace(from, to);
        }
    } while (index !== -1);
    return lua;
};
main();
