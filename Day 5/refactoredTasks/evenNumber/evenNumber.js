// Check if a number is even

// ? Our original implementation
function isEvenOriginal(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// ? Refactored
function isEven(num) {
  return num % 2 === 0;
}
