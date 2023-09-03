# Boolean Return

# * Let's say we have a function that needs to return whether or not a number is even

# ! Our first solution might look something like this:
def isEven(num):
    if num % 2 == 0:
        return True
    else:
        return False

# ? This is correct, but can be made a lot more cleaner and shorter
# * Instead of checking for the boolean result of whether the remainder is 0
# * we can just return that very result, as that tells us what we need to know

# ! So our function can be written like this
def isEvenRefactored(num):
    return num % 2 == 0

# ? The expression `num % 2 === 0` will evaluate to TRUE or FALSE, depending on the value of `num`
# ? If it evaluates to TRUE -> the remainder is 0 -> num is divisible by 2 -> num is EVEN
# ? If it evaluates to false -> the remainder is not 0 -> num is not divisible by 2 -> num is ODD
