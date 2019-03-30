from sys import argv

script, filename = argv
# filename = input("nazwa pliku: ")
txt = open(filename)

print(f"Oto twój plik {filename}: ")
print(txt.read())
txt.close()
print("Wpisz ponownie nazwę pliku: ")
file_again = input("> ")

txt_again = open(file_again)

print(txt_again.read())
txt_again.close()