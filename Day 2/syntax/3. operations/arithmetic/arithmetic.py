## * Arithmetic operations

a = 20
b = 10
result = 0
print(a, b, result)

# * Addition [+]
result = a + b
print(result) # 30

# * Subtraction [-]
result = a - b
print(result) # 10

# * Multiplication [*]
result = a * b
print(result) # 200

# * Division [/]
result = a / b
print(result) # 2.0
# ! We don't get the value of 2, rather a decimal number 2.0 - this is the behavior of a division operation

# * Modulo [%]
result = a % b
print(result) # 0
# ! We divide a (20) to b (10), which gives us the result of 2, but the REMAINDER of that operation is 0

# * Shorthands
# Sometimes we need to increment a variable by some value, we can do this a couple of ways

x = 0
# If we want to increment x by 1, the long way of writing that will be:
x = x + 1
print(x) # 1
# This is because the x on the RIGHT SIDE of the equals sign, has the value of 0
# because it is yet to be incremented, so what we are essentially writing is "x = 0 + 1"

# This is fine, however there is a shorthand for writing this
y = 0
y += 1
print(y) # 1
# If we use [+=], we are essentially saying "Add 1 to the current value of y and make that the new value of y"

# The same thing applies for:
# SUBTRACTION
age = 100
age -= 10
print(age) # 90

# MULTIPLICATION
price = 50
price *= 2
print(price) # 100

# DIVISION
years = 100
years /= 4
print(years) # 25.0

# ! There are no [++] or [--] in Python
