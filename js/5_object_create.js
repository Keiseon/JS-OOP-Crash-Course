// Object of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;

    return `${this.title} was written ${years} years ago`;
  }
};

// Create an Object of bookProtos (Method 1)
// const book1 = Object.create(bookProtos);

// Add properties to the Object book1
// book1.title = "From Pieces to Weight";
// book1.author = "50 Cent";
// book1.year = "2003";

// Create an Object of bookProtos (Method 2)
const book1 = Object.create(bookProtos, {
  title: { value: "From Pieces to Weight" },
  author: { value: "50 Cent" },
  year: { value: "2003" }
});

console.log(book1);
