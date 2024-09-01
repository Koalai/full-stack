// declare an array that store books
const myLibrary = []

// create a Book that have tit;e, author, pages, read
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// create a func that render Book
function renderBook() {
    // access to the div that have id="library"
    let libraryEl = document.getElementById("library")
    // reset the node when re-render, we dont want to re-render the old nodes + new nodes
    libraryEl.innerHTML = "";
    // loop through each book of the library
    for (let i = 0; i < myLibrary.length; i++) {
    // declare a book have index i in library
        let myBook = myLibrary[i];
        console.log(myLibrary[i]);
        // i want to store my book in the card, so i nested it in a div
        // create div to store book
        let bookElement = document.createElement("div");
        // pass it the card templates and the have descriptions of the book based on myBook
        // create 2 button have event and then pass to it an index 
        bookElement.innerHTML = `
        <div class="card">
          <p>Title: ${myBook.title}</p>
          <p>Author: ${myBook.author}</p>
          <p>Pages: ${myBook.pages}</p>
          <p>Read: ${myBook.read ? "Already read" : "Not read yet" }
          <div class="card-btn">
          <button id="change-read-status-btn" onclick=changeReadStatus(${i})>Read Status</button>
            <button id="delete-btn" onclick=deleteBook(${i})>Delete</button>
          </div>
        </div>
        `;
//    append it to the DOM node, so it can appear 
        libraryEl.append(bookElement);
    }
}

// create a handle to add book to the library, I toggle to each of the id of title, author, pages, read in the html input.
// use new method to create a book from the Book template
function addBookToLibrary() {
    // this is the instruction from the page, when hit the submit button, the data will transfer to the server
    // so use event.preventDefault to prevent the user agent not to do that, and we can access to the value local
    // I think so
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    
    let newBook = new Book(title, author, pages, read);
    // Check if the book is existed in the libraby or not, 2 books can't have a same title.
    // If it existed, send an alert message to the user, if not pass book to the library normally.

    let bookHasExisted = myLibrary.some((book) => book.title === title)
    if (!bookHasExisted) {
        myLibrary.push(newBook)
        renderBook();
    } else {
        alert("This book is existed in the library!")
    }
}

// This is the form handle event, that show the form when we clicked the button New Book
// Access to the form that have the style display: none, then change it to block to visible the form.
function newFormHandle() {
   const newForm = document.getElementById("book-form");
    newForm.style.display = "block"; 
}

// delete button handle event, accept the index for the arg, use splice to delete 1 specific index items
// render it again so it can access to the index of the library
function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderBook()
}

// Change read status button handle event, then access to the read property of the book have that index
// use ! to define a logic, if the property read are true, change it to false, and opposite it.
// render it again so it can access to the index of the library
function changeReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read ;
    renderBook();
}