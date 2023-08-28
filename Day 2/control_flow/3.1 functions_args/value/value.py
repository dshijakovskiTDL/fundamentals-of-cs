# Pass by value

def do_something(x):
    x = 100
    print("x inside the function:", x)
    
x = 10
do_something(x)
print("x outside the function:", x)

# ! It doesn't matter if they are the same name or not
