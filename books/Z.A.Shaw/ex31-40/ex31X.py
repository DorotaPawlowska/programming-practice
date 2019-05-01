print("Podaj cyfrę z zakresu od 1 do 3:")
number = input("> ")

if number >= "1" and number <= "3" :
    if number == "1":
        print("""Było blisko ale jednak daleko. 
        Nagroda pocieszenia to zaproszenie do powtórnej gry.""")
    elif number == "2":
        print("""Było blisko ale jednak daleko. 
        Nagroda pocieszenia to poklepanie po plecach.""")
    elif number == "3":
        print("Bingo. Wyrywasz uścisk dłoni prezesa.")
    else:
        print("""Niestety pudło.
        Spróbuj innym razem.""")
else:
    print("nie podałeś dobrej wartości - nie ładnie.")
    print("żegnam.")