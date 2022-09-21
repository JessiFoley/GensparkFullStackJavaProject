import axios from "axios";

export const createBook = (book) => {
  return axios.post(`http://localhost:8080/books/addbook`, book);
};

export const retrieveAllBooks = () => {
  return axios.get(`http://localhost:8080/books`);
};

export const retrieveBook = (id) => {
  return axios.get(`http://localhost:8080/books/${id}`);
};

export const updateBook = (book) => {
  return axios.put(`http://localhost:8080/books/updatebook`, book);
};

export const deleteBook = (id) => {
  return axios.delete(`http://localhost:8080/books/${id}`);
};