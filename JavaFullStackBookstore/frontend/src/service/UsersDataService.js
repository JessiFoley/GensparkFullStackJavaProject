import axios from "axios";

export const createUser = (user) => {
  return axios.post(`http://localhost:8080/users`, user);
};

export const retrieveAllUsers = () => {
  return axios.get(`http://localhost:8080/users`);
};

export const retrieveUser = (id) => {
  return axios.get(`http://localhost:8080/users/${id}`);
};

export const updateUser = (user) => {
  return axios.put(`http://localhost:8080/users/updateuser`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`http://localhost:8080/users/${id}`);
};