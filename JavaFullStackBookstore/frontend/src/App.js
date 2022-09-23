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
import { retrieveAllUsers } from './service/UsersDataService';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookToUpdate, setBookToUpdate] = useState({});
  const[users, setUsers] = useState([]);
  const[loggedIn, setLoggedIn] = useState(null);
  const [userAttempt, setUserAttempt] = useState({
    "username":"",
    "password":"",
  })

  let getBooks = () => {
    retrieveAllBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err.response));
  }

  const getUsers = () => {
    retrieveAllUsers()
    .then(res =>{
      setUsers(res.data);
    })
    .catch(err => console.log(err.response));
  }

  const authenticate = async () => {

    users.map(user =>{
      if(user.username === userAttempt.username && user.password === userAttempt.password){
        setLoggedIn(userAttempt.username)
      }
    })

    // const saltRounds = 10;

    // bcrypt.hash(password, saltRounds, function(err,hash){
    //     alert(hash);
    // })        
}

  if(loggedIn === null){
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<LoginForm getUsers={getUsers} setUserAttempt={setUserAttempt} userAttempt={userAttempt} authenticate={authenticate} />} />
            </Routes>
            <Footer />
          </div>
        </div>
    </Router>
    )
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
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
