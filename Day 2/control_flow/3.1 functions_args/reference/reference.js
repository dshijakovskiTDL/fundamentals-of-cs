// * Pass by reference

// ! A good example of passing a variable by reference is passing in an array
// ! This is because the variable of an array, is actually a POINTER to the array (points to the first element in memory)
// ! So, when passing an array to a function, we are passing it by reference by default

function doSomething(arr) {
	arr.push(6)
	arr[0] = 100
	console.log('arr inside the function:', arr)
}

arr = [1, 2, 3, 4, 5]
doSomething(arr)
console.log('arr outside the function', arr)

// ! Notice how we are changing the CONTENTS of the array
// ! but we are NOT REASSIGNING it to a new value ex. `arr = [1, 2, 3]`.
// ! That is because when we do that, the `arr` inside the function acts as an argument "passed by value"
