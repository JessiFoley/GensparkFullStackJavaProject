import { React } from "react";
import BooksDataService from "../../service/BooksDataService"

const Book = (props) => {
  const { bookId, bookTitle, bookGenre, bookBinding, bookPrice } = props.book;

  return (
    <>
      <td>{bookTitle}</td>
      <td>{bookGenre}</td>
      <td>{bookBinding}</td>
      <td>{bookPrice}</td>
      <td style={{width:"11em"}}>
        <button>Update</button>
        <button>Delete</button>
        </td>
    </>
  );
};

export default Book;