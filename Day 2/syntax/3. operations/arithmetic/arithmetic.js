// * Arithmetic operations

let a = 20
let b = 10
let result = 0
console.log({ a, b, result }) // I'm using this {} syntax in the console.log to print the values more clearly

// * Addition [+]
result = a + b
console.log({ result }) // 30

// * Subtraction [-]
result = a - b
console.log({ result }) // 10

// * Multiplication [*]
result = a * b
console.log({ result }) // 200

// * Division [/]
result = a / b
console.log({ result }) // 2

// * Modulo [%]
result = a % b
console.log({ result }) // 0
// ! We divide a (20) to b (10), which gives us the result of 2, but the REMAINDER of that operation is 0

// * Shorthands
// Sometimes we need to increment a variable by some value, we can do this a couple of ways

let x = 0
// If we want to increment x by 1, the long way of writing that will be:
x = x + 1
console.log({ x }) // 1
// This is because the x on the RIGHT SIDE of the equals sign, has the value of 0
// because it is yet to be incremented, so what we are essentially writing is "x = 0 + 1"

// This is fine, however there is a shorthand for writing this
let y = 0
y += 1
console.log({ y }) // 1
// If we use [+=], we are essentially saying "Add 1 to the current value of y and make that the new value of y"

// The same thing applies for:
// SUBTRACTION
let age = 100
age -= 10
console.log({ age }) // 90

// MULTIPLICATION
let price = 50
price *= 2
console.log({ price }) // 100

// DIVISION
let years = 100
years /= 4
console.log({ years }) // 25

// * Even more shorthands
// Addition and subtraction have even more shorthands built-in
let newX = 0
newX++
console.log({ newX }) // 1
// Just writing [++] after the name of the variable, increments the value by 1

// The same goes for subtraction, we just use [--]
let newY = 10
newY--
console.log({ newY }) // 9

// ! We can only do this shorthand if we want do increment/decrement the value of a variable by ONE (1)
