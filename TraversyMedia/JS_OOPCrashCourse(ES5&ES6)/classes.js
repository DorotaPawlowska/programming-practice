class BookC {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }

  getAge(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear){
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(){
    return 'Barnes & Noble';
  }
}

const B1 = new BookC('Book 1', 'Jane Doe', "2018");
console.log(B1);
B1.revise('2019');
console.log(B1);

console.log(BookC.topBookStore());
