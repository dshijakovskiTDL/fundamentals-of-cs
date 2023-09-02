// * Bubble Sort algorithm - putting it all together

// ! Let's get our trusty list back in here
let myList = [4, 2, 6, 2, 8, 0, 1, 5]
let len = myList.length

// ! Quick recap, this is what we have made so far
for (let i = 0; i < len - 1; i++) {
	if (myList[i] > myList[i + 1]) {
		// Swap
		let temp = myList[i]
		myList[i] = myList[i + 1]
		myList[i + 1] = temp
	}
}

// ! After the loop, this is how the array looks like
console.log(myList) // ! [2, 4, 2, 6, 0, 1, 5, 8] -> the 8 is at the end of the array

// * So, we have managed to sort ONE element correctly
// ! What we need next is just to DO THAT MULTIPLE TIMES
// ! Well, we know that if we need to do something multiple times -> we need a loop

// ! Okay, but what would that loop look like?
// ! Well, if we have an array of N elements, and we need to sort all of them
// ! AND we also have the above algorithm, which sorts 1 element
// ! -> It stands to reason that we need to do the above algorithm N times, to sort all the elements
// ! Well, let's do that, take the above algorithm, and wrap it in a loop

// Outer loop
for (let k = 0; k < len; k++) {
	// Our algorithm from before - sorts 1 element correctly
	for (let i = 0; i < len - 1; i++) {
		if (myList[i] > myList[i + 1]) {
			// Swap
			let temp = myList[i]
			myList[i] = myList[i + 1]
			myList[i + 1] = temp
		}
	}
}

// ! Let's see what we have as the resulting array
console.log(myList)

// ! Hurray 🎉
// ! We have successfully sorted our array!
// ! That's it really, that's how the Bubble Sort algorithm works!

// ! We can end it here and stick with this algorithm
// ! OR we can try to optimize it a little bit

// ? Go to '5_optimization_outer.js' next
