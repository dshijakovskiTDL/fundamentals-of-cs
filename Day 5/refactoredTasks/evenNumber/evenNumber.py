# Check if a number is even

# ? Our original implementation
def isEvenOriginal(num):
	if num % 2 == 0:
		return True
	else:
		return False
}

# ? Refactored
def isEven(num):
	return num % 2 == 0
