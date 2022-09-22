import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookInventory = (props) => {
  const booksArray = Array.from(props.books);
  const { getBooks, setBooks, setBookToUpdate } = props;

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Binding</th>
            <th>Price</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            booksArray.map(book => (
              <tr key={book.bookId}>
                <Book book={book} books={booksArray} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <div style={{ textAlign: "left" }}>
        <Link to="/add"><button style={{ margin: "0" }}>Add Book</button></Link>
      </div>
    </div>
  );
};

export default BookInventory;