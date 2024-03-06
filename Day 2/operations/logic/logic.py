
# * Logical operations
# Python has verbose logical operators, closer to the human language

a = True
b = False
result = False

# * AND [&&]
result = a and b
print(result)  # False

# * OR [||]
result = a or b
print(result)  # True

# * NOT [!]
result = not a
print(result)  # False, since a is True

# * EQUALITY [===]
result = a == b
print(result)  # False

# * COMPARISONS [< >]
result = 4 > 5
print(result)  # False

result = 10 < 100
print(result)  # True

# We can combine the NOT and EQUALITY operators to create more complex logical operations

result = 10 <= 10  # True
result = 10 != 50  # True
result = 100 >= 11  # True
