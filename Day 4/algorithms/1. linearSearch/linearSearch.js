// ? Write a function to implement the Linear Search Algorithm
// ? The algorithm works by looking through each element in a collection
// ? one by one, until if finds the target element

// ? In this specific implementation:
// ? We will return the POSITION of the element in the array - if it's found
// ? We will return -1 - if the element is not found
function linearSearch(list, element) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return i;
    }
  }

  return -1;
  // If the for loop completes, it means that we haven't found the element
  // So we just return -1
  // ? Note: It is convention to return -1 to represent an INVALID INDEX
}

let myList = [6, 1, 15, 7, 21, 80];
console.log(linearSearch(myList, 7)); // 3
console.log(linearSearch(myList, 80)); // 5
console.log(linearSearch(myList, 333)); // -1
