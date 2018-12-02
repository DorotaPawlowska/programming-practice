class BookCl {
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
}

class Magazi extends BookCl {
  constructor(title, author, year, month){
    super(title, author, year);
    this.month = month;
  }
}

const Mag1 = new Magazi('Mag 1', 'Jane Doe', '2016', 'Feb');

console.log(Mag1);
console.log(Mag1.getSummary());