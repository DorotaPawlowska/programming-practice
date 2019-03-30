from sys import argv

script, filename = argv

print(f"Wymażemy {filename}.")
print("Jeśli tego nie chcesz, wciśnij CTRL+C (^C).")
print("Jeśli tego chcesz, wciśnij RETURN.")

input("?")

print("Otwieranie pliku...")
target = open(filename, 'w')

print("Wykasowywanie pliku. Do widzenia!")
# target.truncate() # zbędne przy 'w'

print("Teraz poprosze Cię o wpisanie trzech linii tekstu.")

line1 = input("linia 1: ")
line2 = input("linia 2: ")
line3 = input("linia 3: ")

print("Zpiszę je w pliku.")

# target.write(line1)
# target.write("\n")
# target.write(line2)
# target.write("\n")
# target.write(line3)
# target.write("\n")

target.seek(0)
target.write(
f"""{line1}
{line2}
{line3}"""
)

print("A na koniec zamykamy plik.")
target.close()
