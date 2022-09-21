import { React } from "react";
import Book from "./Book";

const BookInventory = (props) => {

  return (
    <div>
    <table>
      <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Binding</th>
      <th>Price</th>
      <th>Update / Delete</th>
      </tr>
      {
        props.books.map(book => (
          <tr key={book.bookId}>
            <Book book={book} />
          </tr>
        ))
      }
    </table>
    <div style={{textAlign:"left"}}>
    <button style={{margin:"0"}}>Add Book</button>
    </div>
    </div>
  );
};

export default BookInventory;