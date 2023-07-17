import sys

def factorial(num):
    #this function takes in a number and finds the factorial

    if num == 0 :
        return 1
    else:
        return num * factorial(num-1)

if len(sys.argv) < 2:
    print("Please Enter a number")
    sys.exit(1)

try:
    number = int(sys.argv[1])
except ValueError:
    print("Invalid Number")
    sys.exit(1)


result = factorial(number)
print(result)