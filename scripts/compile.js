"use strict";
/**
 * MIT License
 *
 * Copyright (c) 2022 asledgehammer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
exports.__esModule = true;
/**
 * Compiler.ts - For compiling TypeScript files to Lua files using TypeScriptToLua.
 * (Designed for the Project Zomboid environment)
 *
 * @author JabDoesThings
 */
var ansi = require('ansi');
var cursor = ansi(process.stdout);
var child_process = require("child_process");
var fs = require("fs");
var chokidar = require("chokidar");
var typescript_to_lua_1 = require("typescript-to-lua");
var PREFIX = '[COMPILER]';
var LUA_HEADER_FILE = '';
if (fs.existsSync('./scripts/header.txt'))
    LUA_HEADER_FILE = fs.readFileSync('./scripts/header.txt').toString();
var LUA_FOOTER_FILE = '';
if (fs.existsSync('./scripts/footer.txt'))
    LUA_FOOTER_FILE = fs.readFileSync('./scripts/footer.txt').toString();
var REIMPORT_TEMPLATE = '';
if (fs.existsSync('./scripts/reimport_template.lua'))
    REIMPORT_TEMPLATE = fs.readFileSync('./scripts/reimport_template.lua').toString();
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
    if (!fs.existsSync('./dist'))
        fs.mkdirSync('./dist', { recursive: true });
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
var copyNonCompileFilesInDir = function (srcDir, distDir) {
    var files = fs.readdirSync(srcDir);
    for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
        var file = files_2[_i];
        if (file.toLowerCase().endsWith('.ts'))
            continue;
        var path = "".concat(srcDir, "/").concat(file);
        var lstat = fs.lstatSync(path);
        if (lstat.isDirectory()) {
            copyNonCompileFilesInDir(path, path.replace(srcDir, distDir));
        }
        else {
            copyFile(path, path.replace(srcDir, distDir));
        }
    }
};
var copyFile = function (source, destination) {
    cursor.grey();
    console.log("".concat(PREFIX, " - Copying \"").concat(source, "\" to \"").concat(destination, "\".."));
    cursor.reset();
    checkDir(destination);
    if (destination.toLowerCase().endsWith('.lua') &&
        !destination.toLowerCase().endsWith('shared/zomboid.lua') &&
        !destination.toLowerCase().endsWith('shared/events.lua')) {
        var lua = fs.readFileSync(source).toString();
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
        fs.writeFileSync(destination, lua);
    }
    else {
        fs.copyFileSync(source, destination);
    }
};
var compileProject = function () {
    var modInfo = getModInfo();
    // Reimport these files for convenience of debugging while keeping the watcher alive.
    if (fs.existsSync('./scripts/header.txt')) {
        LUA_HEADER_FILE = fs.readFileSync('./scripts/header.txt').toString();
    }
    else {
        LUA_HEADER_FILE = '';
    }
    if (fs.existsSync('./scripts/footer.txt')) {
        LUA_FOOTER_FILE = fs.readFileSync('./scripts/footer.txt').toString();
    }
    else {
        LUA_FOOTER_FILE = '';
    }
    if (fs.existsSync('./scripts/reimport_template.lua')) {
        REIMPORT_TEMPLATE = fs.readFileSync('./scripts/reimport_template.lua').toString();
    }
    else {
        REIMPORT_TEMPLATE = '';
    }
    cursor.brightGreen();
    process.stdout.write("".concat(PREFIX, " - Compiling project..\n"));
    cursor.reset();
    var timeThen = new Date().getTime();
    copyNonCompileFilesInDir('./src/client', './media/lua/client');
    copyNonCompileFilesInDir('./src/server', './media/lua/server');
    copyNonCompileFilesInDir('./src/shared', './media/lua/shared');
    // TODO: Make this process automatic, not hard-coded.
    copyFile('./typings/PipeWrench/41.71/PipeWrench.lua', './media/lua/shared/PipeWrench.lua');
    copyFile('./typings/PipeWrench-Events/41.71/PipeWrench-Events.lua', './media/lua/shared/PipeWrench-Events.lua');
    copyFile('./typings/PipeWrench-Utils/41.71/PipeWrench-Utils.lua', './media/lua/shared/PipeWrench-Utils.lua');
    copyFile('./scripts/lualib_bundle.lua', './media/lua/shared/lualib_bundle.lua');
    // Create these temporary files so that the require paths are a certain pattern.
    if (!fs.existsSync('./src/client/_.ts'))
        fs.writeFileSync('./src/client/_.ts', '');
    if (!fs.existsSync('./src/server/_.ts'))
        fs.writeFileSync('./src/server/_.ts', '');
    if (!fs.existsSync('./src/shared/_.ts'))
        fs.writeFileSync('./src/shared/_.ts', '');
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
                subFileName.endsWith('PipeWrench.lua') ||
                subFileName.endsWith('PipeWrench-Events.lua')) {
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
                lua = applyReimportScript(lua);
                var packageJSON = JSON.parse(fs.readFileSync('./package.json').toString());
                if (LUA_HEADER_FILE.length !== 0) {
                    var lines = [];
                    var header = LUA_HEADER_FILE.split('\r\n');
                    for (var index = 0; index < header.length; index++) {
                        if (index === header.length - 1 && header[index].length === 0)
                            continue;
                        var line = header[index];
                        line = replaceAll(line, '{LICENSE_YEAR}', new Date().getFullYear().toString());
                        line = replaceAll(line, '{LICENSE_OWNER}', packageJSON.author);
                        lines.push(line.length ? "--- ".concat(line) : '---');
                    }
                    lua = lines.join('\r\n') + "\r\n\r\n".concat(lua);
                }
                if (LUA_FOOTER_FILE.length !== 0) {
                    var lines = [];
                    var footer = LUA_FOOTER_FILE.split('\r\n');
                    for (var index = 0; index < footer.length; index++) {
                        if (index === footer.length - 1 && footer[index].length === 0)
                            continue;
                        var line = footer[index];
                        line = replaceAll(line, '{LICENSE_YEAR}', new Date().getFullYear().toString());
                        line = replaceAll(line, '{LICENSE_OWNER}', packageJSON.author);
                        lines.push(line.length ? "--- ".concat(line) : '---');
                    }
                    lua += '\r\n' + lines.join('\r\n');
                }
            }
            checkDir(subFileName);
            fs.writeFileSync(subFileName, lua);
        }
    });
    // Delete the temporary file(s).
    if (fs.existsSync('./src/client/_.ts'))
        fs.unlinkSync('./src/client/_.ts');
    if (fs.existsSync('./src/server/_.ts'))
        fs.unlinkSync('./src/server/_.ts');
    if (fs.existsSync('./src/shared/_.ts'))
        fs.unlinkSync('./src/shared/_.ts');
    var timeNow = new Date().getTime();
    var timeDelta = timeNow - timeThen;
    var timeSeconds = timeDelta / 1000;
    cursor.brightGreen();
    process.stdout.write("".concat(PREFIX, " - Compilation complete. Took ").concat(timeSeconds, " second(s).\n"));
    cursor.reset();
};
/**
 * (NOTE: This is a BETA feature!)
 *
 * Compiles all .ts files in the project to .d.ts files, grouping them together into one exported
 * `.d.ts` file in `./dist/`.
 */
var compileProjectDeclaration = function () {
    var modInfo = getModInfo();
    var fileName = "./dist/".concat(modInfo.id, ".d.ts");
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
    if (lines.length === 0 &&
        Object.keys(clientDFiles).length === 0 &&
        Object.keys(serverDFiles).length === 0 &&
        Object.keys(sharedDFiles).length === 0) {
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
/**
 * A temporary workaround for no `replaceAll` function by default.
 *
 * @param string The string to transform.
 * @param target The target phrase to replace.
 * @param to The phrase to replace the target.
 * @returns The transformed string.
 */
var replaceAll = function (string, target, to, position) {
    if (position === void 0) { position = 0; }
    var index;
    var lastIndex = position;
    while ((index = string.indexOf(target, lastIndex)) !== -1) {
        string = string.replace(target, to);
        lastIndex = index + to.length;
        if (index > string.length)
            break;
    }
    return string;
};
/**
 * Transforms `require(..)` statements compiled by TSTL, replacing `.` with `/`. import paths
 * outside of the folder containers `client`, `server`, and `shared` are modified to resolve
 * properly in the PZ-Kahlua environment.
 *
 * (NOTE: Kahlua2 is an imperfect emulator for Lua 5.1)
 *
 * @param scope The original scope where the require statement came from.
 * @param lua The require statement to fix.
 * @returns The fixed require statement.
 */
var fixRequire = function (scope, lua) {
    if (lua.length === 0)
        return '';
    var fix = function (fromImport) {
        var toImport = replaceAll(fromImport, '.', '/');
        // Remove cross-references for client/server/shared.
        if (toImport.startsWith('shared/')) {
            toImport = toImport.substring('shared/'.length);
        }
        else if (toImport.startsWith('client/')) {
            if (scope === 'server') {
                cursor.yellow();
                console.warn("".concat(PREFIX, " - Cannot reference code from src/client from src/server. ") +
                    '(Code will fail when ran)');
                cursor.reset();
            }
            toImport = toImport.substring('client/'.length);
        }
        else if (toImport.startsWith('server/')) {
            if (scope === 'client') {
                cursor.yellow();
                console.warn("".concat(PREFIX, " - Cannot reference code from src/server from src/client. ") +
                    '(Code will fail when ran)');
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
            var to = "require('" + replaceAll(toImport, '.', '/') + "')";
            lua = lua.replace(from, to);
        }
    } while (index !== -1);
    return lua;
};
/**
 * This applies a codeblock for reimporting Lua objects after PipeWrench loads. The reason for this
 * is due to not having initialized Lua objects when PipeWrench initially loads in Kahlua2. To work
 * around this problem, the assignments are detected when scanned through the compiled TSTL code and
 * then feed into the 'OnPipeWrenchBoot' event wrapper in './scripts/reimport_template.lua`.
 *
 * @param lua The code to transform & append.
 * @returns The transformed code.
 */
var applyReimportScript = function (lua) {
    var assignments = [];
    var lines = lua.split('\n');
    // Look for any PipeWrench assignments.
    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
        var line = lines_2[_i];
        if (line.indexOf('local ') === 0 && line.indexOf('____PipeWrench.') !== -1) {
            assignments.push(line.replace('local ', ''));
        }
    }
    // Only generate a reimport codeblock if there's anything to import.
    if (!assignments.length)
        return lua;
    // Take out the returns statement so we can insert before it.
    lines.pop();
    var returnLine = lines.pop();
    lines.push('');
    // Build the reimport event.
    var compiledImports = '';
    for (var _a = 0, assignments_1 = assignments; _a < assignments_1.length; _a++) {
        var assignment = assignments_1[_a];
        compiledImports += "".concat(assignment, "\n");
    }
    var reimports = REIMPORT_TEMPLATE.replace('-- {IMPORTS}', compiledImports.substring(0, compiledImports.length - 1));
    return "".concat(lines.join('\n'), "\n").concat(reimports, "\n\n").concat(returnLine, "\n");
};
main();
