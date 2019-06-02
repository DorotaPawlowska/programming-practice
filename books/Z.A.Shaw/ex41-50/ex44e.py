class Other(object):
    def override(self):
        print("override() klasy OTHER")

    def implicit(self):
        print("implicit() klasy OTHER")

    def altered(self):
        print("altered() klasy OTHER")

class Child(object):
    def __init__(self):
        self.other = Other()

    def implicit(self):
        self.other.implicit()

    def override(self):
        print("DZIECKO override()")
    
    def altered(self):
        print("DZIECKO PRZED altered() klasy OTHER")
        self.other.altered()
        print("DZIECKO PO altered() klasy OTHER")
    
son = Child()

son.implicit()
son.override()
son.altered()
