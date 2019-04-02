def add(a, b):
    print(f"DODAWANIE {a} + {b}")
    return a + b

def substract(a, b):
    print(f"ODEJMOWANIE {a} - {b}")
    return a - b

def multiplay(a, b):
    print(f"MNOŻENIE {a} * {b}")
    return a * b

def divide(a, b):
    print(f"DZIELENIE {a} / {b}")
    return a / b

print("Wykonajmy kilka operacji matematycznych jedynie za pomocą funkcji!")

age = add(30, 5)
height = substract(78, 4)
weight = multiplay(90, 2)
iq = divide(100, 2)

print(f"Wiek: {age}, Wzrost: {height}, Waga: {weight}, IQ: {iq}")

# To łamigłówka za dodawtkowe punkty, ale i tak ja wpisz.
print("Oto zadanie.")

what = add(age, substract(height, multiplay(weight, divide(iq, 2))))
# what2 = age + (height - (weight * ( iq / 2)))
def whatFunction(age, height, weight, iq):
    return age + (height - (weight * ( iq / 2)))

what3 = whatFunction(age,height,weight,iq)

print("To daje: ", what ,"Czy dałbyś radę obliczyć to ręcznie?", what3)

print(" -- " * 10)

def konwerterKilo(wagaFunty):
    return wagaFunty * 0.4535

waga = konwerterKilo(weight)

print(f"{weight} funtów to {waga} kilogramów")

def konwerterCenty(wzrostCale):
    return wzrostCale * 0.0254

wzrost = konwerterCenty(height)

print(f"{height} cali to {wzrost} metrów czyli {round(wzrost * 100) } centymetrów")
