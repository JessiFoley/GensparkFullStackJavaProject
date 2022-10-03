import axios from "axios";

export const createBook = (book) => {
  return axios.post(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/books/addbook`, book);
};

export const retrieveAllBooks = () => {
  return axios.get(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/books`);
};

export const retrieveBook = (id) => {
  return axios.get(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/books/${id}`);
};

export const updateBook = (book) => {
  return axios.put(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/books/updatebook`, book);
};

export const deleteBook = (id) => {
  return axios.delete(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/books/${id}`);
};