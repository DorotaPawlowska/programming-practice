# # Animal jest obiektem
class Animal(object):
    pass

## ?? - JEST zwierzęciem
class Dog(Animal):

    def __init__(self, name):
        ## ?? - MA na imię
        self.name = name

    def hau(self):
        print("hau, hau")

## ?? - JEST zwierzęciem
class Cat(Animal):

    def __init__(self, name):
        ## ?? - MA na imie
        self.name = name

## ?? - JEST osobą
class Person(object):
    def __init__(self, name):
        ## ?? - MA na imię
        self.name = name

        ## Person (osoba) ma pet (jakiegoś zwierzaka)
        self.pet = None

## ?? - JEST osobą
class Employee(Person):

    def __init__(self, name, salary):
        ## ?? - MA na imię
        super(Employee, self).__init__(name)
        ## ?? - MA pensję
        self.salary = salary

## ?? - JEST
class Fish(object):
    pass

## ?? - JEST
class Salmon(Fish):
    pass

## ?? - JEST
class Halibut(Fish):
    pass

## rover jest Dog(psem)
rover = Dog("Rover")
rover.hau()

## ?? - JEST
satan = Cat("Satan")

## ??  - JEST
mary = Person("Mary")

## ?? - MA
mary.pet = satan

## ?? - JEST
frank = Employee("Frank", 120000)

## ?? - MA
frank.pet = rover

## ??  - JEST
flipper = Fish()

## ?? - JEST
crouse = Salmon()

## ?? - JEST
harry = Halibut()
