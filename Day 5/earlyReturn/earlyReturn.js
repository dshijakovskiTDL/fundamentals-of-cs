// * Nested if-statements
// ! Let's say we are making a user authorization system
// ! and we need to check for the existence of a couple of things
// ! before letting the user in our app
// ! Let's say we want to check if the user has a valid username
// ! if the user's password is valid and if they have some kind of token
// ! and return a corresponding error message if they don't have each thing

// ! So, most beginner solutions look like this
function checkUserAuth(validUsername, validPassword, hasToken) {
	if (validUsername) {
		if (validPassword) {
			if (hasToken) {
				console.log('Welcome!') // Let user in...
			} else {
				throw new Error('Not a valid token')
			}
		} else {
			throw new Error('Password is not valid')
		}
	} else {
		throw new Error('Username is not valid')
	}
}

// ! This approach works but is really confusing to read
// ! Moreover, if we want to add some more checks, this will get
// ! even more confusing. Also, nesting if-statements just by itself is bad practice

// * What we can do is REVERSE THE LOGIC and check for the reverse conditions first
// * If the reverse conditions are true, we just throw an error and exit out of the function
// * If they are false, we just continue on with the code

// ! So our refactored function wil look like this
function checkUserAuthRefactored(validUsername, validPassword, hasToken) {
	if (!validUsername) throw new Error('Username is not valid')
	if (!validPassword) throw new Error('Password is not valid')
	if (!hasToken) throw new Error('Not a valid token')

	// ! Here, we know that the username and password are valid and the user has the token
	console.log('Welcome!') // Let user in...
}
