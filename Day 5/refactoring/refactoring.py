# Refactoring examples

# * 1. Let's say we have a function that needs to return
# * whether or not a number is even
# ! Our first solution might look something like this:
def isEven(num):
    if num % 2 == 0:
        return True
    else:
        return False

# ! This is correct, but can be made a lot more cleaner and shorter
# * Instead of checking for the boolean result of whether the remainder is 0
# * we can just return that very result, as that tells us what we need to know

# ! So our function can be written like this
def isEvenRefactored(num):
    return num % 2 == 0

# ! The expression `num % 2 === 0` will evaluate to TRUE or FALSE, depending on the value of `num`
# ! If it evaluates to TRUE -> the remainder is 0 -> num is divisible by 2 -> num is EVEN
# ! If it evaluates to false -> the remainder is not 0 -> num is not divisible by 2 -> num is ODD

# * 2. Nested if-statements
# ! Let's say we are making a user authorization system
# ! and we need to check for the existence of a couple of things
# ! before letting the user in our app
# ! Let's say we want to check if the user has a valid username
# ! if the user's password is valid and if they have some kind of token
# ! and return a corresponding error message if they don't have each thing

# ! So, most beginner solutions look like this
def checkUserAuth(validUsername, validPassword, hasToken):
    if validUsername:
        if validPassword:
            if hasToken:
                print('Welcome!') # Let user in...
            else:
                raise Exception('Not a valid token')
        else:
            raise Exception('Password is not valid')
    else:
        raise Exception('Username is not valid')
    

# ! This approach works but is really confusing to read
# ! Moreover, is we want to add some more checks, this will get
# ! even more confusing and nesting if statements just by itself is bad practice

# * What we can do is REVERSE THE LOGIC and check for the reverse conditions first
# * If the reverse conditions are true, we just throw an error and exit out of the function
# * If they are false, we just continue on with the code

# ! So our refactored function wil look like this
def checkUserAuthRefactored(validUsername, validPassword, hasToken):
    if not validUsername: raise Exception('Username is not valid')
    if not validPassword: raise Exception('Password is not valid')
    if not hasToken: raise Exception('Not a valid token')

    # ! Here, we know that the username and password are valid and the user has the token
    print('Welcome!') # Let user in...

