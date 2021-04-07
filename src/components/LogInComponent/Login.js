import React from 'react';
import './login.css';

function Login() {
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
          <h3>Login to your account</h3>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="username" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="password" />
          </div>
          <div class="form-group flex-end">
            <input type="submit" value="LOGIN" class="button" />
          </div>
          <div class="lost-password">
            <a href="#" class="link">Forgot your password?</a>
          </div>
        </form>
      </div>
  
    </div>
    </body>
  );
}

export default Login;