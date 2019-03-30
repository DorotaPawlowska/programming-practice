# przypisanie łańcucha znaków do zmiennej
types_of_people = 10
x = f"Istnieje {types_of_people} rodzajów ludzi."

# przypisanie określeń do zmiennych
binarny = "binarny"
do_not = "nie znają"
y = f"Ci, którzy znają system {binarny} i ci, którzy go {do_not}."

# drukowanie zmiennych
print(x)
print(y)

# drukowanie wyrażeń
print(f"Powiedziałem: {x}")
print(f"Powiedziałem również: '{y}'")

# przypisanie łańcucha do zmiennej i użycie funkcji formatującej 
hilarious = False
joke_evaluation = "Czyż to nie jest przezabawny dowcip?! {}"

# wyświetlenie funkcji formatującej
print(joke_evaluation.format(hilarious))

# przypisanie łańcuchów do zmiennych
w = "To jest lewa strona..."
e = "łańcucha znaków z prawą stroną."

# wyświetlenie połączonego łańcucha
print(w + e)