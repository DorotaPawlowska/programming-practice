ten_things = "Jabłka Pomarańcze Wony Telefon Światło Cukier"

print("Chwileczkę, na tej liście nie ma 10 rzeczy. Poprawmy to.")

stuff = ten_things.split(' ')
more_stuff = ["Dzień", "Noc", "Piosenka", "Frisbee", "Kukurydza", "Banan", "Dziewczyna", "Chłopak"]

while len(stuff) != 10:
    next_one = more_stuff.pop()
    print("Dodawanie: ", next_one)
    stuff.append(next_one)
    print(f"Teraz jest {len(stuff)} elementów.")

print("Teraz to mamy: ", stuff)

print("Zróbmy jeszcze parę rzeczy ze stuff.")

print(stuff[1])
print(stuff[-1]) # łał! nieźle
print(stuff.pop())
print(' '.join(stuff)) #serio? super!
print('#'.join(stuff[3:5])) # super hiper!