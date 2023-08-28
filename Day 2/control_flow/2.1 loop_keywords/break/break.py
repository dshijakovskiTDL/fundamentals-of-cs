# Break keyword

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target_value = 3

for element in my_list:
    if element == target_value:
        print("Found the element!")
        break # Exits out of the FIRST LOOP ABOVE IT (which is the loop started on line 6)
