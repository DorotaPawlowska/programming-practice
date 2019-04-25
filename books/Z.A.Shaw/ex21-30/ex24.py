print("Przećwiczmy wszystko.")
print('Musisz poćwiczyć sekwencje ucieczki ze znakiem \\, które wstawiają:')
print('\n nowe linie oraz \t tabulatory.')

poem = """
\tTen piękny świat
z tak mocno osadzoną logiką
nie potrafi dostrzec \n potrzeby miłości
ani pojąć pasji płynącej z przeczucia
i wymaga wyjaśnienia
\n\t\tale żadnego nie ma.
"""

print("---------------")
print(poem)
print("---------------")

five = 10 - 2 + 3 - 6
print(f"To powinno wynosić pięć: {five}")

def secret_formula(started):
    jelly_beans = started * 500
    jars = jelly_beans / 1000
    crates = jars / 100
    return jelly_beans, jars, crates

start_point = 10000
beans, jars, crates = secret_formula(start_point)

# pamiętaj, że jest to kolejny sposób formatowania łańcuchów znaków
print("Zaczynamy od wartości początkowej: {}".format(start_point))
# działa to podobnie do łacucha znaków f""
print(f"To nam da {beans} żelek, {jars} słoików oraz {crates} skrzyń.")

start_point = start_point / 10

print("Możemy również zrobić to w ten sposób:")
formula = secret_formula(start_point)
# jest to prosty sposób zastosowania listy do sformatowanego łańcucha znaków
print("To nam da {} żelek, {} słoików oraz {} skrzyń.".format(*formula))