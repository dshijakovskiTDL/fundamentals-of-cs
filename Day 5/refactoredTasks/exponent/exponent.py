# X to the power of Y

# ? Our original implementation
def exponentOriginal(x, y):
    product = 1

    for i in range(0, y):
        product = product * x

    return product


# ? Refactored
def exponent(x, y):
    return x ** y  # ? '**' is the arithmetic operator for 'power of'
