import './App.css';
import { React, useEffect, useState, } from "react";
import { retrieveAllBooks } from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from './components/books/AddBook';
import UpdateBook from './components/books/UpdateBook';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookToUpdate, setBookToUpdate] = useState({});

  let getBooks = () => {
    retrieveAllBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<BookInventory books={books} getBooks={getBooks} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/update" element={<UpdateBook bookToUpdate={bookToUpdate} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
