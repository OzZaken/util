# Typescript

TypeScript is a superset of JavaScript that provides optional static typing and other features that help improve code quality and maintainability.
- A free and open source programming language
created by Microsoft (first made public in October 2012).
- It is a (kind of) a strict superset of JavaScript.
- It adds optional type system.
- Type annotations => compile-time type checking .

<a href="https://www.typescriptlang.org/play" target="_blank">TypeScript Play</a>

The annotations for the primitive types are:
number, boolean and string.
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

## Duck Typing

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
echo console.log('Hello!') > test.ts
tsc test.ts --watch
node test.js
```

## Generics types
feature that allow you to create reusable components that can work with a variety of types. In TypeScript, a generic type is a type that can take one or more type parameters.
For example, consider a function that takes an array of values and returns the first value:

```javascript
function getFirstValue<T>(arr: T[]): T {
  return arr[0]
}
```
In this example, the <T> syntax specifies that the function takes a type parameter named T.
The arr parameter is an array of type T[], and the return type is T.

You can use this function with any type of array, like this:
```javascript
const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']

const firstNumber = getFirstValue(arr1) // type: number
const firstLetter = getFirstValue(arr2) // type: string
```
The getFirstValue function works with arrays of any type, because the type parameter T can be replaced with any type when the function is called.

Generics are also commonly used with classes and interfaces.
For example, you can define an interface for a generic repository:
````javascript
interface Repository<T> {
  getById(id: number): T
  getAll(): T[]
  add(entity: T): void
  update(entity: T): void
  delete(entity: T): void
}
````
