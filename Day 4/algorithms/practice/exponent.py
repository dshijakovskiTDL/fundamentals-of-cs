# Write a function which calculates X^Y

def exponent(x, y):
    result = 1

    for i in range(0, y):
        result = result * x

    return result


print(exponent(2, 2))  # 4 -> 2 * 2
print(exponent(123, 0))  # 1
print(exponent(1, 123))  # 1
# print(exponent(3, 2))  # 9 -> 3 * 3
