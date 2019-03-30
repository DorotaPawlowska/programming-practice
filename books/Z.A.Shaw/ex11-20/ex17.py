from sys import argv
from os.path import exists

script, from_file, to_file = argv

print(f"Kopiowanie z {from_file} do {to_file}")

# moglibyśmy zrobić te dwie rzeczy w jednej linii? jak?
# in_file = open(from_file)
# indata = in_file.read()
indata = open(from_file).read()

print(f"Plik wejściowy ma {len(indata)} bajtów")

print(f"Czy plik wyjściowy istnieje? {exists(to_file)}")

# print("Wciśnij RETURN, aby kontynuować lub CTRL+C, żeby anulować.")
# input()

# out_file = open(to_file, 'w')
# out_file.write(indata)
open(to_file, 'w').write(indata)

# print("W porządku, zrobione.")

# out_file.close()
# indata.close()
