# ta funckja jest podobna do skryptów z argv
def print_two(*args):
    arg1, arg2 = args
    print(f"arg1: {arg1}, arg2: {arg2}")

# ok, to *args jest właściwie bezcelowe; możemy po prostu zrobić tak
def print_two_again(arg1, arg2):
    print(f"arg1: {arg1}, arg2: {arg2}")

# ta funkcja przyjmuje po prostu jeden argument
def print_one(arg1):
    print(f"arg1: {arg1}")

# ta funkcja nie przyjmuje żadnych argumentów
def print_none():
    print("Ja nie mam nic.")

print_two("Zed", "Shaw")
print_two_again("Zed", "Shaw")
print_one("Pierwszy!")
print_none()