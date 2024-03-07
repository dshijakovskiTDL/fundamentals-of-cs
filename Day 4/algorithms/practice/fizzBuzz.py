# Write a function which plays the game FizzBuzz
# This function will accept a number N => 1 to N

# If the number is divisible by 3 -> print out "Fuzz" on a new line
# If the number is divisible by 5 -> print out "Buzz" on a new line
# If the number is divisible by 7 -> print out "Bizz" on a new line
# If the number is divisible by BOTH 3 and 5 -> print out "FuzzBuzz" on a new line
# If the number is divisible by BOTH 3 and 5 and 7 -> print out "FuzzBuzzBizz" on a new line
# In any other case -> print out the actual number

def fizz_buzz(n):
    # Loop from 1 to N
    for i in range(1, n+1):
        # First check the more SPECIFIC scenario
        if i % 3 == 0 and i % 5 == 0 and i % 7 == 0:
            print("FizzBuzzBizz")
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        elif i % 7 == 0:
            print("Bizz")
        else:
            print(i)


fizz_buzz(15)
