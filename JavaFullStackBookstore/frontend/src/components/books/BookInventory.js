import { React } from "react";
import Book from "./Book";

const BookInventory = (props) => {

  return (
    <div>
      {
        props.books.map(book => (
          <div key={book.bookId}>
            <Book book={book} />
          </div>
        ))
      }
    </div>
  );
};

export default BookInventory;