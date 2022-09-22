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

  const updateButton = () =>{
    props.setBookToUpdate(props.book)
  }


  return (
    <>
      <td>{bookTitle}</td>
      <td>{bookGenre}</td>
      <td>{bookBinding}</td>
      <td>{bookPrice}</td>
      <td style={{width:"11em"}}>
        <Link to="/update" onClick={updateButton}><button>Update</button></Link>
        <button onClick={deleteAndRefresh}>Delete</button>
        </td>
    </>
  );
};

export default Book;