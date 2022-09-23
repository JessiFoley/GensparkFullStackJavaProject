import React, { useEffect, useRef } from 'react';
import { createUser } from '../../service/UsersDataService';
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";

const SignupForm = ({ getUsers }) => {
  const usernameInputRef = useRef("");
  const passwordInputRef = useRef("");

  const navigate = useNavigate();

  const validPassword = (() => {

    const passwordForValidation = document.getElementById("password").value
    const repeatPasswordForValidation = document.getElementById("repeatPassword").value

    const hasLowercase = /[a-z]+/.test(passwordForValidation)
    const hasUppercase = /[A-Z]+/.test(passwordForValidation)
    const hasDigit = /[0-9]+/.test(passwordForValidation)
    
    if(passwordForValidation === repeatPasswordForValidation && hasLowercase && hasUppercase && hasDigit){
      return true;
    }else if (passwordForValidation !== repeatPasswordForValidation) {
      alert("Passwords must match")
    }else if (!hasLowercase){
      alert("Must contain a lowercase letter")
    }else if (!hasUppercase){
      alert("Must contain an Uppercase letter")
    }else {
      alert("Must contain a number")
    }
    return false;
  })

  const handleSubmit = e => {
    e.preventDefault();
    if(validPassword()){
      const username = usernameInputRef.current.value;
      const password = passwordInputRef.current.value;
      alert(validPassword)
      const hashed = bcrypt.hashSync(password, 10);
      const credentials = {
        "username": username,
        "password": hashed
      }
      alert(JSON.stringify(credentials));
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