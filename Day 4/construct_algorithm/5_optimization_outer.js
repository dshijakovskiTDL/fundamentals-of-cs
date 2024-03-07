// * Optimizing the Bubble Sort algorithm

// ? The reason why we want to optimize any algorithm
// ? is because we WON'T ALWAYS KNOW the size of the array in real life
// ? It can have 10 elements or 10,000 elements, or even 10,000,000 elements
// ? depending on what we are doing

// ? And if our algorithms aren't optimized, they can perform
// ? MANY redundant operations which will just take more time

// ? So let's try to optimize this thing! 💪

// ? Pikachu, I choose you!
let myList = [4, 2, 6, 2, 8, 0, 1, 5];
let len = myList.length;

// ? Now let's write out Bubble Sort algorithm again

// * Bubble Sort algorithm - not optimized
for (let k = 0; k < len; k++) {
  for (let i = 0; i < len - 1; i++) {
    if (myList[i] > myList[i + 1]) {
      // Swap
      let temp = myList[i];
      myList[i] = myList[i + 1];
      myList[i + 1] = temp;
    }
  }
}

// * 1. Optimizing the outer loop
// ? To see how we can start optimizing this, let's run through
// ? our algorithm by hand, using a really small array
let smallArray = [30, 20, 10]; // [10, 20, 30]

// ? Remember, in our current algorithm, the outer loop will execute N (3) TIMES

// ? Note: We will only focus on the outer loop
// ? Note: We will label the sorted elements with a pair of parentheses ()

// * Outer loop FIRST iteration finishes -> the LARGEST item (30) is sorted
// * -> smallArray is now [20, 10, (30)]

// * Outer loop SECOND iteration finishes -> the SECOND LARGEST item (20) is sorted
// * -> smallArray is now [10, (20), (30)]

// * Outer loop THIRD iteration finishes -> the THIRD LARGEST item (10) is sorted
// * -> smallArray is now [(10), (20), (30)]

// ? BUT WAIT, the array was already sorted in the SECOND ITERATION
// ? This is because of the nature of the algorithm,
// ? -> If we sort N-1 items, the SMALLEST element will be at its correct position by default

// * This leads us to our first improvement:
// * -> WE ONLY NEED TO RUN THE OUTER LOOP N-1 TIMES, INSTEAD OF N TIMES

// ? So our improved algorithm now looks like this
// * Bubble Sort algorithm - outer loop optimized
for (let k = 0; k < len - 1; k++) {
  for (let i = 0; i < len - 1; i++) {
    if (myList[i] > myList[i + 1]) {
      // Swap
      let temp = myList[i];
      myList[i] = myList[i + 1];
      myList[i + 1] = temp;
    }
  }
}

// ? This small change in the outer loop, makes it so that
// ? we loop through every element in the array ONE ITERATION LESS
// ? Imagine if we had an array of 1 million elements -> this would then be a great speed boost!

// ? We CAN stop here, but there is one more optimization that we can make
// ? And its the one what will really speed up our algorithm

// ? Go to '6_optimization_inner.js' next
