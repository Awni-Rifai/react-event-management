import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginRegisterLeftSide({login,error}) {
  return (
    <div className="leftside-content">
    <div className="site-logo-wrapper mb-80">
      <a href="#!" className="logo">
        <img
          src="assets/images/2.site-logo.png"
          alt="logo_not_found"
        />
      </a>
    </div>
    <div className="register-login-link mb-80">
      <ul>
        <li className={login?'active':''}>
        <Link to="/login">Login</Link>
        </li>
        <li className={login?'':'active'}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <div 
      style={{
          color:'red',
          fontSize:'1.4rem',
          fontWeight:'bold',
          marginTop:'4rem'

        }}
       className="error">
           {error}

      </div>
      
    </div>
    <div className="copyright-text">
      <p className="m-0">
        ©2019{" "}
        <a href="#!" className="yellow-color">
          Harmoni.com
        </a>{" "}
        all right reserved, made with{" "}
        <i className="fas fa-heart"></i> by jThemes Studio{" "}
      </p>
    </div>
  </div>
  )
}
