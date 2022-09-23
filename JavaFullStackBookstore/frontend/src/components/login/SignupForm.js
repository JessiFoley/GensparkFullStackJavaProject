import React, { useEffect, useState } from 'react';
import { createUser } from '../../service/UsersDataService';
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

const initialState = {
  "username": "",
  "password": ""
};

const SignupForm = ({ getUsers }) => {
  const [newUser, setNewUser] = useState(initialState);

  const navigate = useNavigate();

  const handleChanges = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const hashed = bcrypt.hashSync(newUser.password, 10);
    setNewUser({
      ...newUser,
      "password": hashed,
    });
    createUser(newUser)
      .then(() => navigate("/login"));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username </label>
        <input type="text" name="username" id="username" required={true} onChange={handleChanges} />
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" id="password" required={true} onChange={handleChanges} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm;