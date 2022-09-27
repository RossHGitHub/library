
let myLibrary = [];

const newBookButton = document.getElementById("newBook");
const main = document.getElementById("main");
const bookItem = document.getElementsByClassName("bookItem");
let modal = document.getElementById("modal");
const createBook = document.getElementById("createBook");

newBookButton.addEventListener("click", ()=>{
    let newBook = document.createElement('div');
    newBook.className = "bookItem";
    main.appendChild(newBook);

    modal.style.zIndex='100';
})

createBook.addEventListener('click', ()=>{
    modal.style.zIndex='-1';
})