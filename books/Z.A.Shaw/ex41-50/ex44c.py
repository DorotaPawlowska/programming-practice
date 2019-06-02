class Parent(object):
    def altered(self):
        print("RODZIC altered()")

class Child(Parent):
    def altered(self):
        print("DZIECKO PRZED altered() RODZICA")
        super(Child, self).altered()
        print("DZIECKO PO altered() RODZICA")

dad = Parent()
son = Child()

dad.altered()
son.altered()