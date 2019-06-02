class Parent(object):
    def override(self):
        print("RODZIC override()")

    def implicit(self):
        print("RODZIC implicit()")

    def altered(self):
        print("RODZIC altered()")

class Child(Parent):
    def override(self):
        print("DZIECKO override()") # nadpisanie 

    def altered(self):
        print("DZIECKO PRZED altered() RODZICA")
        super(Child, self).altered() # wykonanie metody z rodzica podczas wykonywania metody dziecka
        print("DZIECKO PO altered() RODZICA")

dad = Parent()
son = Child()

dad.implicit()
son.implicit()

dad.override()
son.override()

dad.altered()
son.altered()
