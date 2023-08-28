## This program uses the binary search algorithm to find an element in a (sorted) array

    Get a sorted array myArray // Either from user input or some other way

    Get the targetElement to search for from user input

    Initialize startIndex to 0
    Initialize endIndex to the last index of the array <- myArray.length - 1
    Initialize boolean elementFound to FALSE

    Loop until the startIndex is is smaller than or equal to the endIndex:
        Calculate middleIndex <- (startIndex + endIndex) / 2
        Get element at index middleIndex <- myArray[middleIndex]

        If targetElement is equal to element:
            elementFound <- TRUE
            Break out of loop
        End if

        If targetElement is larger than element:
            // Move the startIndex at the start of the right half of the array
            // Look in the RIGHT half of the array (where the BIGGER numbers are)
            startIndex <- middleIndex + 1
        Else: // targetElement is smaller than element
            // Move the endIndex at the end of the left half of the array
            // Look in the LEFT half of the array (where the SMALLER numbers are)
            endIndex <- middleIndex - 1
        End if


    If elementFound is TRUE:
        Print "We found the element!"
    Else:
        Print "The element doesn't exist in the array."
