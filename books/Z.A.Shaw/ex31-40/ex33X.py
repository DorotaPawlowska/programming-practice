print("Podaj cyfrę: ")
num = int(input("> "))
print("Podaj skok: ")
ink = int(input("> "))

def loop(x,y):
    numbers = []
    for i in range(0,x,y):
        print(f"i ma wartość {i}")
        numbers.append(i)
        print("Aktualne liczby: ", numbers)
    for num in numbers:
        print(num)

loop(num, ink)
