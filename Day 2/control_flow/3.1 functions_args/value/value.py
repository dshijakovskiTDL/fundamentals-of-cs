# Pass by value

def do_something(x):
    # This 'x' is a COPY of the 'x' variable outside of the function
    x = 100
    print("x inside the function:", x)


x = 10
do_something(x)
print("x outside the function:", x)
