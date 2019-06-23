const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';
console.log(person);

// getters => access properties
// setters => change (mutate) them

// console.log(`${person.firstName} ${person.lastName}`);
// console.log(person.fullName());