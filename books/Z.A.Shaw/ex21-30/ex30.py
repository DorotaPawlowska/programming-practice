people = 100
cars = 10
trucks = 55

if cars > people or cars < trucks:
    print("Powinniśmy jechać samochodami.")
elif cars < people:
    print("Nie powinniśmy jechać samochodami.")
else:
    print("Nie możemy się zdecydować.")

if trucks > cars and people < trucks: 
    print("Jest zbyt dużo ciężarówek.")
elif trucks < cars:
    print("Może powinniśmy wziąć ciężarówki.")
else:
    print("Nadal nie mozemy się zdecydować.")

if people > trucks:
    print("W porządku, po prostu weźmy ciężarówki.")
else:
    print("Dobra, w takim razie zostajemy w domu.")

