// ? Let's say we have an array of just 3 elements
let smallList = [1, 2, 3];
let len = smallList.length;

// ? If we were to loop through it with a for loop and print the elements
// ? it would look like this:

for (let i = 0; i < len; i++) {
  console.log(smallList[i]); // Current element
}

// ? The thing to pay attention to in the loop above is
// ? the value of `i`
// ? -> `i` goes through these 3 values: 0 -> 1 -> 2

// * From this, we can conclude that:
// * If an array has a size of N, when we loop through each element,
// * the index variable (i) has to change from 0 to N-1

// ? We write this as
for (let i = 0; i < N; i++) {}
// ? IMPORTANT: Notice that we don't write i < N - 1
// ? IMPORTANT: This is because of the "less than" sign
// ? IMPORTANT: `i` will go to the value N - 1 and after that iteration, the loop won't go on
// ? IMPORTANT: This is because after that iteration, `i` will have the value of N
// ? IMPORTANT: Which means that the condition `N < N` will be false, so the loop ends

// ? Okay, but what happens if on every iteration, we want to print
// ? both the current element, and the next element?
// ? Okay let's try that with the exact same loop as before

for (let i = 0; i < len; i++) {
  console.log(smallList[i]); // Current element
  console.log(smallList[i + 1]); // Next element
}

// * The above loop will not work.
// ? The reason for this is in the LAST iteration of the loop
// ? Let's walk through all the iterations and see why

// * smallList = [1, 2, 3]
// * FIRST ITERATION -> i = 0
// * current element -> smallList[0] "1"
// * next element -> smallList[1] "2"
// ? Everything is fine here

// * SECOND ITERATION -> i = 1
// * current element -> smallList[1] "2"
// * next element -> smallList[2] "3"
// ? Everything is fine here as well

// * THIRD ITERATION -> i = 2
// * current element -> smallList[2] "3"
// * next element -> smallList[3] "ERROR"
// ? This is where the error happens, because smallList[3] doesn't exist

// * From this, we can conclude that if we want to loop through an array
// * and SOMEHOW USE both the current element and next element
// * the index variable (i) CAN'T GO FROM 0 to N-1
// * it needs to go to ONE INDEX LESS THAN THAT

// ? So, we need to change our initial loop
// ? FROM:
for (let i = 0; i < N; i++) {} // goes from 0 to N-1
// ? to:
for (let i = 0; i < N - 1; i++) {} // goes from 0 to N-2

// ? Now our loop will work fine -> `i` will have the values 0 -> 1
for (let i = 0; i < len - 1; i++) {
  console.log("Current:", smallList[i]); // Current element
  console.log("Next:", smallList[i + 1]); // Next element
}

// ? Okay, so now we know how to run a loop when we need to get
// ? the CURRENT and NEXT element at the same time
// * SOLUTION: Run the loop just one iteration less

// ? Go to '3_swapping.js' next
