"use strict";
/**
 * Compiler.ts - For compiling TypeScript files to Lua files using TypeScriptToLua.
 *
 * (Designed for the Project Zomboid environment)
 *
 * TODO: Create declaration files.
 *
 * @author JabDoesThings
 */
exports.__esModule = true;
var ansi = require('ansi');
var cursor = ansi(process.stdout);
var child_process = require("child_process");
var fs = require("fs");
var chokidar = require("chokidar");
var typescript_to_lua_1 = require("typescript-to-lua");
var PREFIX = '[COMPILER]';
var LUA_HEADER_FILE = '';
if (fs.existsSync('./src/header.txt'))
    LUA_HEADER_FILE = fs.readFileSync('./src/header.txt').toString();
var LUA_FOOTER_FILE = '';
if (fs.existsSync('./src/footer.txt'))
    LUA_FOOTER_FILE = fs.readFileSync('./src/footer.txt').toString();
var getModInfo = function () {
    var modInfo = { id: null, name: null, poster: null, description: null, require: [] };
    var modInfoFile = fs.readFileSync('./mod.info').toString();
    var lines = modInfoFile.split('\r\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var lower = line.toLowerCase();
        if (lower.indexOf('id=') !== -1) {
            modInfo.id = line.split('=')[1].trim();
        }
        else if (lower.indexOf('name=') !== -1) {
            modInfo.name = line.split('=')[1].trim();
        }
        else if (lower.indexOf('description=') !== -1) {
            modInfo.description = line.split('=')[1].trim();
        }
        else if (lower.indexOf('poster=') !== -1) {
            modInfo.poster = line.split('=')[1].trim();
        }
        else if (lower.indexOf('require=') !== -1) {
            modInfo.require = line
                .split('=')[1]
                .trim()
                .split(',')
                .map(function (entry) {
                return entry.trim();
            });
        }
    }
    if (modInfo.id == null)
        throw new Error('mod.info has no id.');
    if (modInfo.name == null)
        throw new Error('mod.info has no name.');
    if (modInfo.poster == null)
        throw new Error('mod.info has no poster.');
    if (modInfo.description == null)
        throw new Error('mod.info has no description.');
    return modInfo;
};
var main = function () {
    if (!fs.existsSync('./media/lua'))
        fs.mkdirSync('./media/lua', { recursive: true });
    if (!fs.existsSync('./media/lua/client'))
        fs.mkdirSync('./media/lua/client', { recursive: true });
    if (!fs.existsSync('./media/lua/server'))
        fs.mkdirSync('./media/lua/server', { recursive: true });
    if (!fs.existsSync('./media/lua/shared'))
        fs.mkdirSync('./media/lua/shared', { recursive: true });
    if (!fs.existsSync('./dst'))
        fs.mkdirSync('./dst', { recursive: true });
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
        else if (argLower === '-d' || argLower === '--declarations') {
            compileProjectDeclaration();
            return;
        }
    }
    compileProject();
};
var getFiles = function (srcDir, extension) {
    var toReturn = {};
    var files = fs.readdirSync(srcDir);
    var ext = ".".concat(extension.toLowerCase());
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var path = "".concat(srcDir, "/").concat(file);
        var lstat = fs.lstatSync(path);
        if (lstat.isDirectory()) {
            var dirFiles = getFiles(path, extension);
            for (var _a = 0, _b = Object.keys(dirFiles); _a < _b.length; _a++) {
                var path_1 = _b[_a];
                toReturn[path_1] = dirFiles[path_1];
            }
        }
        else {
            if (!file.toLowerCase().endsWith(ext))
                continue;
            toReturn[path] = fs.readFileSync(path).toString();
        }
    }
    return toReturn;
};
var copyNonCompileFilesInDir = function (srcDir, dstDir) {
    var files = fs.readdirSync(srcDir);
    for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
        var file = files_2[_i];
        if (file.toLowerCase().endsWith('.ts'))
            continue;
        var path = "".concat(srcDir, "/").concat(file);
        var lstat = fs.lstatSync(path);
        if (lstat.isDirectory()) {
            copyNonCompileFilesInDir(path, path.replace(srcDir, dstDir));
        }
        else {
            copyFile(path, path.replace(srcDir, dstDir));
        }
    }
};
var copyFile = function (src, dst) {
    cursor.grey();
    console.log("".concat(PREFIX, " - Copying \"").concat(src, "\" to \"").concat(dst, "\".."));
    cursor.reset();
    checkDir(dst);
    if (dst.toLowerCase().endsWith('.lua') &&
        !dst.toLowerCase().endsWith('shared/zomboid.lua') &&
        !dst.toLowerCase().endsWith('shared/events.lua')) {
        var lua = fs.readFileSync(src).toString();
        if (LUA_HEADER_FILE.length !== 0) {
            var lines = [];
            var header = LUA_HEADER_FILE.split('\r\n');
            for (var index = 0; index < header.length; index++) {
                if (index === header.length - 1 && header[index].length === 0)
                    continue;
                lines.push("--- ".concat(header[index]));
            }
            lua = lines.join('\r\n') + "\r\n\r\n".concat(lua);
        }
        if (LUA_FOOTER_FILE.length !== 0) {
            var lines = [];
            var footer = LUA_FOOTER_FILE.split('\r\n');
            for (var index = 0; index < footer.length; index++) {
                if (index === footer.length - 1 && footer[index].length === 0)
                    continue;
                lines.push("--- ".concat(footer[index]));
            }
            lua += '\r\n' + lines.join('\r\n');
        }
        fs.writeFileSync(dst, lua);
    }
    else {
        fs.copyFileSync(src, dst);
    }
};
var compileProject = function () {
    cursor.brightGreen();
    process.stdout.write("".concat(PREFIX, " - Compiling project..\n"));
    cursor.reset();
    var timeThen = new Date().getTime();
    copyNonCompileFilesInDir('./src/client', './media/lua/client');
    copyNonCompileFilesInDir('./src/server', './media/lua/server');
    copyNonCompileFilesInDir('./src/shared', './media/lua/shared');
    (0, typescript_to_lua_1.transpileProject)('tsconfig.json', { emitDeclarationOnly: false }, function (fileName, data, _writeByteOrderMark, _onError) {
        // Ignore empty files.
        if (data.length === 0)
            return;
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
            if (subFileName.endsWith('lualib_bundle.lua') ||
                subFileName.endsWith('Zomboid.lua') ||
                subFileName.endsWith('Events.lua')) {
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
                lua = fixRequire(scope, data);
                if (LUA_HEADER_FILE.length !== 0) {
                    var lines = [];
                    var header = LUA_HEADER_FILE.split('\r\n');
                    for (var index = 0; index < header.length; index++) {
                        if (index === header.length - 1 && header[index].length === 0)
                            continue;
                        lines.push("--- ".concat(header[index]));
                    }
                    lua = lines.join('\r\n') + "\r\n\r\n".concat(lua);
                }
                if (LUA_FOOTER_FILE.length !== 0) {
                    var lines = [];
                    var footer = LUA_FOOTER_FILE.split('\r\n');
                    for (var index = 0; index < footer.length; index++) {
                        if (index === footer.length - 1 && footer[index].length === 0)
                            continue;
                        lines.push("--- ".concat(footer[index]));
                    }
                    lua += '\r\n' + lines.join('\r\n');
                }
            }
            checkDir(subFileName);
            fs.writeFileSync(subFileName, lua);
        }
    });
    //  compileProjectDeclaration();
    var timeNow = new Date().getTime();
    var timeDelta = timeNow - timeThen;
    var timeSeconds = timeDelta / 1000;
    cursor.brightGreen();
    process.stdout.write("".concat(PREFIX, " - Compilation complete. Took ").concat(timeSeconds, " second(s).\n"));
    cursor.reset();
};
var compileProjectDeclaration = function () {
    var modInfo = getModInfo();
    var fileName = "./dst/".concat(modInfo.id, ".d.ts");
    cursor.brightGreen();
    console.log("".concat(PREFIX, " - Compiling project declarations.. (file: ").concat(fileName, ")"));
    cursor.reset();
    child_process.execSync("npx tsc --declaration --outFile ".concat(fileName));
    var clientDFiles = getFiles('./src/client', 'd.ts');
    var serverDFiles = getFiles('./src/server', 'd.ts');
    var sharedDFiles = getFiles('./src/shared', 'd.ts');
    var lines = fs.readFileSync(fileName).toString().split('\r\n');
    for (var index = 0; index < lines.length; index++) {
        var line = lines[index];
        // Cut out useless declarations that are empty.
        if (line.indexOf('declare module ') !== -1 && line.indexOf('{ }') !== -1) {
            lines.splice(index--, 1);
            continue;
        }
        else if (line.length === 0) {
            lines.splice(index--, 1);
        }
    }
    if (lines.length === 0 && Object.keys(clientDFiles).length === 0 && Object.keys(serverDFiles).length === 0 && Object.keys(sharedDFiles).length === 0) {
        cursor.grey();
        console.log("".concat(PREFIX, " - No declarations to export."));
        cursor.reset();
        child_process.execSync("del-cli ".concat(fileName));
        return;
    }
    lines.push('');
    cursor.brightGreen();
    console.log("".concat(PREFIX, " - Refactoring project declarations.."));
    cursor.reset();
    // Header //////////////
    lines = lines.reverse();
    if (LUA_HEADER_FILE.length !== 0) {
        lines.push('');
        var header = LUA_HEADER_FILE.split('\r\n');
        header = header.reverse();
        for (var index = 0; index < header.length; index++) {
            if (index === header.length - 1 && header[index].length === 0)
                continue;
            lines.push("// ".concat(header[index]));
        }
    }
    lines.push('');
    lines.push('/** @noResolution @noSelfInFile */');
    lines = lines.reverse();
    // Contents //////////////
    for (var _i = 0, _a = Object.keys(clientDFiles); _i < _a.length; _i++) {
        var filePath = _a[_i];
        lines.push("/* File: ".concat(filePath, " */"));
        var fileData = clientDFiles[filePath].split('\r\n');
        for (var _b = 0, fileData_1 = fileData; _b < fileData_1.length; _b++) {
            var line = fileData_1[_b];
            lines.push(line);
        }
    }
    for (var _c = 0, _d = Object.keys(serverDFiles); _c < _d.length; _c++) {
        var filePath = _d[_c];
        lines.push("/* File: ".concat(filePath, " */"));
        var fileData = clientDFiles[filePath].split('\r\n');
        for (var _e = 0, fileData_2 = fileData; _e < fileData_2.length; _e++) {
            var line = fileData_2[_e];
            lines.push(line);
        }
    }
    for (var _f = 0, _g = Object.keys(sharedDFiles); _f < _g.length; _f++) {
        var filePath = _g[_f];
        lines.push("/* File: ".concat(filePath, " */"));
        var fileData = clientDFiles[filePath].split('\r\n');
        for (var _h = 0, fileData_3 = fileData; _h < fileData_3.length; _h++) {
            var line = fileData_3[_h];
            lines.push(line);
        }
    }
    for (var index = 0; index < lines.length; index++) {
        var line = lines[index];
        // Module declarations in d.ts file.
        if (line.indexOf('declare module "client/') !== -1) {
            line = line.replace('declare module "client/', 'declare module "');
        }
        else if (line.indexOf('declare module "server/') !== -1) {
            line = line.replace('declare module "server/', 'declare module "');
        }
        else if (line.indexOf('declare module "shared/') !== -1) {
            line = line.replace('declare module "shared/', 'declare module "');
        }
        // Imports in d.ts file.
        if (line.indexOf('from "client/') !== -1)
            line = line.replace('from "client/', 'from "');
        else if (line.indexOf('from "server/') !== -1)
            line = line.replace('from "server/', 'from "');
        else if (line.indexOf('from "shared/') !== -1)
            line = line.replace('from "shared/', 'from "');
        // Set refactored line.
        lines[index] = line;
    }
    // Footer //////////////
    if (LUA_FOOTER_FILE.length !== 0) {
        var footer = LUA_FOOTER_FILE.split('\r\n');
        for (var index = 0; index < footer.length; index++) {
            if (index === footer.length - 1 && footer[index].length === 0)
                continue;
            lines.push("// ".concat(footer[index]));
        }
    }
    fs.writeFileSync(fileName, lines.join('\r\n') + '\r\n');
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
    if (lua.length === 0)
        return '';
    var fix = function (fromImport) {
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
