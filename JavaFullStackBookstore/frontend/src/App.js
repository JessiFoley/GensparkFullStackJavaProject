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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BookInventory books={books} />
    </div>
  );
}

export default App;
