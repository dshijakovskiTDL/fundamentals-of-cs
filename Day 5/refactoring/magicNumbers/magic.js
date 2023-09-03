// Magic Numbers

// * Let's say we have a function which calculates the total price of an order given
// * the QUANTITY of items in the order

// * Furthermore, we (the developer) are told that
// *    The price of 1 item is 20 (currency doesn't matter in this example)
// *    The discount is 15%

// ! So, our first approach may look something like this
function totalPriceBad(quantity) {
	let price = quantity * 20 // Total price of all the items
	return price * (1 - 0.15) // Final price with the discount deducted (85% of the total price)
}

// ? The above example doesn't look bad at first, its clean and short
// ? However, another developer looking at this code for the first time,
// ? will have no idea what these numbers are.
// ? What's more, we ourselves will not know the meaning of those numbers (20 and 0.15)
// ? if we take a break from this code and come back to it a couple of weeks later

// * That's why they are called MAGIC NUMBERS
// * We don't know where they came from or what they mean, they just make our code work

// ? To fix this, we can EXTRACT THOSE NUMBERS INTO SEPARATE CONSTANT VARIABLES like this
const PRICE_PER_ITEM = 20
const DISCOUNT_PERCENTAGE = 0.15

// ? Now, when we look at our function, we can clearly see what is being calculated
function totalPriceBetter(quantity) {
	let price = quantity * PRICE_PER_ITEM
	return price * (1 - DISCOUNT_PERCENTAGE)
}

// ? This looks much better, but we can take it one step further
// ? If you notice the '(1 - DISCOUNT_PERCENTAGE)' part, it may not be immediately clear
// ? Why the discount percentage is taken out from the number 1

// ? Upon thinking about it for a little bit, we can infer that the reason is because
// ? the final price returned should actually be 85% of its total value
// * Ex. If the total price is 100
// * Ex. -> the final price when the discount is applied should be 85
// * Ex. -> because 15% has been taken out of it
// ? So, in our example, rather then TAKING OUT 15% of the total price
// ? we just MULTIPLY the total price by 85% -> Which is 100% - 15%

// ? Instead of having to think about this every time we see this piece of code
// ? we can make it easier on ourselves by having ANOTHER CONSTANT VARIABLE
// ? containing the DISCOUNT FACTOR with which to multiple the total price by
const DISCOUNT_FACTOR = 1 - DISCOUNT_PERCENTAGE

// ? Now finally, our function looks much cleaner and easier to understand
function totalPrice(quantity) {
	let price = quantity * PRICE_PER_ITEM
	return price * DISCOUNT_FACTOR
}
