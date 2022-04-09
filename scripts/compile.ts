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
 
 // import * as tsnode from 'ts-node';
 // tsnode.create()
 
 import * as tstl from 'typescript-to-lua';
 import * as fs from 'fs';
 import * as chokidar from 'chokidar';
 import { ModuleKind, ModuleResolutionKind, ScriptTarget } from 'typescript';
 import { BuildMode, CompilerOptions, LuaLibImportKind, LuaTarget, transpileString, tstlHeader } from 'typescript-to-lua';
 
 type Scope = 'client' | 'server' | 'shared' | 'none';
 
 let PREFIX = '[COMPILER]';
 
 const compilerOptions: CompilerOptions = {
     lib: ['ESNext', 'DOM'],
     outDir: 'media/lua/shared',
     rootDirs: ['./src/shared', './src/client', './src/server', './scripts'],
     typeRoots: ['node_modules/@types', 'typings'],
     module: ModuleKind.ESNext,
     target: ScriptTarget.ESNext,
     allowSyntheticDefaultImports: true,
     declaration: true,
     experimentalDecorators: true,
     strict: true,
 
     buildMode: BuildMode.Library,
     luaLibImport: LuaLibImportKind.Require,
     luaTarget: LuaTarget.Universal,
     moduleResolution: ModuleResolutionKind.NodeJs,
     noHeader: true,
     noImplicitReturns: true,
     noImplicitSelf: true,
 };
 
 let LUA_HEADER_FILE = '';
 let LUA_FOOTER_FILE = '';
 
 if (fs.existsSync('./src/header.lua')) {
     LUA_HEADER_FILE = fs.readFileSync('./src/header.lua').toString();
 }
 
 if (fs.existsSync('./src/footer.lua')) {
     LUA_FOOTER_FILE = fs.readFileSync('./src/footer.lua').toString();
 }
 
 const main = () => {
     if (!fs.existsSync('./media/lua')) fs.mkdirSync('./media/lua', {recursive: true});
     if (!fs.existsSync('./media/lua/client')) fs.mkdirSync('./media/lua/client', {recursive: true});
     if (!fs.existsSync('./media/lua/server')) fs.mkdirSync('./media/lua/server', {recursive: true});
     if (!fs.existsSync('./media/lua/shared')) fs.mkdirSync('./media/lua/shared', {recursive: true});
 
     let args = process.argv.reverse();
     args.pop();
     args.pop();
     args = args.reverse();
 
     if (args.length !== 0) {
         const argLower = args[0].toLowerCase();
         if (argLower === '-w' || argLower === '--watch') {
             PREFIX = '[WATCHER]';
             chokidar.watch('./src').on('all', (event, path) => {
                 
                 while (path.indexOf('\\') !== -1) {
                     path = path.replace('\\', '/');
                 }
 
                 const pathLower = path.toLowerCase();
 
                 if(pathLower === 'src/header.lua' || pathLower === 'src/footer.lua') {
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
 
                     let scope: Scope = 'none';
                     if (pathLower.startsWith('src/client')) scope = 'client';
                     else if (pathLower.startsWith('src/server')) scope = 'server';
                     else if (pathLower.startsWith('src/shared')) scope = 'shared';
                     else return;
 
                     let dst = '' + path.replace('.ts', '.lua');
                     if (scope === 'client') dst = dst.replace('src/client', 'media/lua/client');
                     else if (scope === 'server') dst = dst.replace('src/server', 'media/lua/server');
                     else if (scope === 'shared') dst = dst.replace('src/shared', 'media/lua/shared');
 
                     compileFile(scope, path, dst);
                 } else if (event === 'unlink') {
                     let dst = 'media/lua' + path.substring(3);
                     if (dst.toLowerCase().endsWith('.ts')) {
                         dst = dst.substring(0, dst.length - 2) + 'lua';
                     }
                     if (fs.existsSync(dst)) {
                         cursor.grey();
                         console.log(`${PREFIX} - Deleting file "${dst}"..`);
                         cursor.reset();
                         fs.rmSync(dst);
                     }
                 } else if (event === 'unlinkDir') {
                     let dst = 'media/lua' + path.substring(3);
                     if (fs.existsSync(dst)) {
                         cursor.grey();
                         console.log(`${PREFIX} - Deleting directory "${dst}"..`);
                         cursor.reset();
                         fs.rmdirSync(dst);
                     }
                 } else if (event === 'addDir') {
                     const dst = 'media/lua' + path.substring(3);
                     if (!fs.existsSync(dst)) {
                         cursor.grey();
                         console.log(`${PREFIX} - Creating "${dst}"..`);
                         cursor.reset();
                         fs.mkdirSync(dst, {recursive: true});
                     }
                 }
             });
 
             return;
         }
 
         const path = args[0];
         const lstat = fs.lstatSync(path);
 
         if (!fs.existsSync(path)) {
             throw new Error(`Path does not exist: ${path}`);
         }
 
         if (lstat.isDirectory()) {
             if (path.indexOf('src/client') !== -1) handleSrcDir('client', './src/client');
             else if (path.indexOf('src/server') !== -1) handleSrcDir('server', './src/server');
             else if (path.indexOf('src/shared') !== -1) handleSrcDir('shared', './src/shared');
             else throw new Error('Uknown directory: ');
         } else {
             if (path.toLowerCase().endsWith('.d.ts') || !path.toLowerCase().endsWith('.ts')) {
                 throw new Error(`File is not typescript file to compile: ${path}`);
             }
             let scope: Scope = 'none';
             if (path.indexOf('src/client') === 0) scope = 'client';
             else if (path.indexOf('src/server') === 0) scope = 'server';
             else if (path.indexOf('src/shared') === 0) scope = 'shared';
             else throw new Error(`Path outside scope: ${path}`);
 
             let dst = '' + path.replace('.ts', '.lua');
             if (scope === 'client') dst = dst.replace('src/client', 'media/lua/client');
             else if (scope === 'server') dst = dst.replace('src/server', 'media/lua/server');
             else if (scope === 'shared') dst = dst.replace('src/shared', 'media/lua/shared');
 
             compileFile(scope, path, dst);
         }
     } else {
         handleSrcDir('shared', './src/shared');
         handleSrcDir('client', './src/client');
         handleSrcDir('server', './src/server');
     }
 };
 
 const copyFile = (src: string, dst: string) => {
     cursor.grey();
     console.log(`${PREFIX} - Copying "${src}" to "${dst}"..`);
     cursor.reset();
     checkDir(dst);
 
     if(dst.toLowerCase().endsWith(".lua")) {
         let lua = (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
         fs.readFileSync(src).toString() +
         (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
         fs.writeFileSync(dst, lua);
     } else {
         fs.copyFileSync(src, dst);
     }
 };
 
 const compileFile = (scope: Scope, path: string, dst: string) => {
     const pathLower = path.toLowerCase();
     if (pathLower === 'shared' || pathLower === 'client' || pathLower === 'server') {
         throw new Error(`Illegal subdirectory name: ${path}`);
     }
     cursor.brightGreen();
     console.log(`${PREFIX} - Compiling "${path}"..`);
     cursor.reset();
     let b = fs.readFileSync(path).toString();
     
     
     const result = transpileString(b.toString(), compilerOptions);
 
     if (result.file?.lua != null) {
         const lua =
             (LUA_HEADER_FILE.length !== 0 ? LUA_HEADER_FILE + '\n' : '') +
             fixRequire(scope, result.file.lua) +
             (LUA_FOOTER_FILE.length !== 0 ? '\n' + LUA_FOOTER_FILE : '');
         checkDir(dst);
         fs.writeFileSync(dst, lua);
     }
 };
 
 const checkDir = (file: string) => {
     const split = file.split('/');
     let dir = split[0];
     for (let i = 1; i < split.length - 1; i++) {
         dir += `/${split[i]}`;
     }
     if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
 };
 
 const handleSrcDir = (scope: Scope, path: string) => {
     const sharedSrcFiles = fs.readdirSync(path);
     for (const entry of sharedSrcFiles) {
         const pathEntry = `${path}/${entry}`;
         if (fs.lstatSync(pathEntry).isDirectory()) {
             handleSrcDir(scope, pathEntry);
             continue;
         }
         const entryLower = entry.toLowerCase();
         if (entryLower.endsWith('.d.ts')) continue;
         else if (entryLower.endsWith('.ts')) {
             const dstDir = `./media/lua/${path.replace('./src/', '')}`;
             if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, {recursive: true});
             compileFile(scope, pathEntry, `${dstDir}/${entry.replace('.ts', '.lua')}`);
         } else if (entryLower.endsWith('.lua')) {
             const dstDir = `./media/lua/${path.replace('./src/', '')}`;
             if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, {recursive: true});
             copyFile(pathEntry, `${dstDir}/${entry}`);
         }
     }
 };
 
 const fixRequire = (scope: Scope, lua: string): string => {
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
 
             // Kahlua only works with '/', nor '.' in 'require(..)'.
             const from = 'require("' + fromImport + '")';
             let to = "require('" + toImport.replace('.', '/') + "')";
 
             // console.log('\tReplacing "' + from + '" to "' + to + '".');
             lua = lua.replace(from, to);
         }
     } while (index !== -1);
     return lua;
 };
 
 main();
 