import axios from "axios";

const BooksDataService = () => {
  function createBook(book) {
    return axios.post(`http://localhost:8080/books/addbook`, book);
  }

  function retrieveAllBooks() {
    return axios.get(`http://localhost:8080/books`);
  }

  function retrieveBook(id) {
    return axios.get(`http://localhost:8080/books/{id}`);
  }

  function updateBook(book) {
    return axios.put(`http://localhost:8080/books/updatebook`, book);
  }

  function deleteBook(id) {
    return axios.delete(`http://localhost:8080/books/${id}`);
  }
}

export default BooksDataService;