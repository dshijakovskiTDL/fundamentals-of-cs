// * While loop

let i = 0;
while (i < 10) {
  console.log(i, "Hey there!");
  i++;
}

// while - keyword for starting a while loop
//  1. i < 10 - the condition, this piece of code checks whether or not to continue executing the code
//  2. The code inside the block runs, we call each execution of the code - one iteration
//  2.a i++ - optional part of a while loop - some change that will eventually end the loop

// General shape of a while loop:
// ! INITIALIZATION (optional)

// ! while(CONDITION) {
// !    ONE_ITERATION_OF_CODE_EXECUTION
// !    CHANGE (optional)
// ! }

// ! INITIALIZATION - the initialization happens OUTSIDE the while loop and it is optional
// ! We don't necessarily need to do any initialization steps (ex. infinite loop)

// ! CONDITION - this is the condition that if TRUE, continues executing the code

// ! CHANGE - this is an optional part that happens SOMEWHERE inside the code block of the while loop
// ! It is optional because we don't always want our loop to end, we may need it to continue executing infinitely
// ! (ex. when animating a game)

// * The order in which these steps occur is pretty self explanatory:
// * INITIALIZATION (optional)
// *  -> CONDITION
// *     -> CODE_EXECUTION (first iteration)
// *         -> CHANGE (optional)
// *             -> CONDITION
// *                 -> CODE_EXECUTION (second iteration)
// *                     -> CHANGE (optional)
// *                         -> etc. indefinitely OR until the CONDITION is false
