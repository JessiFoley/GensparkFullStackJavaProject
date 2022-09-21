import './App.css';
import { React, useState, useEffect } from "react";
import BookInventory from './components/books/BookInventory';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    // BooksDataService.retrieveAllBooks()
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
      <BookInventory books={books} />
    </div>
  );
}

export default App;
