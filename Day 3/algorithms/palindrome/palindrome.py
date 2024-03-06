# Check if a word is a palindrome

# * I need a function that takes in a string
# * I came to the conclusion that I just need to REVERSE the input string
# * and check if its equal to the original input string

def is_palindrome(input):
    # * Okay, well I can try and loop through the string
    # for letter in input: # ! This won't work because we need to go in REVERSE order

    # ! Okay, how do I go in reverse?
    # ! Well, what does going in reverse really mean in the context of code?
    # ! It means that we ACCESS elements from the LAST INDEX first and go DOWN TO 0

    # * We can use Python's range() function, to generate numbers in a specific order!
    # ! Okay, well what do we put as that function's arguments?
    # ! Well the first argument (the starting number) needs to be the LAST INDEX of the string, but how do I know what that is?

    # * Python has another function called len() that gives us the length of a string or an array
    # ! If we use len() we can get the length of the string
    # ! Then if we subtract 1 - because Python is 0-indexed - we get the last index of the input string
    input_length = len(input)

    last_index = input_length - 1

    # ! Okay, progress! Now we can use range() to generate numbers from the `last_index` to 0
    # ! Note: The second argument is the ending number, BUT it is EXCLUSIVE, meaning it is not included in the sequence
    # ! Note: This means that instead of a 0, we need to write -1
    # ! Note: range() accepts a third argument, which is the STEP - the difference between each number in the sequence

    # * So this means that in order for us to get the desired sequence, we need to have:
    # * First argument  ->  last_index
    # * Second argument ->  -1
    # * Step            ->  -1
    # for i in range(last_index, -1, -1):

    # * We have the for loop, now we just need a new string variable to store the reverse string in
    reversed_input = ''

    # ! Now we just loop through the input using the for loop we created, and construct the reversed input
    for i in range(last_index, -1, -1):
        reversed_input += input[i]

    # * Lastly we just check if the two strings are the same, if they are - we found a palindrome!
    if input == reversed_input:
        return True
    else:
        return False


result = is_palindrome('kayak')
print(result)
