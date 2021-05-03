import React, { useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import './login.css';
import Axios from 'axios'


function Login() {
  
  //databse
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  //onChange={(e)=> {
  //   setUsername(e.target.value)
  // }}

  const submitLogin = (e) => {
    e.preventDefault();

    //send info to backend
    Axios.post('http://localhost:3001/login', {
      username: username, 
      password: password
    }).then((response)=> {

      if(response.data.message) {

        setLoginStatus(response.data.message);
    
      } else {
        window.location.href="/";
      }
      
    })
  };

  return (
    <body>
    <div class="page-wrap">
      
      <div class="left-panel">
        <h2>Find friends to game with.</h2>
      </div>
  
      <div class="right-panel">
        <h1>
          <strong>Welcome!</strong>
        </h1>
        <form class="animated-form">
          <h3>Login to your account</h3>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="username" onChange={(e) => {
              setUsername(e.target.value);
            }} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="password" onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </div>
          <div class="form-group flex-end">
            <input onClick={(e) => {submitLogin(e)}} type="submit" value="LOGIN" class="button" />
          </div>
          <h1>{loginStatus}</h1>
          <div class="lost-password">
            <a href="/signup" class="link">Don't have an account? Sign up!</a>
            <a href="#" class="link">Forgot your password?</a>
          </div>
        </form>
      </div>
  
    </div>
    </body>
  );
}

export default withRouter(Login);