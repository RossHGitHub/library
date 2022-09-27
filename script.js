
let myLibrary = [];

function Book(title, pages, haveRead){
    this.title = title;
    this.pages = pages;
    this.haveRead = haveRead;
    console.log(title, pages, haveRead);
}

const hobbit = new Book('the Hobbit', 56, true);
