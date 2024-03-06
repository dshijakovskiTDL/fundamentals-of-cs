// * Check if a word is a palindrome

// * I need a function that takes in a string
// * I came to the conclusion that I just need to REVERSE the input string
// * and check if its equal to the original input string

function isPalindrome(input) {
  // * Okay, well I can try and loop through the string
  // for (let i = 0; i < input.length; i++)
  // ? This won't work because we need to go in REVERSE order

  // ? Okay, how do I go in reverse?
  // ? Luckily, JavaScript's for loops allow us do directly manipulate the `i` variable at each step

  // * So, firstly, we need to figure out the INITIAL STEP
  // ? `i` has to start from the LAST INDEX of the string
  // ? This means that `i` needs to have the value of `input.length - 1` - as we discussed in the Python example
  // for (let i = input.length - 1; ...)

  // * Okay, then we need to define the ENDING CONDITION
  // ? The loop needs to go on as long as `i` is LARGER THAN OR EQUAL TO 0 (we need `i` to go from some number down to 0)
  // for (let i = input.length - 1; i >= 0; ...)

  // * Lastly, instead of incrementing `i` we just decrement it by 1, for it to go down at each iteration
  // for (let i = input.length - 1; i >= 0; i--)

  // ? We have our for loop, now we create the helper variable for the reversed string
  let reversedInput = "";

  // ? Now we just loop through the input using the for loop we created, and construct the reversed input
  for (let i = input.length - 1; i >= 0; i--) {
    reversedInput += input[i];
  }

  // * Lastly we just check if the two strings are the same, if they are - we found a palindrome!
  if (input === reversedInput) {
    return true;
  } else {
    return false;
  }
}

let result1 = isPalindrome("daniel");
console.log(result1);

let result2 = isPalindrome("kayak");
console.log(result2);
