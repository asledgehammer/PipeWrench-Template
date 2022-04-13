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

const ansi = require('ansi');
const cursor = ansi(process.stdout);

import * as fs from 'fs';
import * as chokidar from 'chokidar';
import { transpileProject, transpileString } from 'typescript-to-lua';

type Scope = 'client' | 'server' | 'shared' | 'none';

let PREFIX = '[COMPILER]';
let LUA_HEADER_FILE = '';
if (fs.existsSync('./src/header.lua')) LUA_HEADER_FILE = fs.readFileSync('./src/header.lua').toString();
let LUA_FOOTER_FILE = '';
if (fs.existsSync('./src/footer.lua')) LUA_FOOTER_FILE = fs.readFileSync('./src/footer.lua').toString();

const main = () => {
    if (!fs.existsSync('./media/lua')) fs.mkdirSync('./media/lua', { recursive: true });
    if (!fs.existsSync('./media/lua/client')) fs.mkdirSync('./media/lua/client', { recursive: true });
    if (!fs.existsSync('./media/lua/server')) fs.mkdirSync('./media/lua/server', { recursive: true });
    if (!fs.existsSync('./media/lua/shared')) fs.mkdirSync('./media/lua/shared', { recursive: true });
    let args = process.argv.reverse();
    args.pop();
    args.pop();
    args = args.reverse();
    if (args.length !== 0) {
        const argLower = args[0].toLowerCase();
        if (argLower === '-w' || argLower === '--watch') {
            PREFIX = '[WATCHER]';
            chokidar.watch('./src', { ignoreInitial: true }).on('all', (event, path) => {
                while (path.indexOf('\\') !== -1) {
                    path = path.replace('\\', '/');
                }
                const pathLower = path.toLowerCase();
                if (pathLower === 'src/header.lua' || pathLower === 'src/footer.lua') {
                    return;
                }
                if (event === 'add' || event === 'change') {
                    if (!fs.lstatSync(path).isFile()) return;
                    if (pathLower.endsWith('.lua')) {
                        copyFile(path, 'media/lua' + path.substring(3));
                        return;
                    }
                    if (pathLower.endsWith('.d.ts') || !pathLower.endsWith('.ts')) {
                        return;
                    }
                    cursor.grey();
                    console.log(`${PREFIX} - File changed: ${path}`);
                    cursor.reset();
                    compileProject();
                } else if (event === 'unlink') {
                    let dst = 'media/lua' + path.substring(3);
                    if (dst.toLowerCase().endsWith('.ts')) {
                        dst = dst.substring(0, dst.length - 2) + 'lua';
                    }
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        cursor.reset();
                        fs.rmSync(dst);
                        console.log(`${PREFIX} - Deleted file: ${dst}`);
                    }
                } else if (event === 'unlinkDir') {
                    let dst = 'media/lua' + path.substring(3);
                    if (fs.existsSync(dst)) {
                        cursor.grey();
                        cursor.reset();
                        fs.rmdirSync(dst);
                        console.log(`${PREFIX} - Deleted directory: ${dst}`);
                    }
                } else if (event === 'addDir') {
                    const dst = 'media/lua' + path.substring(3);
                    if (!fs.existsSync(dst)) {
                        cursor.grey();
                        console.log(`${PREFIX} - Created file: ${dst}`);
                        cursor.reset();
                        fs.mkdirSync(dst, { recursive: true });
                    }
                }
            });
        }
    }
    compileProject();
};

const copyNonCompileFilesInDir = (srcDir: string, dstDir: string) => {
    const files = fs.readdirSync(srcDir);
    for (const file of files) {
        if (file.toLowerCase().endsWith('.ts')) continue;
        const path = `${srcDir}/${file}`;
        const lstat = fs.lstatSync(path);
        if (lstat.isDirectory()) {
            copyNonCompileFilesInDir(path, path.replace(srcDir, dstDir));
        } else {
            copyFile(path, path.replace(srcDir, dstDir));
        }
    }
};

const copyFile = (src: string, dst: string) => {
    cursor.grey();
    console.log(`${PREFIX} - Copying "${src}" to "${dst}"..`);
    cursor.reset();
    checkDir(dst);
    if (dst.toLowerCase().endsWith('.lua') && !dst.toLowerCase().endsWith('shared/zomboid.lua') && !dst.toLowerCase().endsWith('shared/events.lua')) {
        let lua =
            (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
            fs.readFileSync(src).toString() +
            (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
        fs.writeFileSync(dst, lua);
    } else {
        fs.copyFileSync(src, dst);
    }
};

const compileProject = () => {
    cursor.brightGreen();
    process.stdout.write(`${PREFIX} - Compiling project..\n`);
    cursor.reset();
    const timeThen = new Date().getTime();
    copyNonCompileFilesInDir('./src/client', './media/lua/client');
    copyNonCompileFilesInDir('./src/server', './media/lua/server');
    copyNonCompileFilesInDir('./src/shared', './media/lua/shared');
    transpileProject(
        'tsconfig.json',
        {},
        (fileName: string, data: string, _writeByteOrderMark: boolean, _onError?: (message: string) => void) => {
            while (fileName.indexOf('\\') !== -1) fileName = fileName.replace('\\', '/');
            if (fileName.endsWith('.d.ts')) {
                // Let's figure out what to do for declarations later.
                return;
            }
            const splitter = 'media/lua/shared/';
            const indexOf = fileName.indexOf('media/lua/shared/');
            if (indexOf !== -1) {
                let subFileName;
                if (fileName.endsWith('lualib_bundle.lua')) {
                    subFileName = 'media/lua/shared/lualib_bundle.lua';
                } else {
                    subFileName = 'media/lua/' + fileName.substring(indexOf + splitter.length);
                }
                let lua;
                if (subFileName.endsWith('lualib_bundle.lua')) {
                    lua = data;
                } else {
                    let scope: Scope = 'none';
                    if (subFileName.startsWith('media/lua/client')) scope = 'client';
                    else if (subFileName.startsWith('media/lua/server')) scope = 'server';
                    else if (subFileName.startsWith('media/lua/shared')) scope = 'shared';
                    lua =
                        (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
                        fixRequire(scope, data) +
                        (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
                }
                checkDir(subFileName);
                fs.writeFileSync(subFileName, lua);
            }
        }
    );
    const timeNow = new Date().getTime();
    const timeDelta = timeNow - timeThen;
    const timeSeconds = timeDelta / 1000;
    cursor.brightGreen();
    process.stdout.write(`${PREFIX} - Compilation complete. Took ${timeSeconds} second(s).\n`);
    cursor.reset();
};

const checkDir = (file: string) => {
    const split = file.split('/');
    let dir = split[0];
    for (let i = 1; i < split.length - 1; i++) {
        dir += `/${split[i]}`;
    }
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const fixRequire = (scope: Scope, lua: string): string => {
    const fix = (fromImport: string): string => {
        let toImport = fromImport.replace('.', '/');
        // Remove cross-references for client/server/shared.
        if (toImport.startsWith('shared/')) {
            toImport = toImport.substring('shared/'.length);
        } else if (toImport.startsWith('client/')) {
            if (scope === 'server') {
                cursor.yellow();
                console.warn(
                    `${PREFIX} - Cannot reference code from src/client from src/server. (Code will fail when ran)`
                );
                cursor.reset();
            }
            toImport = toImport.substring('client/'.length);
        } else if (toImport.startsWith('server/')) {
            if (scope === 'client') {
                cursor.yellow();
                console.warn(
                    `${PREFIX} - Cannot reference code from src/server from src/client. (Code will fail when ran)`
                );
                cursor.reset();
            }
            toImport = toImport.substring('server/'.length);
        }
        return toImport;
    };
    let index = -1;
    do {
        let fromImport = '';
        index = lua.indexOf('require("');
        if (index !== -1) {
            index += 9;
            // Grab the require string.
            while (index < lua.length) {
                const char = lua.charAt(index++);
                if (char === '"') break;
                fromImport += char;
            }
            const toImport = fix(fromImport);
            // Kahlua only works with '/', nor '.' in 'require(..)'.
            const from = 'require("' + fromImport + '")';
            let to = "require('" + toImport.replace('.', '/') + "')";
            lua = lua.replace(from, to);
        }
    } while (index !== -1);
    return lua;
};

main();
