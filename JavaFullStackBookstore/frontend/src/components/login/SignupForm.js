import React, { useEffect, useRef } from 'react';
import { createUser } from '../../service/UsersDataService';
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

const SignupForm = ({ getUsers }) => {
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const hashed = bcrypt.hashSync(password, 10);
    const credentials = {
      "username": username,
      "password": hashed
    }
    console.log(credentials);
    createUser(credentials)
      .then(() => navigate("/"));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username </label>
        <input type="text" name="username" id="username" required={true} ref={usernameInputRef} />
        <label htmlFor='password'>Password</label>
        <input type="password" name="password" id="password" required={true} ref={passwordInputRef} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm;