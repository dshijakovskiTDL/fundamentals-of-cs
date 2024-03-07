# ? Write a function which checks if a number is even
# ? What does it mean for a number to be even? - The number needs to be DIVISIBLE BY 2

# ? The way we check if ANY NUMBER is divisible by ANY OTHER NUMBER
# ? is with the MODULO operator '%'

def isEven(num):
    if num % 2 == 0:
        return True
    else:
        return False


print(isEven(2))  # True
print(isEven(3))  # False

# ? Can this be improved somehow? Possibly shortened?
