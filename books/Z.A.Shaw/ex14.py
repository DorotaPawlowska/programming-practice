from sys import argv

script, user_name, arg3 = argv
prompt = '_ '

print(f"Cześć, {user_name}, jestem skryptem {script}.")
print("Chciałbym Ci zadać kilka pytań.")
print(f"Lubisz mnie, {user_name}?")
likes = input(prompt)

print(f"Gdzie mieszkasz, {user_name}?")
lives = input(prompt)

print("Jaki masz koputer?")
computer = input(prompt)

print(f"Jeszcze jakieś {arg3} słowa na zakończenie?")
end = input(prompt)

print(f"""
Ok, gdy zapytałem czy mnie lubisz, odpowiedziałeś {likes}.
Mieszkasz w {lives}. Nie jestem pewien, gdzie to jest.
I masz komputer {computer}. Fajnie że dodałeś te swoje {arg3} słowa na koniec i dodałeś kolejny argument {end}. 
""")