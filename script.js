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
addBookToLibrary("The Fault in Our Stars", "John Green", "Dutton Books", "313", "young-adult");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", "Charles Scribner's Sons", "180", "classic");
addBookToLibrary("Sapiens", "Yuval Noah Harari", "Harper", "443", "history");
addBookToLibrary("A Brief History of Time", "Stephen Hawking", "Bantam Books", "212", "science");


console.log(myLibrary);

const container = document.getElementById('container');


function displayBooks() {
    myLibrary.forEach((obj) => {
        const string = `<div class="card">
        <p>${obj.title}</p>
        <p>Author: ${obj.author}</p>
        <p>Publisher: ${obj.publisher}</p>
        <p>Page Count: ${obj.pageCount}</p>
        <p>Genre: ${obj.genre}</p>
        <p>UUID: ${obj.uuid}</p>
      </div>`
        container.insertAdjacentHTML('beforeend', string);
    })
}

displayBooks();

const openForm = document.querySelector('#addBook');
const form = document.querySelector('dialog');
const closeBtn = document.querySelector('#close');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const publisherInput = document.getElementById('publisher');
const pagecountInput = document.getElementById('pagecount');
const genreInput = document.getElementById('genre');



openForm.addEventListener('click', () => {
    form.show();
})

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    myLibrary.push(new Book(titleInput.value, authorInput.value, publisherInput.value, pagecountInput.value, genreInput.value));
    container.innerHTML = "";
    displayBooks();
    form.close();
})


