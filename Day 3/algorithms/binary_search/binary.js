// * Binary Search Algorithm example

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let targetElement = 7

let startIndex = 0
let endIndex = myArray.length - 1
let elementFound = false

while (startIndex <= endIndex) {
	let middleIndex = Math.round((startIndex + endIndex) / 2)
	let element = myArray[middleIndex]

	if (targetElement === element) {
		elementFound = true
		break
	}

	if (targetElement > element) {
		startIndex = middleIndex + 1
	} else {
		endIndex = middleIndex - 1
	}
}

if (elementFound) console.log('We found the element!')
else console.log('The element does not exist in the array.')
