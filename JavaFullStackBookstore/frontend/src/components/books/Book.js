import { React } from "react";
import {deleteBook} from "../../service/BooksDataService"
import { Link } from "react-router-dom"

const Book = (props) => {
  const { bookId, bookTitle, bookGenre, bookBinding, bookPrice } = props.book;
  
  const deleteAndRefresh = () =>{
    deleteBook(bookId)
      const updatedBooks = props.books.filter(book => book.bookId !== bookId)
      props.setBooks(updatedBooks)
  }



  return (
    <>
      <td>{bookTitle}</td>
      <td>{bookGenre}</td>
      <td>{bookBinding}</td>
      <td>{bookPrice}</td>
      <td style={{width:"11em"}}>
        <button>Update</button>
        <button onClick={deleteAndRefresh}>Delete</button>
        </td>
    </>
  );
};

export default Book;