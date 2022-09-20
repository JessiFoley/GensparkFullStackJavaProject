import axios from "axios";

const EmployeeDataService = () => {
  function createBook(book) {
    return axios.post(`http://localhost:8080/books`, book);
  }

  function retrieveAllBooks() {
    return axios.get(`http://localhost:8080/books`);
  }

  function updateBook(id, book) {
    return axios.put(`http://localhost:8080/books/${id}`, book);
  }

  function deleteBook(id) {
    return axios.delete(`http://localhost:8080/books/${id}`);
  }
}

export default EmployeeDataService;