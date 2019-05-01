from sys import exit

def gold_room():
    print("Ten pokój jest pełen złota. Ile złota zabierasz? Podawaj tylko pełne dziesiątki.")

    choice = input("> ")
    if "1" in choice or "0" in choice:
        how_much = int(choice)
    else:
        dead("Stary, naucz się wpisywać liczby.")

    if how_much < 50:
        print("Miło, nie jesteś chciwy, wygrywasz!")
        exit(0)
    else:
        dead("Ty chciwy draniu!")

def bear_room():
    print("Jest tutaj niedźwiedź.")
    print("Niedźwiedź ma beczkę miodu.")
    print("Ten gruby niedźwiedź siedzi przed następnymi drzwiami.")
    print("""Jak przesuniesz niedźwiedźia?
    1. zabieram miód
    2. śmieję się z niedźwiedzia
    3. otwieram drzwi""")
    bear_moved = False
    answers = True

    while True:
        choice = int(input("> "))

        if choice == 1:
            answers = False
            dead("Niedźwiedź spogląda na Ciebie i wali w twarz.")
        elif choice == 2 and not bear_moved:
            print("Niedźwiedź odsunął sie od drzwi.")
            print("Możesz teraz przez nie przejść. Otwórz drzwi.")
            bear_moved = True
        elif choice == 2 and bear_moved:
            answers = False
            print("Niedźwiedź się wkurzył i odgryzł Ci nogę.")
        elif choice == 3 and bear_moved:
            answers = False
            gold_room()
        else:
            print("Nie mam pojęcia, co to znaczy.")

def cthulhu_room():
    print("Widzisz wielkiego złego Cthulhu.")
    print("On, znaczy to, nieważne, wpatruje się w Ciebie, a Ty popadasz w obłęd.")
    print("Ratujesz się ucieczką, czy zjadasz swoją głowę?")
    
    choice = input("> ")

    if "ucieczką" in choice:
        start()
    elif "głowę" in choice:
        dead("To było pyszne!")
    else:
        cthulhu_room()

def dead(why):
    print(why, "Dobra robota!")
    exit(0)

def start():
    print("Znajdujesz się w mrocznym pokoju.")
    print("Po lewej i po prawej znajdują się drzwi.")
    print("Które wybierasz?")

    choice = input("> ")

    if choice == "lewe":
        bear_room()
    elif choice == "prawe":
        cthulhu_room()
    else:
        dead("Błąkasz sie po pokouj, aż w końcu umierasz z głodu.")

start()
