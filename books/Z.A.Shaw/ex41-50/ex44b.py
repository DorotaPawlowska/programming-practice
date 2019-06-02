class Parent(object):
    def override(self):
        print("RODZIC override()")

class Child(Parent):
    def override(self):
        print("DZIECKO override()")

dad = Parent()
son = Child()

dad.override()
son.override()