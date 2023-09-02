// * Optimizing the Bubble Sort algorithm - FINAL

// ! Ol' faithful
let myList = [4, 2, 6, 2, 8, 0, 1, 5]
let len = myList.length

// ! Okay, so our current optimized algorithm looks like this:
// * Bubble Sort algorithm - outer loop optimized
for (let k = 0; k < len - 1; k++) {
	for (let i = 0; i < len - 1; i++) {
		if (myList[i] > myList[i + 1]) {
			// Swap
			let temp = myList[i]
			myList[i] = myList[i + 1]
			myList[i + 1] = temp
		}
	}
}

// * 2. Optimizing the inner loop
// ! Let's now go through that example from before (sorting a small array by hand)
// ! But now let's focus on what the INNER LOOP is doing

let smallArray = [30, 20, 10]
// ! Remember, in our current algorithm, the inner loop will execute N-1 TIMES (in this case that means 2 times)
// ! Also remember that our OUTER LOOP will now execute N-1 TIMES as well

// ! Note: We will label the ELEMENTS BEING COMPARED with a parentheses ()

// * Outer loop 1st iteration
// *    Inner loop 1st iteration finishes     - [(30), (20), 10] -> [(20), (30), 10]
//*     smallArray is now [20, 30, 10]
// *    Inner loop 2nd iteration finishes    - [20, (30), (10)] -> [20, (10), (30)]
// *    smallArray is now [20, 10, 30]

// * Outer loop 2nd iteration
// *    Inner loop 1st iteration finishes     - [(20), (10), 30] -> [(10), (20), 30]
// *    smallArray is now [10, 20, 30] (sorted!!!)
// *    Inner loop 2nd iteration finishes    - [10, (20), (30)] -> [10, (20), (30)]
// *    smallArray is now [10, 20, 30]

// ! Notice how, long before the algorithm ended execution, our array already got sorted
// ! Now this is a small example and you may think to yourself that
// ! It's just three numbers and that's why they got sorted so quickly
// ! However, there is a pattern here that applies to every array

// * Notice this:
// * the 1st time the OUTER LOOP runs -> 1 element is sorted
// * the 2nd time the OUTER LOOP runs -> 2 elements are sorted
// * the 3rd time ... you get the point

// ! Well now let's ask ourselves, WHAT IS THE POINT OF THE INNER LOOP?
// ! The point of the inner loop is to:
// !    - Compare 2 adjacent elements
// !    - Swap them if they are in the wrong order

// * Well, if the 1st ITERATION OF THE OUTER LOOP -> sorts 1 element
// * why would the INNER LOOP need to check that element next time? That element is already sorted

// * We know that DURING the 2nd ITERATION OF THE OUTER LOOP -> 1 element has already been sorted
// * This means the the INNER LOOP now needs to check 1 LESS ELEMENT
// ! Let's continue this logic

// * We know that DURING the 3nd ITERATION OF THE OUTER LOOP -> 2 element has already been sorted
// * This means the the INNER LOOP now needs to check 2 LESS ELEMENTS

// ! This brings us to the last improvement of the algorithm
// * Each iteration of the OUTER LOOP (where k goes from 0 to N-1)
// * -> The INNER LOOP needs to check `k` LESS ELEMENTS

// ! Here's the logic behind it
// * Outer loop 1st iteration STARTS -> k = 0 (0 elements have been sorted)
// * -> Inner loop needs to check 0 less elements

// * Outer loop 2nd iteration STARTS -> k = 1 (1 element has been sorted)
// * -> Inner loop needs to check 1 less element

// * Outer loop 3rd iteration STARTS -> k = 2 (2 element has been sorted)
// * -> Inner loop needs to check 2 less element

// ! So what we need to do is just
// * REDUCE THE NUMBER OF TIMES THE INNER LOOP RUNS BY `k`

// ! That means that instead of our inner loop being
// ? for (let i = 0; i < len - 1; i++) {}
// ! We need to change it to
// ? for (let i = 0; i < len - 1 - k; i++) {}

// ! And finally, our optimized algorithm now looks like this:
// * Bubble Sort algorithm - optimized
for (let k = 0; k < len - 1; k++) {
	for (let i = 0; i < len - 1 - k; i++) {
		if (myList[i] > myList[i + 1]) {
			// Swap
			let temp = myList[i]
			myList[i] = myList[i + 1]
			myList[i + 1] = temp
		}
	}
}
