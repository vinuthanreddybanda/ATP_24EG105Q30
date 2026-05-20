class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} has been borrowed.`;
    } else {
      return `${this.title} is not available.`;
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      return `${this.title} has been returned and is now available.`;
    } else {
      return `${this.title} was already available.`;
    }
  }

  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Create 5 book objects
let b1 = new Book("Courage to Be Disliked", "Ichiro Kishimi & Fumitake Koga", 288);
let b2 = new Book("Read People Like a Book", "Patrick King", 250);
let b3 = new Book("Atomic Habits", "James Clear", 320);
let b4 = new Book("The Forest of Enchantments", "Chitra Banerjee Divakaruni", 360, false);
let b5 = new Book("Educated", "Tara Westover", 352, false);

let library = [b1, b2, b3, b4, b5];

// i. Display info of all books (using for loop)
console.log("All Books:");
for (let i = 0; i < library.length; i++) {
  console.log(library[i].getInfo());
}

// ii. Borrow 2 books and show their availability status
console.log(b1.borrow());
console.log(b5.borrow());
console.log(`${b1.title} available? ${b1.isAvailable}`);
console.log(`${b5.title} available? ${b5.isAvailable}`);

// iii. Return 1 book and show updated status
console.log(b1.returnBook());
console.log(`${b1.title} available? ${b1.isAvailable}`);

// iv. Count how many books are long books (>300 pages)
let longBooksCount = 0;
for (let i = 0; i < library.length; i++) {
  if (library[i].isLongBook()) {
    longBooksCount++;
  }
}
console.log(longBooksCount);

// v. List all available books
console.log("Available Books:");
for (let i = 0; i < library.length; i++) {
  if (library[i].isAvailable) {
    console.log(library[i].getInfo());
  }
}