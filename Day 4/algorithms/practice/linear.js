// Write a function that does a linear search
// - have an array - myArr
// - need to look for the number 7

// - if it exists - return its INDEX (position inside of the array)
// - if not - return -1

function linearSearch(arr, targetNumber) {
  // linear search - goes through every element in the array and checks it
  // one-by-one

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNumber) {
      return i;
    }
  }

  // when the code gets to here - the element has not been found inside of the array
  return -1;
}

let myArr = [5, 40, 7, 88, 100];
console.log(linearSearch(myArr, 4000));
