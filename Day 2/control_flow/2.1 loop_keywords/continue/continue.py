# Continue keyword
# Print out a message when you find an even number

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# * 1. Using the if statement

# ! TIP: To check if a number is even, we just use the "modulo" operator
# ! This operator gives us the remainder of the division operation
# ! Therefore, if the result of a modulo operation X % Y is 0, that means that "X is divisible by Y"

for element in my_list:
        if element % 2 == 0:
            print("Found an even number", element)
            
# This is a fine solution and it works, but there is one potential problem (out of a couple) here:
# 1. The code is indented more than it needs to be. This could cause
# problems in larger code bases (imagine instead of the print statement, we had more code with more indentations)

# There are other problems with that approach, but for the purposes of this course, this is enough.
# Let's now improve this with the continue keyword

# * 2. Using the continue keyword

for element in my_list:
    if element % 2 != 0: # ! If the remainder is NOT 0, then `element` is NOT divisible by 2 (it's not an even number)
        continue
    
    print("Found an even number", element)
    
# This is now much cleaner, as we can write all of our potentially 
# complex code for the even numbers without the extra code indentation
