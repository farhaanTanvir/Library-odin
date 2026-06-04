let myLibrary = []

function Book(title, author, publisher, pagecount, genre) {
    this.title = title
    this.author = author
    this.publisher = publisher
    this.pageCount = pagecount
    this.genre = genre
    // maybe add a "synopsis" one, which is a short summary basically, if you're feeling fancy
    this.uuid = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, publisher, pagecount, genre) {
    myLibrary.push(new Book(title, author, publisher, pagecount, genre));
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "JK Rowling", "Bloomsbury", "250", "fantasy");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "George Allen & Unwin", "310", "fantasy");
addBookToLibrary("The Hunger Games", "Suzanne Collins", "Scholastic", "374", "dystopian");
addBookToLibrary("Dune", "Frank Herbert", "Chilton Books", "617", "sci-fi");
addBookToLibrary("The Da Vinci Code", "Dan Brown", "Doubleday", "454", "thriller");
addBookToLibrary("And Then There Were None", "Agatha Christie", "Collins Crime Club", "272", "mystery");


console.log(myLibrary);
