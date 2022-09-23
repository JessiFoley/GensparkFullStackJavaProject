import './App.css';
import { React, useState, } from "react";
import { retrieveAllBooks } from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from './components/books/AddBook';
import UpdateBook from './components/books/UpdateBook';
import Header from './components/Header';
import Footer from './components/Footer'
import LoginForm from './components/login/LoginForm';

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

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<BookInventory books={books} getBooks={getBooks} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/update" element={<UpdateBook bookToUpdate={bookToUpdate} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
