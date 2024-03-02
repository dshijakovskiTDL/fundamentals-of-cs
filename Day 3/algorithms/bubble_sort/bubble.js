// * Bubble Sort Algorithm example

let myList = [4, 2, 6, 2, 8, 0, 1, 5];
let n = myList.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (myList[j] > myList[j + 1]) {
      let temp = myList[j];
      myList[j] = myList[j + 1];
      myList[j + 1] = temp;
    }
  }
}

console.log(myList);
