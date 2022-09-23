import './App.css';
import { React, useState, } from "react";
import { retrieveAllBooks } from "./service/BooksDataService";
import BookInventory from './components/books/BookInventory';
import { Routes, Route, useNavigate } from "react-router-dom"
import AddBook from './components/books/AddBook';
import UpdateBook from './components/books/UpdateBook';
import Header from './components/Header';
import Footer from './components/Footer'
import LoginForm from './components/login/LoginForm';
import { retrieveAllUsers } from './service/UsersDataService';
import SignupForm from './components/login/SignupForm';
import bcrypt from "bcryptjs";

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookToUpdate, setBookToUpdate] = useState({});
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [userAttempt, setUserAttempt] = useState({
    "username": "",
    "password": "",
  });

  const navigate = useNavigate();

  let getBooks = () => {
    retrieveAllBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  }

  const getUsers = () => {
    retrieveAllUsers()
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err.response));
  }

  const authenticate = async () => {

    users.map(user => {
      if (user.username === userAttempt.username) {
        if (bcrypt.compareSync(userAttempt.password, user.password)) {
          setLoggedIn(userAttempt?.username);
          navigate("/");
          console.log(loggedIn);
        }
      }
    });
  }

  if (!loggedIn) {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<LoginForm getUsers={getUsers} setUserAttempt={setUserAttempt} userAttempt={userAttempt} authenticate={authenticate} />} />
            <Route path="/signup" element={<SignupForm getUsers={getUsers} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<BookInventory books={books} getBooks={getBooks} setBooks={setBooks} setBookToUpdate={setBookToUpdate} />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update" element={<UpdateBook bookToUpdate={bookToUpdate} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
