# ? Write a function which calculates X to the power of Y
# ? We can do this in multiple ways, but here we will do the most straight-forward approach

# ? When we have an equation of like 'X to the power of Y', we ask ourselves - What does that actually translate to?
# ? Well, that translates to 'X multiplied by itself Y times'
# ? 2 to the power of 3 is just 2 * 2 * 2 (2 multiplied by itself 3 times)

def exponent(x, y):
    # Since we will be doing multiplication, the product needs to start with 1
    # ? If we were doing a sum calculation, this variable would be 0
    product = 1

    # Perform the multiplication Y times
    for i in range(0, y):
        product = product * x

    return product


print(exponent(2, 2))  # 4
print(exponent(2, 3))  # 8
print(exponent(10, 0))  # 1
print(exponent(10, 5))  # 100000

# ? Can this be improved somehow? Possibly shortened?
