name = 'Zed A. Shaw'
age = 35 # nie kłamię
height = 190 # centymetrów
weight = 80 # kilogramów
eyes = 'Niebieskie'
teeth = 'Białe'
hair = 'Brązowe'

height_cale = height / 2.45
weight_funty = weight / 0.4535

print(f"Porozmawiajmy o {name}.")
print(f"Ma {height} centymetrów wzrostu.")
print(f"Ma {height_cale:.4} cali wzrostu.")
print(f"Waży {weight} kilogramów.")
print(f"Waży {weight_funty:.4} funtów.")
print("Tak naprawdę nie waży dużo.")
print(f"Ma {eyes} oczy i {hair} włosy.")
print(f"Jego zęby są zazwyczaj {teeth}, w zależności od ilości wypitej kawy.")

# ta linia jest trudna, więc wpisuj ją uważnie
total = age + height + weight
totalA = age + height_cale + weight_funty
print(f"Jeśli dodam {age}, {height} i {weight}, otrzymam {total}.")
print(f"Jeśli dodam {age}, {height_cale:.4} i {weight_funty:.5}, otrzymam {totalA:.5}.")
