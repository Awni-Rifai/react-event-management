import React from 'react'

export default function HeaderTop() {
  return (
    <div className="header-top">
    <div className="container">
      <div className="row">
        {/* <!-- basic-contact - start --> */}
        <div className="col-lg-6">
          <div className="basic-contact">
            <ul>
              <li>
                <a href="#!">
                  <i className="fas fa-envelope"></i>
                  info@harmoni.com
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fas fa-phone"></i>
                  100-2222-9999
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- basic-contact - end -->

                  <!-- register-login-group - start --> */}
        <div className="col-lg-6">
          <div className="register-login-group">
            <ul>
              <li>
              <a onClick={goToRegister} to='register'>
              <i className="fas fa-user"></i>
                  Register
              </a>
                
                
        
              </li>
              <li>
                <a onClick={goToLogin}>
                <i className="fas fa-lock"></i>
                  Login
                </a>
              
                
                
             
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- register-login-group - end --> */}
      </div>
    </div>
  </div>
  )
}
