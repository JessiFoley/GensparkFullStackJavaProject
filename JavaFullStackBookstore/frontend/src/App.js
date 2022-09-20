import './App.css';
import { React, useState, useEffect } from "react";
import BooksDataService from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    //BooksDataService.retrieveAllBooks()
    axios
      .get("http://localhost:8080/books")
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  }

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
