// Write a function which checks if a number is even

function isEven(num) {
  // To get the remainder of a division operation
  // return num % 2 === 0 - the best solution

  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let result1 = isEven(4);
let result2 = isEven(7);

console.log(result1);
console.log(result2);
