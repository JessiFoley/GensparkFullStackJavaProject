import './App.css';
import { React, useEffect, useState, } from "react";
import * as BooksDataService from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    BooksDataService.retrieveAllBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <BookInventory books={books} />
    </div>
  );
}

export default App;
