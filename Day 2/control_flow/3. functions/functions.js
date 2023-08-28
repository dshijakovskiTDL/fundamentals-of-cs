// * Functions

// * Functions without inputs

// ! Defining a function in JavaScript starts with the keyword `function`
// ! Then we write the name of the function, followed by parentheses
// ! We can optionally add `input parameters` inside the parentheses
function my_function() {
	console.log("Hey there! I'm a function that prints this cool message!")
}

// ! To call `my_function`, we just write out its name followed by parentheses
my_function()

// * Functions with inputs

// Most of the time, we will need our functions to take in some kind of input
// and then do something with it.
// That is how we write flexible and reusable functions - we make the function do something depending on the input

// ! To add input parameters in a function definition in JavaScript
// ! we just add them inside the parentheses, naming each parameter
// ! and separating multiple parameters with a comma

function greet_person(name) {
	console.log(`Hello ${name}, nice to meet you!`)
}

greet_person('Daniel') // "Hello Daniel, nice to meet you!"
greet_person('Julie') // "Hello Julie, nice to meet you!"

function print_person_info(name, age) {
	console.log(`Person info:`)
	console.log(`\t Name: ${name}`)
	console.log(`\t Age: ${age}`)
}

print_person_info('Daniel', 24)
print_person_info('Julie', 25)
