// * Pass by value

function doSomething(x) {
  // This 'x' is a COPY of the 'x' variable outside of the function
  x = 100;
  console.log("x inside the function:", x);
}

x = 10;
doSomething(x);
console.log("x outside the function:", x);
