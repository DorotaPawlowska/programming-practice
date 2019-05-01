print("Podaj cyfrę: ")
num = int(input("> "))
print("Podaj skok: ")
ink = int(input("> "))

def loop(x, y):
    i = 0
    numbers = []

    while i < x:
        print(f"Na górze i ma wartość {i}")
        numbers.append(i)

        i = i + y
        print("Aktualne liczby: ", numbers)
        print(f"Na dole i ma wrtość {i}")

    print("Te liczby to: ")
    for num in numbers:
        print(num)

loop(num, ink)
