import './App.css';
import { React, useEffect, useState, } from "react";
import * as BooksDataService from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AddBook from './components/books/AddBook';
import UpdateBook from './components/books/UpdateBook';

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    BooksDataService.retrieveAllBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  };

  const [bookToUpdate, setBookToUpdate] = useState({})

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Router>
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<BookInventory books={books} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />} />
          <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
          <Route path="/update" element={<UpdateBook books={books} setBooks={setBooks} bookToUpdate={bookToUpdate} />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
