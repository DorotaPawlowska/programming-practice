# województwa i ich skróty tablic rejestracyjnych
wojewodztwa = {
    "podlaskie": "B", 
    "kujawsko-pomorskie": "C",
    "dolnośląskie": "D",
    "łódzkie": "E", 
    "lubuskie": "F", 
    "pomorskie": "G", 
    "małopolskie": "K", 
    "lubelskie": "L", 
    "warmińsko-mazurskie": "N", 
    "opolskie": "O", 
    "wielkopolskie": "P", 
    "podkarpackie": "R", 
    "śląskie": "S",
    "świętokrzyskie": "T", 
    "mazowieckie": "W",
    "zachodniopomorskie": "Z"
}

# województwa(skróty) i ich stolice
stolice = {
    "B": "Białystok",
    "C": ["Bydgoszcz","Toruń"],
    "D": "Wrocław",
    "E": "Łódź",
    "F": ["Gorzów Wielkopolski","Zielona Góra"],
    "G": "Gdańsk",
    "K": "Kraków",
    "L": "Lublin",
    "N": "Olsztyn",
    "O": "Opole",
    "P": "Poznań",
    "R": "Rzeszów",
    "S": "Katowice",
    "T": "Kielce",
    "W": "Warszawa",
    "Z": "Szczecin"
}

# województwa(skr) i liczba mieszkańców
mieszkancy = {
    "B": 1185174,
    "C": 2082935,
    "D": 2902365,
    "E": 2479962,
    "F": 1016652,
    "G": 2319735,
    "K": 3386162,
    "L": 2129260,
    "N": 1434783,
    "O": 991161,
    "P": 3484975,
    "R": 2127687,
    "S": 4552627,
    "T": 1249710,
    "W": 5372579,
    "Z": 1706579
}

# for woj, skr in list(wojewodztwa.items()):
    # print(f"województwo {woj} jest oznaczone literą: {skr}")

# for woj, stol in list(stolice.items()):
    # print(f"stolicą województwa {woj} jest miasto: {stol}")

# for woj, miesz in list(mieszkancy.items()):
    # print(f"w województwie {woj} mieszka {miesz} osób")



for woj, skr in list(wojewodztwa.items()):
    print('-' * 35)
    print(f"województwo {woj} jest oznaczone literą: {skr}")
    print(f" jego stolicą jest {stolice[skr]}")
    print(f" w województwie tym mieszka {mieszkancy[skr]} osób")
    
print('-' * 35)
print(len(stolice))
print('-' * 35)
print(str(mieszkancy))
print('-' * 35)
print(type(wojewodztwa))
print('-' * 35)

# if "O" in stolice:
print(stolice.get("O"))

print('-' * 35)
print(stolice.values())
print('-' * 35)
print(stolice.keys())