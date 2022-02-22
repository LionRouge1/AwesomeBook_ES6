export default function displayBook(book) {
  const list = document.querySelector('.books_table');
  const row = document.createElement('tr');
  const { Id, Btitle, Bauthor } = book;
  row.innerHTML = ` <td>${Btitle}</td> 
 <td>${Bauthor}</td> <td>
 <button type="submit" id="${Id}" class="btn">Remove</button></td> `;
  list.appendChild(row);
}