// ? Write a function which plays the game of FizzBuzz
// ? The function accepts a number N and counts from 1 to N in according to the following rules:

// ? If the number is divisible by 3 -> print out 'Fizz'
// ? If the number is divisible by 5 -> print out 'Buzz'
// ? If the number is divisible both by 3 and 5 -> print out 'FizzBuzz'
// ? In any other case -> print out the number

function fizzBuzz(n) {
	for (let i = 1; i <= n; i++) {
		// Firstly we must check the 'FizzBuzz' scenario
		// Because it is a more specific case - covering both divisibility by 3 AND 5
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz')
			// Then, we look for divisibility by ONLY one number
		} else if (i % 3 === 0) {
			console.log('Fizz')
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}

fizzBuzz(15)

// ? Can this be improved somehow? Possibly shortened?
