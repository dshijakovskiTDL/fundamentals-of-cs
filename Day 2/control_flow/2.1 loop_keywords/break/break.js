// * Break keyword

let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetElement = 3;

for (let i = 0; i < myList.length; i++) {
  if (myList[i] === targetElement) {
    console.log("Found the element");
    break; // Exits out of the FIRST LOOP ABOVE IT (which is the loop started on line 6)
  }
}
