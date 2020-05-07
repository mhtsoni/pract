import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react'
  
  function LoginSignup() {
      return (
          <div className="toggleLogin">
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/signup">SignUp</Link></button>
          </div>
      )
  }
  
  export default LoginSignup
  