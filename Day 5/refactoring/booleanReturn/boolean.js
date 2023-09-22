// Boolean Return

// * Let's say we have a function that needs to return whether or not a number is larger than 100

// ! Our first solution might look something like this:
function isLargeNum(num) {
	if (num > 100) {
		return true
	} else {
		return false
	}
}

// ? This is correct, but can be made a lot more cleaner and shorter
// * Instead of checking for the boolean result of whether the number is larger than 100
// * we can just return that very result, as that tells us what we need to know

// ! So our function can be written like this
function isLargeNumRefactored(num) {
	return num > 100
}

// ? The expression `num > 100` will evaluate to TRUE or FALSE, depending on the value of `num`
// ? If it evaluates to TRUE -> num is larger than 100
// ? If it evaluates to FALSE -> num is smaller than 100 (or equal to it)
