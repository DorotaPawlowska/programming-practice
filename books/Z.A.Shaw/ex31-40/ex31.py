print("""Wchodzisz do ciemnego pokoju z wieloma drzwiami.
Przechodzisz przez drzwi na 1 czy nr 2 czy nr 3?""")

door = input("> ")

if door == "1":
    print("Widzisz tam wielkiego niedźwiedzia, który zajada sernik.")
    print("Co robisz?")
    print("1. Zabierasz sernik.")
    print("2. Krzyczysz na niedźwiedzia.")

    bear = input("> ")

    if bear == "1":
        print("Niedźwiedz odgryza Ci nos. Dobra robota!.")
    elif bear == "2":
        print("Niedźwiedz odgryza Ci nogi. Dobra robota!.")
    else:
        print(f"Cóż, {bear} to prawdopodobnie lepszy wybór.")
        print("Niedźwiedz ucieka.")

elif door == "2":
    print("Wpatrujesz się w nieskończoną otchłań oka Cthulhu.")
    print("1. Jagody.")
    print("2. Żółte spinacze do bielizny.")
    print("3. Wyrozumiałe rewolwery nucą melodie.")

    insanity = input("> ")

    if insanity == "1" or insanity == "2":
        print("Twoje ciało ocalało, ale masz mózg jak galaretka owocowa.")
        print("Dobra robota!")
    else:
        print("Z szaleństwa gniją Ci oczy i zamieniają się w kałużę błota.")
        print("Dobra robota!")

elif door == "3":
    print("Widzisz przed sobą piękną zieloną łąkę.")
    print("1. Idziesz w jej kierunku.")
    print("2. Odwracasz się napięcie zamykając drzwi.")

    escape = input("> ")

    if escape == "1":
        print("Radosnym krokiem przemierzasz łąkę. Spotykasz sarnę która uśmiecha się do ciebie perłowimy ząbkami.")
        print("Dobra robota!")
    elif escape == "2":
        print("Wpadasz do studni bez dna - spadasz.")
        print("Dobra robota!")
    else:
        print("Budzisz się.")
        print("Dobra robota!")

else:
    print("Potykasz się, nadziweasz na nóż i umierasz. Dobra robota!")