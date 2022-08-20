# PipeWrench: TypeScript for Project Zomboid

![docs](https://i.imgur.com/AP94LfV.png)
![docs](https://i.imgur.com/cnt4Ik5.png)

## What is PipeWrench?

The PipeWrench project has three major goals:

- Allow TypeScript to Lua as an alternative to only using Lua when coding mods in Project Zomboid.
- Expose all API used throughout Project Zomboid's Lua codebase with documenting types, generics, and methods with their associated parameters.
- Provide structured, scalable practices to keep code clean and manageable.

Other smaller goals include:

- Ongoing efforts to create an easy-to-use production environment when writing mods.
- Better documentation generated with TypeScript declarations of Project Zomboid's API.

PipeWrench is essentially two major components:

- A Java-based transpiler (source-to-source compiler) that converts exposed API from the core of Project Zomboid to TypeScript declarations, mapping the API in a digestable way for IDE software to intelligently forward to programmers when programming their mods.
- A workspace that compiles TypeScript to Lua that is compatible with the Kahlua2 engine, used by Project Zomboid's runtime environment.

**TL;DR: PipeWrench implements TypeScript support for modding Project Zomboid.**

## What's the point of TypeScript in PZ? Isn't Lua enough?

While you can do everything you need using only Lua (and that's totally fine!), there are a lot of potential issues that come from writing in scripting languages like Lua. Like JavaScript ES5 and prior, Lua itself doesn't deploy any solution for OOP (Object-Oriented Programming), coding practices. For example: While data types exist in Lua, checking parameter values are entirely in the hands of the programmer making for a lot of time spent writing code to maintain a bug-proof codebase. There are a few other issues while implementing pseudo-classes in Lua that deal with assigned properties, property signatures, mutability, visibility scope, property overloading, etc..

With that said, my opinion of Lua is that it is great for smaller projects and exposing otherwise close-sourced operations to allow transformations of code otherwise unreachable by customers & third-party developers. Lua is a fun language, however for a codebase as big as some mods and Project Zomboid's codebase, this can cause a lot of headaches.

An advantage of TypeScript is strong-types. Java is like this too however TypeScript is focused on functional, event-based languages primarily used for JavaScript. It's a language that provides OOP-standard features. Where Lua falls short, TypeScript (Using TSTL), bakes these tools into Lua. Classes, Interfaces, Abstracts, Generics, and other toolsets among what's provided in TypeScript are available to save time and keep your code clean.

If you want to learn more about TypeScript and TypeScriptToLua, check out their websites:

- <https://www.typescriptlang.org/>
- <https://typescripttolua.github.io/>

I won't turn this into an opinion piece, so we'll get into the meat and potatoes of PipeWrench!

## Setup

- `git clone https://github.com/asledgehammer/PipeWrenchTemplate`
- run `npm install` in the main folder.

You should now have a *working* environment.

## Commands

- `npm run clean`: Cleans the `media/lua` output Lua code.
- `npm run build`: Compiles `.ts` files from the `./src/` folder to `.lua` files in the output folder.
- `npm run dev`: Runs a watcher, watching `.lua`, `.ts`, and `.d.ts` files.
