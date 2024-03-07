// ? Write 2 functions which find the smallest and largest items in an array, respectfully
// ? Each function needs to take in a list as a parameter and find the min and max elements accordingly

// Before starting the search, we must firstly ASSUME an initial smallest element (MIN)
// This can be done in 2 ways:
// 1. We start with THE FIRST ELEMENT as the assumed MIN
// 2. We start with POSITIVE INFINITY as the assumed MIN

// Here, we will do the first option
// Feel free to implement the second option by yourself
function minItem(list) {
  let min = list[0];

  // Because we used the FIRST ELEMENT as the assumed MIN, we start looking
  // for the MIN element from the SECOND ELEMENT in the array
  for (let i = 1; i < list.length; i++) {
    // ? If the current item is smaller than the current MIN
    if (list[i] < min) {
      // ? Then the current item becomes the new MIN
      min = list[i];
    }
  }

  return min;
}

// Before starting the search, we must firstly ASSUME an initial largest element (MAX)
// This can be done in 2 ways:
// 1. We start with THE FIRST ELEMENT as the assumed MAX
// 2. We start with NEGATIVE INFINITY as the assumed MAX

// Here, we will do the first option
// Feel free to implement the second option by yourself
function maxItem(list) {
  let max = list[0];

  // Because we used the FIRST ELEMENT as the assumed MAX, we start looking
  // for the MAX element from the SECOND ELEMENT in the array
  for (let i = 1; i < list.length; i++) {
    // ? If the current item is larger than the current MAX
    if (list[i] > max) {
      // ? Then the current item becomes the new MAX
      max = list[i];
    }
  }

  return max;
}

let myList = [5, -2, 13, 99, 42, 6];

console.log(minItem(myList)); // -2
console.log(maxItem(myList)); // 99
