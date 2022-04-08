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
// import * as tsnode from 'ts-node';
// tsnode.create()
var fs = require("fs");
var chokidar = require("chokidar");
var typescript_1 = require("typescript");
var typescript_to_lua_1 = require("typescript-to-lua");
var PREFIX = '[COMPILER]';
var compilerOptions = {
    buildMode: typescript_to_lua_1.BuildMode.Library,
    luaLibImport: typescript_to_lua_1.LuaLibImportKind.Require,
    noHeader: true,
    luaTarget: typescript_to_lua_1.LuaTarget.Universal,
    noImplicitReturns: true,
    moduleResolution: typescript_1.ModuleResolutionKind.Classic,
    noImplicitSelf: true
};
var LUA_HEADER_FILE = "";
var LUA_FOOTER_FILE = "";
if (fs.existsSync('./src/header.lua')) {
    LUA_HEADER_FILE = fs.readFileSync('./src/header.lua').toString();
}
if (fs.existsSync('./src/footer.lua')) {
    LUA_FOOTER_FILE = fs.readFileSync('./src/footer.lua').toString();
}
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
            chokidar.watch('./src').on('all', function (event, path) {
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
                    var scope = 'none';
                    if (pathLower.startsWith('src/client'))
                        scope = 'client';
                    else if (pathLower.startsWith('src/server'))
                        scope = 'server';
                    else if (pathLower.startsWith('src/shared'))
                        scope = 'shared';
                    else
                        return;
                    var dst = '' + path.replace('.ts', '.lua');
                    if (scope === 'client')
                        dst = dst.replace('src/client', 'media/lua/client');
                    else if (scope === 'server')
                        dst = dst.replace('src/server', 'media/lua/server');
                    else if (scope === 'shared')
                        dst = dst.replace('src/shared', 'media/lua/shared');
                    compileFile(scope, path, dst);
                }
                else if (event === 'unlink') {
                    var dst = 'media/lua' + path.substring(3);
                    if (dst.toLowerCase().endsWith('.ts')) {
                        dst = dst.substring(0, dst.length - 2) + 'lua';
                    }
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        console.log("".concat(PREFIX, " - Deleting file \"").concat(dst, "\".."));
                        cursor.reset();
                        fs.rmSync(dst);
                    }
                }
                else if (event === 'unlinkDir') {
                    var dst = 'media/lua' + path.substring(3);
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        console.log("".concat(PREFIX, " - Deleting directory \"").concat(dst, "\".."));
                        cursor.reset();
                        fs.rmdirSync(dst);
                    }
                }
                else if (event === 'addDir') {
                    var dst = 'media/lua' + path.substring(3);
                    if (!fs.existsSync(dst)) {
                        cursor.grey();
                        console.log("".concat(PREFIX, " - Creating \"").concat(dst, "\".."));
                        cursor.reset();
                        fs.mkdirSync(dst, { recursive: true });
                    }
                }
            });
            return;
        }
        var path = args[0];
        var lstat = fs.lstatSync(path);
        if (!fs.existsSync(path)) {
            throw new Error("Path does not exist: ".concat(path));
        }
        if (lstat.isDirectory()) {
            if (path.indexOf('src/client') !== -1)
                handleSrcDir('client', './src/client');
            else if (path.indexOf('src/server') !== -1)
                handleSrcDir('server', './src/server');
            else if (path.indexOf('src/shared') !== -1)
                handleSrcDir('shared', './src/shared');
            else
                throw new Error('Uknown directory: ');
        }
        else {
            if (path.toLowerCase().endsWith('.d.ts') || !path.toLowerCase().endsWith('.ts')) {
                throw new Error("File is not typescript file to compile: ".concat(path));
            }
            var scope = 'none';
            if (path.indexOf('src/client') === 0)
                scope = 'client';
            else if (path.indexOf('src/server') === 0)
                scope = 'server';
            else if (path.indexOf('src/shared') === 0)
                scope = 'shared';
            else
                throw new Error("Path outside scope: ".concat(path));
            var dst = '' + path.replace('.ts', '.lua');
            if (scope === 'client')
                dst = dst.replace('src/client', 'media/lua/client');
            else if (scope === 'server')
                dst = dst.replace('src/server', 'media/lua/server');
            else if (scope === 'shared')
                dst = dst.replace('src/shared', 'media/lua/shared');
            compileFile(scope, path, dst);
        }
    }
    else {
        handleSrcDir('shared', './src/shared');
        handleSrcDir('client', './src/client');
        handleSrcDir('server', './src/server');
    }
};
var copyFile = function (src, dst) {
    cursor.grey();
    console.log("".concat(PREFIX, " - Copying \"").concat(src, "\" to \"").concat(dst, "\".."));
    cursor.reset();
    checkDir(dst);
    if (dst.toLowerCase().endsWith(".lua")) {
        var lua = (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
            fs.readFileSync(src).toString() +
            (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
        fs.writeFileSync(dst, lua);
    }
    else {
        fs.copyFileSync(src, dst);
    }
};
var compileFile = function (scope, path, dst) {
    var _a;
    var pathLower = path.toLowerCase();
    if (pathLower === 'shared' || pathLower === 'client' || pathLower === 'server') {
        throw new Error("Illegal subdirectory name: ".concat(path));
    }
    cursor.brightGreen();
    console.log("".concat(PREFIX, " - Compiling \"").concat(path, "\".."));
    cursor.reset();
    var b = fs.readFileSync(path).toString();
    var result = (0, typescript_to_lua_1.transpileString)(b.toString(), compilerOptions);
    if (((_a = result.file) === null || _a === void 0 ? void 0 : _a.lua) != null) {
        var lua = (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
            fixRequire(scope, result.file.lua) +
            (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
        checkDir(dst);
        fs.writeFileSync(dst, lua);
    }
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
var handleSrcDir = function (scope, path) {
    var sharedSrcFiles = fs.readdirSync(path);
    for (var _i = 0, sharedSrcFiles_1 = sharedSrcFiles; _i < sharedSrcFiles_1.length; _i++) {
        var entry = sharedSrcFiles_1[_i];
        var pathEntry = "".concat(path, "/").concat(entry);
        if (fs.lstatSync(pathEntry).isDirectory()) {
            handleSrcDir(scope, pathEntry);
            continue;
        }
        var entryLower = entry.toLowerCase();
        if (entryLower.endsWith('.d.ts'))
            continue;
        else if (entryLower.endsWith('.ts')) {
            var dstDir = "./media/lua/".concat(path.replace('./src/', ''));
            if (!fs.existsSync(dstDir))
                fs.mkdirSync(dstDir, { recursive: true });
            compileFile(scope, pathEntry, "".concat(dstDir, "/").concat(entry.replace('.ts', '.lua')));
        }
        else if (entryLower.endsWith('.lua')) {
            var dstDir = "./media/lua/".concat(path.replace('./src/', ''));
            if (!fs.existsSync(dstDir))
                fs.mkdirSync(dstDir, { recursive: true });
            copyFile(pathEntry, "".concat(dstDir, "/").concat(entry));
        }
    }
};
var fixRequire = function (scope, lua) {
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
            var toImport = fromImport.replace('.', '/');
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
            // Kahlua only works with '/', nor '.' in 'require(..)'.
            var from = 'require("' + fromImport + '")';
            var to = "require('" + toImport.replace('.', '/') + "')";
            // console.log('\tReplacing "' + from + '" to "' + to + '".');
            lua = lua.replace(from, to);
        }
    } while (index !== -1);
    return lua;
};
main();
