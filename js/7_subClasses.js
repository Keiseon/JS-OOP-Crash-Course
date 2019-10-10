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
}

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine("How to Fish", "Marley Fog", "1910", "August");
console.log(mag1.getSummary());
