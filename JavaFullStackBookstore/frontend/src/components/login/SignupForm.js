import React, { useEffect, useRef } from 'react';
import { createUser } from '../../service/UsersDataService';
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";
import validPassword from './ValidatePassword';

const SignupForm = ({ getUsers }) => {
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if(validPassword()){
      const username = usernameInputRef.current.value;
      const password = passwordInputRef.current.value;
      const hashed = bcrypt.hashSync(password, 10);
      const credentials = {
        "username": username,
        "password": hashed
      }
      createUser(credentials)
        .then(() => navigate("/"));
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username </label>
        <br />
        <input type="text" name="username" id="username" required={true} ref={usernameInputRef} />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input type="password" name="password" id="password" minLength={8} required={true} ref={passwordInputRef} />
        <br />
        <label htmlFor='repeatPassword'>Repeat Password</label>
        <br />
        <input type="password" name="repeatPassword" id="repeatPassword" required={true} />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm;