import React from 'react'
import LoginForm from './login/LoginForm';

const LandingPage = ({ getUsers, setUserAttempt, userAttempt, authenticate }) => {
  return (
    <div>
      <h1>Welcome to our Bookstore System!</h1>
      <p>Culpa anim ex mollit consectetur qui nostrud non eu adipisicing nostrud excepteur. Dolor quis incididunt esse occaecat Lorem magna exercitation deserunt enim veniam esse et. Anim qui ad duis dolor consequat consectetur consectetur nulla cillum dolore velit. Enim cillum aliqua laboris in culpa voluptate culpa id esse quis do veniam nostrud sunt. Dolor incididunt nulla voluptate ullamco commodo laborum ullamco. Eiusmod consectetur eu ut magna et proident veniam non non do. Ex magna aliquip officia cupidatat velit culpa ea qui tempor.</p>
      <p>Enim qui anim sit laboris amet mollit id. Dolor ullamco nisi id minim Lorem consequat. Ipsum ipsum aute nulla excepteur duis minim. Anim veniam ad sit exercitation in excepteur. Eu sunt aliqua quis incididunt ut id est labore veniam. Labore cupidatat dolore laboris ipsum veniam tempor officia. Qui veniam est sit quis quis esse ea anim incididunt nostrud ex laboris sunt occaecat.</p>
      <div>
        <h3>Log In to Access the Inventory System</h3>
        <LoginForm getUsers={getUsers} setUserAttempt={setUserAttempt} userAttempt={userAttempt} authenticate={authenticate} />
      </div>
    </div>
  )
}

export default LandingPage;