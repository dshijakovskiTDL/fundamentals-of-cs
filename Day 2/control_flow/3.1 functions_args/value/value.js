// * Pass by value

function doSomething(x) {
    x = 100
    console.log("x inside the function:", x)
}
    
x = 10
doSomething(x)
console.log("x outside the function:", x)

// ! It doesn't matter if they are the same name or not