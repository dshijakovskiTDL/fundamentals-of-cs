# Binary Search Algorithm example

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target_element = 7

start_index = 0
end_index = len(my_array) - 1
element_found = False

while start_index <= end_index:
    # We CAST the middle_index to an integer, to avoid decimal (float) numbers
    middle_index = int((start_index + end_index) / 2)
    element = my_array[middle_index]
    
    if target_element == element:
        element_found = True
        break
    
    if target_element > element:
        start_index = middle_index + 1
    else:
        end_index = middle_index - 1
        

if element_found:
    print("We found the element!")
else:
    print("The element doesn't exist in the array.")
