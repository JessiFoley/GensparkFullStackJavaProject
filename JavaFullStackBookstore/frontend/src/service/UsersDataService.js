import axios from "axios";

export const createUser = (user) => {
  return axios.post(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/users`, user);
};

export const retrieveAllUsers = () => {
  return axios.get(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/users`);
};

export const retrieveUser = (id) => {
  return axios.get(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/users/${id}`);
};

export const updateUser = (user) => {
  return axios.put(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/users/updateuser`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`http://ec2-52-70-185-3.compute-1.amazonaws.com:8080/users/${id}`);
};