import './App.css';
import { React, useState, useEffect } from "react";
import BooksDataService from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import Book from './components/books/Book';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    //BooksDataService.retrieveAllBooks()
    axios
      .get("http://localhost:8080/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err.response));
  }

  useEffect(() => {
    getBooks();
    console.log(books);
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
      <div>
        {books.map(book => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
      <BookInventory books={books} />
    </div>
  );
}

export default App;
