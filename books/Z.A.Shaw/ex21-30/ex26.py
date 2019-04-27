from sys import argv

# ==========================================================================

print("Ile masz lat?", end=' ')
age = input()
print("Ile masz wzrostu?", end=' ')
height = input()
print("Ile ważysz?", end=' ')
weight = input()

print(f"Więc masz {age} lat, {height} wzrostu i ważysz {weight}.")

# ==========================================================================

script, filename = argv

txt = open(filename)

print(f"Oto Twój plik {filename}:")
print(txt.read())

print("Wpisz ponownie nazwę pliku:")
file_again = input("> ")

txt_again = open(file_again)

print(txt_again.read())

# ==========================================================================

print('Przećwiczmy wszystko.')
print('Musisz poćwiczyć sekwencje ucieczki ze znakiem \\, które wstawiają \n nowe linie oraz \t tabulatory.')

poem = """
\tTen piękny świat
z tak mocno osadzoną logiką
nie potrafi dostrzec \n potrzeby miłości
ani pojąć pasji płynącej z przeczucia
i wymaga wyjaśnienia
\n\t\tale żadnego nie ma.
"""

print("--------------")
print(poem)
print("--------------")

five = 10 - 2 - 3
print(f"To powinno wynosić pięć: {five}")

# ==========================================================================

def secret_formula(started):
    jelly_beans = started * 500
    jars = jelly_beans / 1000
    crates = jars * 100
    return jelly_beans, jars, crates

start_point = 10000
beans, jars, crates = secret_formula(start_point)

# pamiętaj, że jest to kolejny sposób formatowania łańcucha znaków
print("Zaczynamy od wartości początkowej: {}".format(start_point))
# działa to podobnie do łańcucha znaków f""
print(f"To nam da {beans} żelków, {jars} słoików oraz {crates} skrzyń.")

start_point = start_point / 10

print("Możemy również zrobić to w ten sposób:")
formula = secret_formula(start_point)
# jest to prosty sposób zastosowania listy do sformatowanego łańcucha znaków
print("To nam da {} żelków, {} słoików oraz {} skrzyń.".format(*formula))

# ==========================================================================

people = 20
cats = 30
dogs = 15

if people < cats:
    print("Zbyt dużo kotów! Świat jest skazany na zagładę!")

if people < cats:
    print("Nie za dużo kotów! Świat jest ocalony!")

if people < dogs:
    print("Świat się ślini!")

if people > dogs:
    print("Świat jest suchy!")

dogs += 5

if people >= dogs:
    print("Liczba ludzi jest większa lub równa liczbie psów.")

if people <= dogs:
    print("Liczba ludzi jest mniejsza lub równa liczbie psów.")

if people == dogs:
    print("Ludzie są psami.")
