## This program uses the Bubble Sort algorithm to sort an array of numbers in ascending order

	Get an array to be sorted myArray. // From a user input or some other way
	Calculate the lastIndex <- length of myArray - 1

	// We need 2 loops
	//	- The inner loop (j) to do the comparing and swapping (bubbling)
	//	- The outer loop (i) to repeat the bubbling N times
	Loop i <- from 0 to the last index:
	
		// We loop to (lastIndex - 1 - i) because:
		//	"-1" because we use "j+1" inside the loop and we don't want to get out of bounds of the array
		// 	"-i" because after every inner loop, the last i elements are sorted, so no need to go through them again
		Loop j <- from 0 to (lastIndex - 1 - i):
			If myArray[j] > myArray[j + 1]:
				Swap myArray[j] with myArray[j + 1]