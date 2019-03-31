# definicja funkcji
def chees_and_crackers(chees_count, boxes_of_crackers):
    print(f"Masz {chees_count} kawałków sera!")
    print(f"Masz {boxes_of_crackers} paczek krakersów!")
    print("Stary, to wystarczy, żeby zrobić imprezę!")
    print("Zorganizuj sobie koc.\n")

print("Możemy po prostu bezpośrednio podać funkcji liczby:")
# wywołanie funkcji z paramaetrami
chees_and_crackers(20, 30)

print("Albo możemy użyć zmiennych ze skryptu:")
# przypisanie wartosci do zmiennych
amount_of_cheese = 10
amount_of_crackers = 50

chees_and_crackers(amount_of_cheese, amount_of_crackers)

print("Możemy również wykonać wewnętrzne operacje arytmetyczne:")
chees_and_crackers(10 + 20, 5 + 6)

print("I możemy połączyć tw dwie rzeczy, czyli zmienne i operacje arytmetyczne:")
chees_and_crackers(amount_of_cheese + 100, amount_of_crackers + 1000)

print("." * 50 + "\n")

def moja_funkcja(arg1, arg2):
    print(f"pierwszy argument: {arg1}, drugi argument: {arg2}")
    print(f"dodawanie: {arg1 + arg2}")

zmienna1 = 5
zmienna2 = 8

moja_funkcja(3,4)
moja_funkcja(zmienna1, zmienna2)
moja_funkcja(zmienna1 + 2, zmienna2 + 3)
moja_funkcja(3-2, 4-2)
moja_funkcja(zmienna1 - 3, zmienna1 + 3)
moja_funkcja(zmienna2 * 2, zmienna1 * 2)
