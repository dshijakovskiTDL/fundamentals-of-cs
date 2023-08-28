// * Logical operations

let a = true
let b = false
let result = false

// * AND [&&]
result = a && b
console.log({ result }) // false

// * OR [||]
result = a || b
console.log({ result }) // true

// * NOT [!]
result = !a
console.log({ result }) // false, since a is true

// * EQUALITY [===]
result = a === b
console.log({ result }) // false
// ! We use the triple equals in JavaScript for a more accurate comparison
// ! Otherwise, the double equals is used in most languages

// * COMPARISONS [< >]
result = 4 > 5
console.log({ result }) // false

result = 10 < 100
console.log({ result }) // true

// ! We can combine the NOT and EQUALITY operators to create more complex logical operations

result = 10 <= 10 // true
result = 10 != 50 // true
result = 100 >= 11 // false