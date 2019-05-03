import random

# FUNCTIONS

def rulesOfTheGame():
    print("SIMPLE EYE")
    print("gra polegająca na dobieraniu losowych cyfr z zakresu od 2 do 10 tak by ich suma wyniosła 21")
    print("czy chcesz zagrać TAK/NIE")
    userAnswer = input("> ")

    if userAnswer == "N":
        return False
    else:
        return True

def drawingNumbers():
    yes = True
    answers = []

    while yes:
        number = random.randint(2,10)
        answers.append(number)
        print("wylosowana liczba to: ", number)
        print("dodać kolejną liczbę do kolekcji TAK/NIE")
        userAnswer = input("> ")
        if userAnswer == "NIE" or userAnswer == "N":
            yes = False

    print("twoje wylosowane liczby: ", answers)
    return answers

def sumAllNumbers(collection):
    added = 0
    for i in collection:
        added += i
    return added 

def winOrLoose(score):
    win = 21
    if score == win:
        print("Wygrana! Gratulacje")
    elif score > win:
        print("przegrana - za dużo")
    else:
        print("przegrana - za mało")

def startGame():
    play = rulesOfTheGame()

    while play:
        collection = drawingNumbers()
        score = sumAllNumbers(collection)
        print("twój wynik: ", score)
        winOrLoose(score)

        print("czy chcesz zagrać jeszcze raz? (TAK/NIE)")
        userAnswer = input("> ")
        if userAnswer == "NIE" or userAnswer == "N":
            play = False

# GAME
startGame()