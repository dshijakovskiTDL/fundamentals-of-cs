// FizBuzz game

// ? Our original implementation
function fizzBuzzOriginal(n) {
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

// ? Refactored
function fizzBuzz(n) {
	for (i = 1; i <= n; i++) {
		let output = ''

		if (i % 3 === 0) output += 'Fizz'
		if (i % 5 === 0) output += 'Buzz'

		if (output.length === 0) console.log(i)
		else console.log(output)
	}
}
