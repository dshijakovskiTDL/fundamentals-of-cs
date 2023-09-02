# ? Write a function which plays the game of FizzBuzz
# ? The function accepts a number N and counts from 1 to N in according to the following rules:

# ? If the number is divisible by 3 -> print out 'Fizz'
# ? If the number is divisible by 5 -> print out 'Buzz'
# ? If the number is divisible both by 3 and 5 -> print out 'FizzBuzz'
# ? In any other case -> print out the number

def fizzBuzz(n):
    # We range from 1 to n + 1 because the range() function is EXCLUSIVE on the end index
	for i in range (1, n + 1):
		# Firstly we must check the 'FizzBuzz' scenario
		# Because it is a more specific case - covering both divisibility by 3 AND 5
		if (i % 3 == 0 and i % 5 == 0):
			print('FizzBuzz')
			# Then, we look for divisibility by ONLY one number
		elif i % 3 == 0:
			print('Fizz')
		elif i % 5 == 0:
			print('Buzz')
		else:
			print(i)


fizzBuzz(15)

# ? Can this be improved somehow? Possibly shortened?
