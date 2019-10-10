// ES6 Classes Aka Syntactic Sugar
// (good for anything except old versions of IE)
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} was written ${years} years ago`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revise = true;
  }

  // Static Methods
  static topBookStore() {
    return "Barnes and Nobel";
  }
}

// Instantiate Object
const book1 = new Book("Regal Expressions", "Jeremy Cecil", "1984");

// console.log(book1);
// book1.revise("2013");
// console.log(book1);

console.log(Book.topBookStore());
