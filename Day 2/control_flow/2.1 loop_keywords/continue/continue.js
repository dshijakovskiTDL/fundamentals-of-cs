// * Continue keyword
// * Print out a message when you find an even number

// * 1. Using the if statement

// ? TIP: To check if a number is even, we just use the "modulo" operator
// ? This operator gives us the remainder of the division operation
// ? Therefore, if the result of a modulo operation X % Y is 0, that means that "X is divisible by Y"

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("Found an even number", i);
  }
}

// This is a fine solution and it works, but there is one potential problem (out of a couple) here:
// 1. The code is indented more than it needs to be. This could cause
// problems in larger code bases (imagine instead of the print statement, we had more code with more indentations)

// There are other problems with that approach, but for the purposes of this course, this is enough.
// Let's now improve this with the continue keyword

// * 2. Using the continue keyword

for (let i = 0; i < 10; i++) {
  // If the remainder is NOT 0, then `element` is NOT divisible by 2 (it's not an even number)
  if (i % 2 !== 0) {
    continue;
  }

  console.log("Found an even number", i);
}

// This is now much cleaner, as we can write all of our potentially
// complex code for the even numbers, without the extra code indentation
