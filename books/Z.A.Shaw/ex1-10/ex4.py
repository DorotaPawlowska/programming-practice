# samochody
cars = 100
# miejsca w samochodzie
space_in_a_car = 4
# kierowcy
drivers = 30
# pasażerowie
passengers = 90
# samochodzy nieużywane
cars_not_driven = cars - drivers
# samochody używane
cars_driven = drivers
# dostępna liczba miejsc dla pasażerów
carpool_capacity = cars_driven * space_in_a_car
# średnia liczba pasażerów przypadająca na samochód
average_passengers_per_car = passengers / cars_driven


print("Dostępnych jest ", cars ," samochodów.")
print("Dostępnych jest tylko ", drivers , " kierowców.")
print("Dziś będzie ", cars_not_driven ," pustych samochodów.")
print("Dziś możemy przetransportować ", carpool_capacity ," osób.")
print("Mamy dziś do przewiezienia ", passengers ," pasażerów.")
print("Musimy umieściś średnio ", average_passengers_per_car ," osoby w każdym samochodzie.")