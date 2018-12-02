function Book(title, author, year){
  // console.log('Book Initialized...');
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummaty = function(){
    return `${this.title} was written by ${this.author} in ${this.year} `;
  }
}

// const book1 = new Book();
const book1 = new Book('Book One','John Doe', '2013');

// const book2 = new Book();
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book1.getSummaty());
// console.log(book2);