// Object Of Protos
const bookProtos = {
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year} `;
  },
  getAge: function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
}

const b1 = Object.create(bookProtos);
b1.title = "Book one";
b1.author = 'J.D.';
b1.year = '2013';

const b2 = Object.create(bookProtos, {
  title: { value: 'Book Two'},
  author: { value: 'Jane Doe'},
  year: { value: '2012'},
});


console.log(b1);
console.log(b2);