// * How to construct the Bubble Sort algorithm

// * We will end up with this
for (let k = 0; k < len - 1; k++) {
  for (let i = 0; i < len - 1 - k; i++) {
    if (myList[i] > myList[i + 1]) {
      // Swap
      let temp = myList[i];
      myList[i] = myList[i + 1];
      myList[i + 1] = temp;
    }
  }
}

// * But first, let's start with the basics!

// ? Okay, so first off let's initialize a list that we will be sorting
let myList = [4, 2, 6, 2, 8, 0, 1, 5];

// ? Let's just get the length of that list in a variable
// ? so we don't have to write verbose code
let len = myList.length; // We don't have to do this, its just for convenience

// ? Let's start from scratch, what do we know?
// ? Well, we know that we need to loop through the list and do something with it
// ? Okay then, let's just write that and start from there

// ? for (let i = 0; i < len; i++)

// ? So, using this loop, let's try and get the current element and the next element
// ? and compare the two. If they are in the wrong order, let's just print out "Wrong order"
// ? just to see how that would look like

for (let i = 0; i < len; i++) {
  let currentElement = myList[i];
  // We call it the currentElement (the element at index i)
  // because its position in the array,
  // corresponds with the CURRENT value of `i` in the loop

  let nextElement = myList[i + 1];
  // We call it the next element (the element at index i + 1)
  // because its position in the array,
  // corresponds with the NEXT value of `i` in the loop

  if (currentElement > nextElement) {
    console.log("Wrong order");
  }
}

// * If we run the above loop, we will get an error
// ? Let's look at a simpler example with a smaller array to see why

// ? Go to `2_small_list_example.js` next
