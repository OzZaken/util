// ---------------------- ENUMS ----------------------------------------------------
/**
 * Enums in TypeScript are used to define a set of named constants,
 *  which can be used to represent a group of related values.
 */

enum Color { Red, Green, Blue }

console.log('Color.Red:', Color.Red)
console.log('Color.Blue:', Color.Blue)

enum Color1 { Red = 1, Green, Blue }// Start from 1

enum Color2 { Red = 1, Green = 2, Blue = 9 }// manually set the values

/**
 * By default, enums start from 0 and increment by 1 for each member.
 * However, in TypeScript, we can set a custom value for the first member of the enum,
 * and the rest of the members will be assigned incremental values starting from the first member's value.
 * We can also manually set values for all the members of the enum.

In the code snippet, we can see how we access the enum members using their names.
 When we log Color.Red and Color.Blue, we get their values, which are 0 and 2, respectively.
 */