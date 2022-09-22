import { React } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookInventory = (props) => {

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
        props.books.map(book => (
          <tr key={book.bookId}>
            <Book book={book} books={props.books} setBooks={props.setBooks} />
          </tr>
        ))
        }
        </tbody>
    </table>
    <div style={{textAlign:"left"}}>
    <Link to="/add"><button style={{margin:"0"}}>Add Book</button></Link>
    </div>
    </div>
  );
};

export default BookInventory;