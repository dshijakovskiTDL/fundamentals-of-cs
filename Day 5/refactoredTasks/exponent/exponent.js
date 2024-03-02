// X to the power of Y

// ? Our original implementation
function exponentOriginal(x, y) {
  let product = 1;

  for (let i = 0; i < y; i++) {
    product = product * x;
  }

  return product;
}

// ? Refactored
function exponent(x, y) {
  // ? '**' is the arithmetic operator for 'power of'
  return x ** y;
}
