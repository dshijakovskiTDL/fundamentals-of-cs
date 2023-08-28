# Bubble Sort Algorithm example

my_list = [4, 2, 6, 2, 8, 0, 1, 5]
n = len(my_list)

# Do the bubbling up N - 1 times
for i in range(0, n):
    # Last `i` elements are already done, no need to go to the end 
    for j in range(0, n - 1 - i):
        if my_list[j] > my_list[j + 1]:
            my_list[j], my_list[j + 1] = my_list[j + 1], my_list[j]
            
            
print(my_list)
