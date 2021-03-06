import { DateTime } from './node_modules/luxon/src/luxon.js';
import Books from './modules/moduleBook.js';
import snaker from './modules/flashMessage.js';
import showBlock from './modules/navbar.js';
import { displayBook, removeBk } from './modules/display.js';

// display date and time

const dateBox = document.getElementById('date');
setInterval(() => {
  dateBox.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

//  display all the books;

if (localStorage.getItem('books') !== null) {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((element) => {
    displayBook(element);
  });
}

// add book

const title = document.getElementById('title');
const author = document.getElementById('author');

document.querySelector('#book-form').addEventListener('submit', (e) => {
  if (title.value === '' || author.value === '') {
    snaker(
      'error',
      '<b>Error:</b> Title and Author fields must be filled out',
    );

    e.preventDefault();
  } else {
    const addBk = new Books(title.value, author.value);
    addBk.addBook();
    snaker('success', '<b> Success: </b> Book Saved successfully!');
  }
});

// Remove the book

const btn = document.querySelectorAll('.btn');
btn.forEach((element) => {
  element.addEventListener('click', removeBk);
});

// navbar section

const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const [current] = document.getElementsByClassName('active');
    current.className = current.className.replace(' active', '');
    this.className += ' active';
  });
});
