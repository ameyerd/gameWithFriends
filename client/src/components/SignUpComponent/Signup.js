import React, { useState, useEffect} from 'react';
import './Signup.css';
import Axios from 'axios';
import { Redirect } from 'react-router';

function Signup() {

  //databse
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthdate] = useState('')

  //onChange={(e)=> {
  //   setUsername(e.target.value)
  // }}

  const submitSignUp = (e) => {
    e.preventDefault();
    //send info to backend
    Axios.post('http://localhost:3001/signup/insert', {
      username: username, 
      password: password, 
      email: email, 
      birthdate: birthdate
    });
  
    window.location.href="/login";
  };

  return (
    <body>
    <div class="page-wrap">
      
      <div class="left-panel">
        <div class="image">
          <img src="image.png" alt="Image" class="image" />
        </div>
        <h2>Find friends to game with.</h2>
      </div>
  
      <div class="right-panel">
        <h1>
          <strong>Welcome!</strong>
        </h1>
        <form class="animated-form">
          <h3>Create an account</h3>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="username" onChange={(e)=> {
              setUsername(e.target.value)
            }} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="password" onChange={(e)=> {
              setPassword(e.target.value)
            }}/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="email" onChange={(e)=> {
              setEmail(e.target.value)
            }}/>
          </div>
          <div class="form-group">
            <label for="birthdate">Birth Date</label>
            <input type="date" id="birthdate" onChange={(e)=> {
              setBirthdate(e.target.value)
            }}/>
          </div>
          {/* gender? */}
          <div class="form-group flex-end">
            <input onClick={(e) => {submitSignUp(e)}} type="submit" value="SIGN UP" class="button" />
          </div>
        </form>
      </div>
  
    </div>
    </body>
  );
}

export default Signup;