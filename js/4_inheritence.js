// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary as a Function Prototype
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// A magazine Object that inherits the properties of the Book object
// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year); // "this" is the instance of the Book object being passed into the magazine function
  this.month = month;
}

// Inherit the Book Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "John Doe", "2019", "Oct");

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1.getSummary());
