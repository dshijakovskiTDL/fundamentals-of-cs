// ? Write a function which swaps 2 elements in an array
// ? The function needs to take 3 parameters:

// ? The array
// ? Index A
// ? Index B

// ? The function then swaps the elements at 'Index A' and 'Index B' and returns the array

function swap(list, indexA, indexB) {
	// The initial thought would be to just do
	// ? list[indexA] = list[indexB]
	// ? list[indexB] = list[indexA]

	// But this won't work because on the second line, we are assigning
	// the value of list[indexA] to list[indexB]
	// However, because on the first line, we already CHANGED the value of list[indexA]
	// We effectively LOST the initial value of list[indexA]

	// For this reason, we will need A THIRD VARIABLE to hold the initial value of list[indexA]
	// The convention is to call this variable 'temp'

	let temp = list[indexA]

	list[indexA] = list[indexB] // We put the element at 'Index B' at 'Index A'
	list[indexB] = temp // We put the value of temp (which is THE ELEMENT THAT WAS AT 'Index A') at 'Index B'

	return list
}

let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(swap(myList, 0, 9)) // [10, 2, 3, 4, 5, 6, 7, 8, 9, 1]

// ? Can this be improved somehow? Possibly shortened?

// Numbers only
let a = 10
let b = 20
a = a + b
b = a - b
a = a - b
