# FizzBuzz game

# ? Our original implementation
def fizzBuzzOriginal(n):
	for i in range (1, n + 1):
		if (i % 3 == 0 and i % 5 == 0):
			print('FizzBuzz')
		elif i % 3 == 0:
			print('Fizz')
		elif i % 5 == 0:
			print('Buzz')
		else:
			print(i)


# ? Refactored
def fizzBuzz(n):
    for i in range(1, n + 1):
        output = ''

        if i % 3 == 0:
            output += 'Fizz'
        if i % 5 == 0:
            output += 'Buzz'

        if len(output) == 0:
            print(i)
        else:
            print(output)

