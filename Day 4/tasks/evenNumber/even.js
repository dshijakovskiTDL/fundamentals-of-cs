// ? Write a function which checks if a number is even
// ? What does it mean for a number to be even? - The number needs to be DIVISIBLE BY 2

// ? The way we check if ANY NUMBER is divisible by ANY OTHER NUMBER
// ? is with the MODULO operator '%'

function isEven(num) {
	if (num % 2 === 0) {
		return true
	} else {
		return false
	}
}

console.log(isEven(2)) // true
console.log(isEven(3)) // false

// ? Can this be improved somehow? Possibly shortened?
