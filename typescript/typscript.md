# typescript

[typescript play](https://www.typescriptlang.org/play)

## description
TypeScript is a superset of JavaScript that provides optional static typing and other features that help improve code quality and maintainability.
- A free and open source programming language
created by Microsoft (first made public in October 2012).
- It is a (kind of) a strict superset of JavaScript.
- It adds optional type system.
- Type annotations => compile-time type checking .

The annotations for the primitive types are:
number, boolean and string.

Duck Typing
TS check types by checking the actual structure
AKA duck-typing:
– if it looks like a duck, and quacks like a duck, then it
probably is a duck
– Two objects that has the same set of properties are
considered to be of the same type.
– So I can pass in a new User() or just a user object {}
## Install TypeScript
o get started with TypeScript, you'll need to install it on your machine. You can do this using a package manager like npm or yarn.

```bash
npm install -g typescript
```

## Compiling TypeScript
This will create a new file called "app.js" that contains the compiled JavaScript code.

```bash
tsc app.ts
```

for Compiling onChange:

```bash
tsc app.ts --watch
```

TypeScript up and running in 5 minutes
```bash
npm install -g typescript
echo console.log('Hello!'); > test.ts
tsc test.ts --watch
node test.js
```