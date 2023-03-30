# typescript

[typescript play](https://www.typescriptlang.org/play)
## Data Type
| Keyword/Data Type | Description                                                    |
|-------------------|----------------------------------------------------------------|
| `any`             | A type that can represent any type                             |
| `boolean`         | A type that represents a logical value (`true` or `false`)     |
| `number`          | A type that represents a numeric value                          |
| `object`          | A type that represents any non-primitive type                   |
| `string`          | A type that represents a sequence of characters                 |
| `void`            | A type that represents the absence of a value                   |
| `null`            | A type that represents the `null` value                          |
| `undefined`       | A type that represents the `undefined` value                     |
| `never`           | A type that represents a value that can never occur             |
| `enum`            | A way to define a set of named constant values                  |
| `interface`       | A way to define a custom type with properties and methods       |
| `class`           | A way to define a blueprint for creating objects                |
| `public`          | An access modifier that allows a member to be accessed from outside the class |
| `private`         | An access modifier that allows a member to be accessed only from within the class |
| `protected`       | An access modifier that allows a member to be accessed within the class and its subclasses |
| `static`          | A keyword that specifies that a member is associated with the class itself, rather than with an instance of the class |

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