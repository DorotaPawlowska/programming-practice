from sys import argv

script, input_file = argv

def print_all(f):
    print(f.read())

def rewind(f):
    f.seek(0)

def print_a_line(line_counter, f):
    print(line_counter, f.readline(), end = " ")

current_file = open(input_file)

print("Najpierw wydrukujmy cały plik:\n")
    
print_all(current_file)

print("Teraz przewińmy do tyłu,tak jak przewija się kasetę.")

rewind(current_file)

print("Wydrukujmy trzy linie:")

current_line = 1
# print(current_line)
print_a_line(current_line, current_file)

# current_line = current_line + 1
current_line += 1
# print(current_line)
print_a_line(current_line, current_file)

# current_line = current_line + 1
current_line += 1
# print(current_line)
print_a_line(current_line, current_file)