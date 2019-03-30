from sys import argv 

script, filename = argv

target = open(filename)
print(f"Oto twój plik {filename}: ")
print(target.read())
target.close()
