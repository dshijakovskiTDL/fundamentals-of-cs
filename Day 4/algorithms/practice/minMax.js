// 1. Write a function which returns the SMALLEST element in an array

function smallest(arr) {
  // A. Assume that the first element satisfies the condition
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

let list = [-10, 4, 5, 6, -30];
console.log(smallest(list));

// 2. Write a function which returns the BIGGEST element in an array

function biggest(arr) {
  // A. Assume that the first element satisfies the condition
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(biggest(list));
