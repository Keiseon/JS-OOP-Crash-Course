// ================
// String
// ================

// const s1 = "Hello";
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// ================
// DOM Object
// ================

// console.log(window);
// window.alert(1);
// alert(1);
// console.log(navigator.appVersion);

// ================
// Object Literals
// ================

const book1 = {
  title: "Book one",
  author: "Hellen Keller",
  year: "1956",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

// console.log(Object.values(book1));
// console.log(Object.keys(book1));

const book2 = {
  title: "The 48 Laws of Power",
  author: "Robert Green",
  year: "2010",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book2.getSummary());
