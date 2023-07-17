import sys

def count_down(num):
    #The function recurses and makes a count down till 0

    print(num)
    new_number = num -1

    if new_number > 0 :
        count_down(new_number)

if len(sys.argv) < 2 :
    print("Sorry no input. Program shutting down")
    sys.exit(1)

try:
    number = int(sys.argv[1])
except ValueError:
    print("Invalid Number")
    sys.exit(1)


count_down(number)