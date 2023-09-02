// * Swapping algorithm

// ! Okay, let's recap what we have learned so far about the Bubble Sort algorithm

// * For now, we can write a loop, that can print the
// * CURRENT and NEXT element of an array

// ! The next step in the Bubble Sort algorithm is
// ! COMPARING the current and next element and
// ! IF they are in the wrong order -> SWAPPING them

// ! Let's pretend that we don't know HOW to swap them (even though we practiced how to do this earlier)
// ! so let's just write out how that WOULD look like if we did know

// ! First, let's get our initial list back here
let myList = [4, 2, 6, 2, 8, 0, 1, 5]
let len = myList.length

//  Remember, we are going from 0 to N - 2,
//  to get the current and next element in the same iteration
for (let i = 0; i < len - 1; i++) {
	//  Let's put the current and next elements in their own variables (for now)
	//  Just to have a bit of a cleaner code and understand what's going on
	let currentElement = myList[i]
	let nextElement = myList[i + 1]

	// If they are in the wrong order
	if (currentElement > nextElement) {
		// SWAP HERE - we don't know what that looks like yet
		// but this is how the code would look like
		console.log('We should swap here...')
	}
}

// * So let's see how swapping works with a simple example
// ! Let's get two variables and try and swap their values

let a = 10
let b = 20

// ! The first approach would be to just write
// a = b
// b = a
// ! but this won't work for an obvious reason:
// ! The moment we do `a = b` -> `a` gets ASSIGNED the value of `b` (which in this case is 20)
// ! So on the next line, when we do `b = a` -> `b` gets ASSIGNED the value of `a` (which has been changed to 20)
// ! So, we end up with both `a` and `b` having the value of 20

// * How to actually do swapping
// ! There are a multitude of tricks that we can use to swap two variables' values
// ! Some programming languages have neat features that allow us to do it in one line even
// ! However, we will do it the old fashion way which works everywhere every time

// ! To do swapping correctly, we will need to use one more variable
// ! In that variable, we will store the value of `a`
// ! so that when we assign `a` the value of `b`
// ! the previous value of `a` isn't lost

// ! This is how that would look like -> swapping algorithm:
let temp = a // `temp` gets assigned the value of `a` (which is 10)
a = b // THEN `a` gets assigned the value of `b` (which is 20)
b = temp // THEN `b` gets assigned the value of `temp` (AKA the previous value of `a` - which is 10)
// ! That's how the swapping algorithm is done

// ! Now let's use that in our previous loop
// ! IMPORTANT: We will not use the helper variables currentElement and nextElement now
// ! IMPORTANT: That is because we need to ALTER THE ARRAY ITSELF
for (let i = 0; i < len - 1; i++) {
	if (myList[i] > myList[i + 1]) {
		// Swap
		let temp = myList[i]
		myList[i] = myList[i + 1]
		myList[i + 1] = temp
	}
}

// ! Nice! We have performed ONE ITERATION of the Bubble Sort algorithm
// ! With the code written above, we have managed to get
// ! THE LARGEST ELEMENT IN THE ARRAY, TO END UP AT THE END OF THE ARRAY
console.log(myList) // [2, 4, 2, 6, 0, 1, 5, 8] -> the 8 is at the end of the array
// ! Now we just need 1 more step to finish our algorithm

// ? Go to '4_bubble_sort.js' next
