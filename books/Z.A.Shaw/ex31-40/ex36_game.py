import random

# FUNCTIONS

def rulesOfTheGame():
    print("SIMPLE EYE")
    print("gra polegająca na dobieraniu cyfr z zakresu od 2 do 10 tak by ich suma wyniosła 21")
    print("czy chcesz zagrać Y/N")
    answer = input("> ")

    if answer == "Y":
        return True
    else:
        return False


def drawingNumbers():

    yes = True
    tablica = []

    while yes:
        liczba = random.randint(2,10)
        tablica.append(liczba)
        print("wylosowana liczba to: ", liczba)
        print("dodać kolejną liczbę do kolekcji TAK/NIE")
        qContinue = input("> ")
        if qContinue == "NIE" or qContinue == "N":
            yes = False

    print("twoje liczby: ", tablica)
    return tablica


def sumAllNumbers(tab):
    suma = 0
    for i in tab:
        suma += i
    return suma 


# GAME

play = rulesOfTheGame()

while play:

    tab = drawingNumbers()
    wynik = sumAllNumbers(tab)
    print("twój wynik: ", wynik)


    print("aby skończyć grę wpisz NIE albo N")
    qContinue = input("> ")
    if qContinue == "NIE" or qContinue == "N":
        play = False
