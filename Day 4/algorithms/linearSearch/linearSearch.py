# ? Write a function to implement the Linear Search Algorithm
# ? The algorithm works by looking through each element in a collection
# ? one by one, until if finds the target element

# ? In this specific implementation:
# ? We will return the POSITION of the element in the array - if it's found
# ? We will return -1 - if the element is not found
def linearSearch(list, element):
    for index in range(0, len(list)):
        if list[index] == element:
            return index

    return -1
    # If the for loop completes, it means that we haven't found the element
    # So we just return -1
    # ! Note: It is convention to return -1 to represent an INVALID INDEX


myList = [6, 1, 15, 7, 21, 80]
print(linearSearch(myList, 7))  # 3
print(linearSearch(myList, 80))  # 5
print(linearSearch(myList, 333))  # -1
