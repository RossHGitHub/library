
let myLibrary = [];

const Book = function(name, pages, comments){
    this.name = name;
    this.pages = pages;
    this.comments = comments;

}

const newBookButton = document.getElementById("newBook");
const main = document.getElementById("main");
let modal = document.getElementById("modal");
const createBook = document.getElementById("createBook");
let body = document.querySelector('body');
let closeModal = document.getElementById('closeModal');
let setBookTitle = document.getElementById('setBookTitle');
let setPages = document.getElementById('setPages');
let setComments = document.getElementById('setComments');

newBookButton.addEventListener("click", ()=>{
    modal.style.visibility='visible';
    setBookTitle.value='';
    setPages.value='';
    setComments.value='';
});

closeModal.addEventListener('click', ()=>{
    modal.style.visibility='hidden';
})

createBook.addEventListener('click', ()=>{

    let testbook = new Book(setBookTitle.value, setPages.value, setComments.value)

   let appendBook = document.createElement('div');
   appendBook.className = "bookItem";

   let bookName = document.createElement('h4');
   bookName.classList = 'bookTitle';
   bookName.innerHTML = setBookTitle.value;
   appendBook.appendChild(bookName);

   let NumberOfPages = document.createElement('p');
   NumberOfPages.classList = 'bookPages';
   NumberOfPages.innerHTML = `Pages: ${setPages.value}`;
   appendBook.appendChild(NumberOfPages);

   let extraComments = document.createElement('p');
   extraComments.classList='bookComments';
   extraComments.innerHTML=`Comments: ${setComments.value}`;
   appendBook.appendChild(extraComments);


appendBook

console.log(testbook);
   
   main.appendChild(appendBook);

   modal.style.visibility='hidden';
});