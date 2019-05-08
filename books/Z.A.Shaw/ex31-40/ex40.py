class Song(object):

    def __init__(self, lyrisc):
        self.lyrisc = lyrisc

    def sing_me_a_song(self):
        for line in self.lyrisc:
            print(line)

    def dots(self, num):
        print('-' * num)


happy_bday = Song(["Happy birthday to you",
                    "Nie chcę zostać pozwany",
                    "Więc tutaj przerwę"])

bulls_on_parade = Song(["They rally around the family",
                        "With pockets full of shells"])

piosenka_deszczowa = Song(["I'm singin' in the rain",
                            "Just singin' in the rain"])

dwa_plus_jeden = Song(["Więc chodź, pomaluj mój świat",
                        "Na żółto i na niebiesko",
                        "Niech na niebie stanie tęcza",
                        "Malowana twoją kredką."])

happy_bday.sing_me_a_song()
happy_bday.dots(30)
bulls_on_parade.sing_me_a_song()
bulls_on_parade.dots(30)
piosenka_deszczowa.sing_me_a_song()
piosenka_deszczowa.dots(30)
dwa_plus_jeden.sing_me_a_song()
dwa_plus_jeden.dots(30)

