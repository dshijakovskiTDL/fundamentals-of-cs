// * For loop

// General shape of a for loop:
// ? for (INITIALIZATION; CONDITION; CHANGE) {
// ?    ONE_ITERATION_OF_CODE_EXECUTION
// ? }

// ? INITIALIZATION - we can do anything to initialize the loop
// ? Usually this means initializing a variable to some starting value

// ? CONDITION - this is the condition that if TRUE, continues executing the code

// ? CHANGE - this is the step run AFTER the condition is checked and (if the condition is TRUE)
// ? BEFORE the next iteration of the code. We can use this part of the loop to make
// ? some kind of a change to our conditions (ex. increment the i variable so that the condition check is different next time)

for (let i = 0; i < 10; i++) {
  console.log(i, "Hey there!");
}

// for -> keyword for starting a for loop
//  1. let i = 0 -> initialization step, this piece of code runs before the code inside the loop
//  2. i < 10 -> the condition, this piece of code checks whether or not to continue executing the code
//  3. The code inside the block runs, we call each execution of the code - one iteration
//  4. i++, this is the piece of code that runs if the condition above is met. It runs BEFORE THE NEXT ITERATION

// * The order in which these steps occur is as follows:
// * INITIALIZATION: i = 0
// *  -> CONDITION: 0 < 10 -> TRUE
// *      -> CODE_EXECUTION (first iteration): "0 Hey there!" is printed
// *          -> CHANGE: i++
// *              -> CONDITION: 1 < 10 -> TRUE
// *                  -> CODE_EXECUTION (second iteration): - "1 Hey there!" is printed
// *                     -> CHANGE: i++
// *                         -> etc. until the CONDITION is FALSE
