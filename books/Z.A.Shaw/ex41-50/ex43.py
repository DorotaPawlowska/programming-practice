from sys import exit
from random import randint
from textwrap import dedent

class Scene(object):
    def enter(self):
        print("Ta scena nie jest jeszcze skonfigurowana")
        print("Utwórz jej podklasę i zaimplementuj enter().")
        exit(1)

class Engine(object):
    def __init__(self, scene_map):
        self.scene_map = scene_map

    def play(self):
        current_scene = self.scene_map.opening_scene()
        last_scene = self.scene_map.next_scene('finished')

        while current_scene != last_scene:
            next_scene_name = current_scene.enter()
            current_scene = self.scene_map.next_scene(next_scene_name)

            # wydrukowanie ostatniej sceny
        current_scene.enter()

class Death(Scene):
    quips = [
        "Umarłeś. Jesteś w tym do bani.",
        "Twoja matka byłaby dumna... gdyby była ...",
        "Ale z Ciebie ciołek.",
        "Mam szczeniaka który robi to lepiej.",
        "Jesteś gorszy niż ..."
    ]

    def enter(self):
        print(Death.quips[randint(0, len(self.quips) - 1)])
        exit(1)

class CentralCorridor(Scene):
    def enter(self):
        print(dedent("""
            Goci z planety Percel 25 wdarli się na Twój statek i 
            wymordowali całą załogę. Jesteś ostatnim ocalałym członkiem
            załogi, a Twoją ostatnią misją jest zdobycie bomby neutronowej
            z magazynu broni, umieszczenie je na mostku i wysadzenie
            statku, gdy już uda Ci się dotrzeć do kapsuły ratunkowej.

            Biegniesz centralnym korytarzem w kierunku magazynu broni,
            gdy nagle wyskakuje jakiś Got o czerwonej, łuszczącej się skórze,
            z czarnymi zębami, ubrany w kostium złego klauna i zały ziejący
            nienawiścią. Blokuje dostęp do magazynu broni i właśnie zamierza wyciągnąć broń, żeby Cię rozwalić.
        """))

        print("""możesz wykonać następujące akcje:
            strzelam!
            robię unik!
            opowiadam dowcip
        """)

        action = input("> ")

        if action == "strzelam!":
            print(dedent("""
                Błyskawicznie dobywasz z kabury miotacz i strzelasz
                do Gota. Kostium klauna powiewa i wije się wokół jego
                ciała, przez co nie możesz dobrze wycelować. Promień
                lasera trafia w jego kostium, ale całkowicie omija ciało.
                Zupełnie nowy kostium, który kupiła mu mama, jest kompletnie
                zniszczony, co wywołuje w nim wulkan wściekłości i 
                strzela Ci wielokrotnie w głowę, aż padasz martwy.
                Wtedy Cię zabija.
            """))
            return 'death'
        elif action == "robię unik!":
            print(dedent("""
                Jak światowej klasy bokser robisz unik, przekręcasz się
                i prześlizgujesz w prawo, gdy miotacz Gota tnie laserem
                obok Twojej głowy. W trakcje wykonywania tego artystycznego
                uniku potykasz się o własną stopę, walisz głową w metalową 
                ścianę i tracisz przytomność. Po chwili budzisz się tylko po to, żeby umrzeć stratowany i zjedzony przez Gota.
            """))
            return 'death'
        elif action == "opowiadam dowcip":
            print(dedent("""
                Na Twoje szczęście w akademii nauczyli Cię rzucać mięsem
                w obcych językach. Opowiadasz jedyny gocki żart, jaki znasz:
                Lbhe zbgure vf fb sng, jura fur fvgf nebhaq gur ubhfr,
                fur fvgf nebhaq gur ubhfr. Got zastyga, przez chwilę próbuje
                się powstrzymać, a następnie wybucha śmiechem i nie może się
                ruszyć. W tym czasie szybko uciekasz i na odchodnym strzelasz 
                mu prosto w głowę, powalając go trupem, a następnie znikasz
                za drzwiami magazynu broni.
            """))
            return 'laser_weapon_armory'
        else:
            print("NIE MOŻNA PRZELICZYĆ!")
            return 'central_corridor'

class LaserWeaponArmory(Scene):
    def enter(self):
        print(dedent("""
            Dajesz nura do magazynu broni, przykucasz i lustrujesz wzrokiem
            pomieszczenie, szukajac ukrywających się Gotów. Panuje martwa,
            przerażająca cisza. Wstajesz i biegniesz w odległy koniec
            pomieszczenia, gdzie znajdujesz bombę neuronową umieszczoną w
            zabezpieczonym pojemniku. Aby wyjąć bombę, musisz odblokować
            zamek, wpisując na klawiaturze kod. Jeśli 10 razy wpiszesz
            niewłaściwy kod, zamek zablokuje się na zawsze i nie wyjmiesz
            bomby. Kod ma 3 cyfry. 
        """))

        code = f"{randint(1,9)} {randint(1,9)} {randint(1,9)}"
        guess = input("[keypad]> ")
        guesses = 1

        while guess != code and guesses < 10:
            print("BZZZZEDDDD!")
            guesses += 1
            guess = input("[keypad]> ")

        if guess == code:
            print(dedent("""
                Blokada puszcza i pojemnik otwiera się, z sykiem wypuszczając
                ze środka gaz. Chwytasz bombę neutronową i biegniesz tak
                szybko, jak możesz, w kierunku mostka, gdzie musisz podłożyć
                ją w odpowiednim miejscu.
            """))
            return 'the_bridge'
        else:
            print(dedent("""
                Brzęczyk blokady wybrzmiewa po raz ostatni i słyszysz
                obrzydliwy dzwięk stapiania się mechanizmu blokady
                pojemnika. Decydujesz się już nigdzie nie uciekać, a Goci
                ze swojego statku wysadzają w powietrze Twój. Umierasz.
            """))
            return 'death'

class TheBridge(Scene):
        def enter(self):
            print(dedent("""
                Zdyszany wpadasz na mostek z bombą neutronową pod
                pachą i zaskakujesz 5 Gotów, którzy próbują przejąć
                kontrolę nad statkiem. Każdy kolejny ma jeszcze brzydszy
                kostium klauna niż poprzedni. Żaden z nich nie wyciągął
                jeszcze broni, ponieważ widzą aktywowaną bombę pod Twoją
                pachą i nie chcą jej przypadkowo zdetonować.
            """))

            action = input("> ")

            if action == "":
                print(dedent("""
                    W panice rzuczasz bombą w kierunku grupy Gotów
                    i rzucasz się do drzwi. Goci reagują natychmiastowo
                    i strzelają Ci prosto w plecy, kładąc Cię trupem.
                    Konając, widzisz jeszcze Gota, który gorączkowo próbuje
                    rozbroić bombę. Umierasz ze świadomością, że prawdopodobnie
                    wszyscy wylecą w powietrze, gdy bomba wybuchnie.
                """))
                return 'death'
            elif action == "powoli podkładam bombę":
                print(dedent("""
                    Przykładasz lufę miotacza do trzymanej pod pachą bomby,
                    a Goci podnoszą ręce do góry i zaczynają się pocić.
                    Cofasz się powoli do drzwi, otweirasz je, a potem
                    ostrożnie kładziesz bombę na podłodze, nadal celując
                    w nią miotaczem. Następnie przeskakujesz przez drzwi,
                    zamykasz je przyciskiem i strzelasz w panel kontrolny
                    zamka, aby nie mogli się wydostać. Bomba podłożona, więc
                    uciekasz do kapsuły ratunkowej, aby wydostać się z tej puszki.
                """))
                return 'escape_pod'
            else:
                print("NIE MOŻNA PRZELICZYĆ!")
                return 'the_bridge'

class EscapePod(Scene):
    def enter(self):
        print(dedent("""
            Biegniesz korytarzem, rozpaczliwie próbując dotrzeć
            do kapsuły, zanim cały statek eksploduje. Wydaje się,
            że na statku nie ma już prawie żadnego Gota, więc masz
            wolną drogę ucieczki. Docierasz do komory z kapsułami
            ratunkowymi i teraz musisz zdecydować się na jedną z nich.
            Niektóre mogły zostać uszkodzone, ale nie masz czasu sprawdzać.
            Jest 5 kapsuł, którą wybierasz?
        """))

        good_pod = randint(1,5)
        guess = input("[pod #]> ")

        if int(guess) != good_pod:
            print(dedent("""
                Wskakujesz do kapsuły {guess} i katapultujesz się.
                Kapsuła wystrzeliwuje w otchłań kosmosu, a następnie
                imploduje, gdy kadłub pęka i miażdzy Twoje ciało,
                robiąc z niego dżem malinowy.
            """))
            return 'death'
        else:
            print(dedent("""
                Wskakujesz do kapsuły {guess} i katapultujesz się.
                Kapsuła lekko wślizguje się w kosmos, zmierzając w
                kierunku najbliższej planety. W trakcie lotu spoglądasz
                wstecz i widzisz, że Twój statek imploduje, a następnie
                eksploduje, jak jasna gwiazda, niszcząc jednocześnie
                statek Gotów. Wygrałeś!
            """))
            return 'finished'            

class Finished(Scene):
    def enter(self):
        print("Wygrałeś! Dobra robota.")
        return 'finished'

class Map(object):
    scenes = {
        'central_corridor': CentralCorridor(),
        'laser_weapon_armory': LaserWeaponArmory(),
        'the_bridge': TheBridge(),
        'escape_pod': EscapePod(),
        'death': Death(),
        'finished': Finished(),
    }

    def __init__(self, start_scene):
        self.start_scene = start_scene

    def next_scene(self, scene_name):
        val = Map.scenes.get(scene_name)
        return val

    def opening_scene(self):
        return self.next_scene(self.start_scene)


a_map = Map('central_corridor')
a_game = Engine(a_map)
a_game.play()