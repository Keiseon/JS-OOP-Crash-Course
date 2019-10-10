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

// getAge  {get the age of the book since its creation}   Function Prototype
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;

  return `${this.title} was written ${years} years ago`;
};

// Revise / Change the Year of a Book    Function Prototype
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revise = true;
};

// Instantiate an Object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Austin", "1967");

console.log(book2.getSummary());
book2.revise("1111");
// console.log(book1.author);
// console.log(book1.getAge());
console.log(book2.getSummary());
