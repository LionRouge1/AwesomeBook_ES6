import Books from './moduleBook.js';
import snaker from './flashMessage.js';

export const displayBook = (book) => {
  const list = document.querySelector('.books_table');
  const row = document.createElement('tr');
  const { Id, Btitle, Bauthor } = book;
  row.innerHTML = ` <td>${Btitle}</td> 
 <td>${Bauthor}</td> <td>
 <button type="submit" id="${Id}" class="btn">Remove</button></td> `;
  list.appendChild(row);
};

// Remove book function

export function removeBk() {
  const Book = new Books();
  Book.removeBook(this.id);
  this.parentNode.parentNode.remove();
  snaker('remove', '<b> Remove:</b> Book Removed successfully ');
}
