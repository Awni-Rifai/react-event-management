import React from "react";


function header() {

  return (
    <div>
      {/* <!-- backtotop - start --> */}
      <div id="thetop" className="thetop"></div>
      <div className="backtotop">
        <a href="#thetop" className="scroll">
          <i className="fas fa-angle-double-up"></i>
        </a>
      </div>
      {/* <!-- backtotop - end --> */}

      {/* <!-- preloader - start --> */}
      {/* <div id="preloader"></div> */}
      {/* <!-- preloader - end --> */}

      {/* <!-- header-section - start
		================================================== --> */}
      <header
        id="header-section"
        className="header-section default-header-section auto-hide-header clearfix"
      >
        {/* <!-- header-top - start --> */}
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
                      <a href="#register-modal" className="register-modal-btn">
                        <i className="fas fa-user"></i>
                        Register
                      </a>
                      <div
                        id="register-modal"
                        className="reglog-modal-wrapper register-modal mfp-hide clearfix"
                        style={{
                          backgroundImage:
                            "url(assets/images/login-modal-bg.jpg)",
                        }}
                      >
                        <div className="overlay-black clearfix">
                          {/* <!-- leftside-content - start --> */}
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
                                <li>
                                  <a href="#!">Login</a>
                                </li>
                                <li className="active">
                                  <a href="#!">Register</a>
                                </li>
                              </ul>
                            </div>
                            <div className="copyright-text">
                              <p className="m-0">
                                ©2018{" "}
                                <a href="#!" className="yellow-color">
                                  Harmoni.com
                                </a>{" "}
                                all right reserved, made with{" "}
                                <i className="fas fa-heart"></i> by jThemes
                                Studio{" "}
                              </p>
                            </div>
                          </div>
                          {/* <!-- leftside-content - end --> */}

                          {/* <!-- rightside-content - start --> */}
                          <div className="rightside-content text-center">
                            <div className="mb-30">
                              <h2 className="form-title title-large white-color">
                                Account <strong>Register</strong>
                              </h2>
                              <span className="form-subtitle white-color">
                                Have an account? <strong>LOGIN NOW</strong>
                              </span>
                            </div>

                            <div className="login-form text-center mb-50">
                              <form action="#!">
                                <div className="form-item">
                                  <input type="email" placeholder="User Name" />
                                </div>
                                <div className="form-item">
                                  <input
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div>
                                <div className="form-item">
                                  <input
                                    type="email"
                                    placeholder="Repeat Password"
                                  />
                                </div>
                                <div className="form-item">
                                  <input
                                    type="password"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <div className="human-verification text-left">
                                  <input type="checkbox" id="imnotarobot" />
                                  <label for="imnotarobot">
                                    I'm not a robot
                                  </label>
                                  <span className="verification-image">
                                    <img
                                      src="assets/images/iamnotrobot.png"
                                      alt="Image_not_found"
                                    />
                                  </span>
                                </div>
                                <button type="submit" className="login-btn">
                                  login now
                                </button>
                              </form>
                            </div>

                            <div className="bottom-text white-color">
                              <p className="m-0">* Denotes mandatory field.</p>
                              <p className="m-0">
                                ** At least one telephone number is required.
                              </p>
                            </div>
                          </div>
                          {/* <!-- rightside-content - end --> */}

                          <a className="popup-modal-dismiss" href="#!">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#login-modal" className="login-modal-btn">
                        <i className="fas fa-lock"></i>
                        Login
                      </a>
                      <div
                        id="login-modal"
                        className="reglog-modal-wrapper mfp-hide clearfix"
                        style={{
                          backgroundImage:
                            "url(assets/images/login-modal-bg.jpg)",
                        }}
                      >
                        <div className="overlay-black clearfix">
                          {/* <!-- leftside-content - start --> */}
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
                                <li className="active">
                                  <a href="#!">Login</a>
                                </li>
                                <li>
                                  <a href="#!">Register</a>
                                </li>
                              </ul>
                            </div>
                            <div className="copyright-text">
                              <p className="m-0">
                                ©2018{" "}
                                <a href="#!" className="yellow-color">
                                  Harmoni.com
                                </a>{" "}
                                all right reserved, made with{" "}
                                <i className="fas fa-heart"></i> by jThemes
                                Studio{" "}
                              </p>
                            </div>
                          </div>
                          {/* <!-- leftside-content - end --> */}

                          {/* <!-- rightside-content - start --> */}
                          <div className="rightside-content text-center">
                            <div className="mb-30">
                              <h2 className="form-title title-large white-color">
                                Account <strong>Login</strong>
                              </h2>
                              <span className="form-subtitle white-color">
                                Login to our website, or{" "}
                                <strong>REGISTER</strong>
                              </span>
                            </div>

                            <div className="fb-login-btn mb-30">
                              <a href="#!">
                                <span className="icon">
                                  <i className="fab fa-facebook-f"></i>
                                </span>
                                login with facebook
                              </a>
                            </div>

                            <div className="or-text mb-30">
                              <span>or sign in</span>
                            </div>

                            <div className="login-form text-center mb-50">
                              <form action="#!">
                                <div className="form-item">
                                  <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                  />
                                </div>
                                <div className="form-item">
                                  <input
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div>
                                <button type="submit" className="login-btn">
                                  login now
                                </button>
                              </form>
                            </div>

                            <div className="bottom-text white-color">
                              <p className="m-0">* Denotes mandatory field.</p>
                              <p className="m-0">
                                ** At least one telephone number is required.
                              </p>
                            </div>
                          </div>
                          {/* <!-- rightside-content - end --> */}

                          <a className="popup-modal-dismiss" href="#!">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- register-login-group - end --> */}
            </div>
          </div>
        </div>
        {/* <!-- header-top - end --> */}

        {/* <!-- header-bottom - start --> */}
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              {/* <!-- site-logo-wrapper - start --> */}
              <div className="col-lg-3">
                <div className="site-logo-wrapper">
                  <a href="index-1.html" className="logo">
                    <img
                      src="assets/images/0.site-logo.png"
                      alt="logo_not_found"
                    />
                  </a>
                </div>
              </div>
              {/* <!-- site-logo-wrapper - end --> */}

              {/* <!-- mainmenu-wrapper - start --> */}
              <div className="col-lg-9">
                <div className="mainmenu-wrapper">
                  <div className="row">
                    {/* <!-- menu-item-list - start --> */}
                    <div className="col-lg-10">
                      <div className="menu-item-list ul-li clearfix">
                        <ul>
                          <li className="menu-item-has-children">
                            <a href="/">Home</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="About">about</a>
                            {/* <ul className="sub-menu">
														<li><a href="about.html">about us</a></li>
														<li><a href='service.html'>service</a></li>
														<li><a href='faq.html'>FAQ</a></li>
													</ul> */}
                          </li>
                          {/* <li className="menu-item-has-children active">
													<a href="#!">events</a>
													<ul className="sub-menu">
														<li className="menu-item-has-children">
															<a href='event-1.html'>event List</a>
															<ul className="sub-menu">
																<li><a href="event-1-without-sidebar.html">list without sidebar</a></li>
															</ul>
														</li>
														<li className="menu-item-has-children">
															<a href='event-2.html'>event Grid</a>
															<ul className="sub-menu">
																<li><a href="event-2-without-sidebar.html">grid without sidebar</a></li>
															</ul>
														</li>
														<li><a href='event-details.html' className="active">event details</a></li>
														<li><a href='booking.html'>event booking</a></li>
													</ul>
												</li> */}
                          <li className="menu-item-has-children">
                            <a href="Booking">Booking</a>
                            {/* <ul className="sub-menu">
														<li><a href='blog.html'>blog</a></li>
														<li><a href='blog-details.html'>blog details</a></li>
													</ul> */}
                          </li>
                          <li>
                            <a href="detailes">Event Detailes</a>
                          </li>
                          <li>
                            <a href="List">Events List</a>
                          </li>
                          {/* <li className="menu-item-has-children">
													<a href="#!">contact</a>
													<ul className="sub-menu">
														<li><a href="contact.html">contact us</a></li>
														<li><a href='404-error.html'>404 Error</a></li>
													</ul>
												</li> */}
                        </ul>
                      </div>
                    </div>
                    {/* <!-- menu-item-list - end --> */}

                    {/* <!-- menu-item-list - start --> */}
                    <div className="col-lg-2">
                      <div className="user-search-btn-group ul-li clearfix">
                        <ul>
                          <li>
                            <a href="#!">
                              <i className="fas fa-user"></i>
                            </a>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="toggle-overlay search-btn"
                            >
                              <i className="fas fa-search"></i>
                            </button>
                            {/* <!-- search-body - start --> */}
                            <div className="search-body">
                              <div className="search-form">
                                <form action="#">
                                  <input
                                    className="search-input"
                                    type="search"
                                    placeholder="Search Here"
                                  />
                                  <div className="outer-close toggle-overlay">
                                    <button
                                      type="button"
                                      className="search-close"
                                    >
                                      <i className="fas fa-times"></i>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/* <!-- search-body - end --> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- menu-item-list - end --> */}
                  </div>
                </div>
              </div>
              {/* <!-- mainmenu-wrapper - end --> */}
            </div>
          </div>
        </div>
        {/* <!-- header-bottom - end --> */}
      </header>
      {/* <!-- header-section - end
		================================================== --> */}

      {/* 
		<!-- altranative-header - start
		================================================== --> */}
      <div className="header-altranative">
        <div className="container">
          <div className="logo-area float-left">
            <a href="index-1.html">
              <img src="assets/images/1.site-logo.png" alt="logo_not_found" />
            </a>
          </div>

          <button
            type="button"
            id="sidebarCollapse"
            className="alt-menu-btn float-right"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- sidebar menu - start --> */}
        <div className="sidebar-menu-wrapper">
          <div id="sidebar" className="sidebar">
            <span id="sidebar-dismiss" className="sidebar-dismiss">
              <i className="fas fa-arrow-left"></i>
            </span>

            <div className="sidebar-header">
              <a href="#!">
                <img src="assets/images/2.site-logo.png" alt="logo_not_found" />
              </a>
            </div>

            {/* <!-- sidebar-form - start --> */}
            <div className="sidebar-form">
              <form action="#">
                <input
                  id="altmenu-sidebar-search"
                  type="search"
                  placeholder="Search"
                />
                <label for="altmenu-sidebar-search">
                  <i className="fas fa-search"></i>
                </label>
              </form>
            </div>
            {/* <!-- sidebar-form - end --> */}

            {/* <!-- main-pages-links - start --> */}
            <div className="menu-link-list main-pages-links">
              <h2 className="menu-title">all home pages</h2>
              <ul>
                <li>
                  <a href="index-1.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Home V.1
                  </a>
                </li>
                <li>
                  <a href="index-2.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Home V.2
                  </a>
                </li>
                <li>
                  <a href="index-3.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Home v.3
                  </a>
                </li>
                <li>
                  <a href="index-4.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Home v.4
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- main-pages-links - end --> */}

            {/* <!-- other-pages-links - start --> */}
            <div className="menu-link-list other-pages-links">
              <h2 className="menu-title">all single pages</h2>
              <ul>
                <li>
                  <a href="about.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    our Services
                  </a>
                </li>
                <li>
                  <a href="event-1.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    event list
                  </a>
                </li>
                <li>
                  <a href="event-2.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    event grid
                  </a>
                </li>
                <li>
                  <a href="event-1-without-sidebar.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    list without sidebar
                  </a>
                </li>
                <li>
                  <a href="event-2-without-sidebar.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    grid without sidebar
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Latest blogs
                  </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    our gallery
                  </a>
                </li>
                <li>
                  <a href="speaker.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    event speakers
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- other-pages-links - end --> */}

            {/* <!-- inner-pages-links - start --> */}
            <div className="menu-link-list inner-pages-links">
              <h2 className="menu-title">all inner pages</h2>
              <ul>
                <li>
                  <a href="booking.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    event booking
                  </a>
                </li>
                <li className="active">
                  <a href="event-details.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    event details
                  </a>
                </li>
                <li>
                  <a href="blog-details.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    blog details
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    Frequently Ask Qusetion
                  </a>
                </li>
                <li>
                  <a href="404-error.html">
                    <span className="icon">
                      <i className="fas fa-home"></i>
                    </span>
                    404 error
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- inner-pages-links - end --> */}

            {/* <!-- login-btn-group - start --> */}
            <div className="login-btn-group">
              <ul>
                <li>
                  <a href="#alt-register-modal" className="register-modal-btn">
                    Register
                  </a>
                  <div
                    id="alt-register-modal"
                    className="reglog-modal-wrapper register-modal mfp-hide clearfix"
                    style={{
                      backgroundImage: "url(assets/images/login-modal-bg.jpg)",
                    }}
                  >
                    <div className="overlay-black clearfix">
                      {/* <!-- leftside-content - start --> */}
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
                            <li>
                              <a href="#!">Login</a>
                            </li>
                            <li className="active">
                              <a href="#!">Register</a>
                            </li>
                          </ul>
                        </div>
                        <div className="copyright-text">
                          <p className="m-0">
                            ©2018{" "}
                            <a href="#!" className="yellow-color">
                              Harmoni.com
                            </a>{" "}
                            all right reserved, made with{" "}
                            <i className="fas fa-heart"></i> by jThemes Studio{" "}
                          </p>
                        </div>
                      </div>
                      {/* <!-- leftside-content - end --> */}

                      {/* <!-- rightside-content - start --> */}
                      <div className="rightside-content text-center">
                        <div className="mb-30">
                          <h2 className="form-title title-large white-color">
                            Account <strong>Register</strong>
                          </h2>
                          <span className="form-subtitle white-color">
                            Have an account? <strong>LOGIN NOW</strong>
                          </span>
                        </div>

                        <div className="login-form text-center mb-50">
                          <form action="#!">
                            <div className="form-item">
                              <input type="email" placeholder="User Name" />
                            </div>
                            <div className="form-item">
                              <input type="password" placeholder="Password" />
                            </div>
                            <div className="form-item">
                              <input
                                type="email"
                                placeholder="Repeat Password"
                              />
                            </div>
                            <div className="form-item">
                              <input
                                type="password"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="human-verification text-left">
                              <input type="checkbox" id="alt-imnotarobot" />
                              <label for="alt-imnotarobot">
                                I'm not a robot
                              </label>
                              <span className="verification-image">
                                <img
                                  src="assets/images/iamnotrobot.png"
                                  alt="Image_not_found"
                                />
                              </span>
                            </div>
                            <button type="submit" className="login-btn">
                              login now
                            </button>
                          </form>
                        </div>

                        <div className="bottom-text white-color">
                          <p className="m-0">* Denotes mandatory field.</p>
                          <p className="m-0">
                            ** At least one telephone number is required.
                          </p>
                        </div>
                      </div>
                      {/* <!-- rightside-content - end --> */}

                      <a className="popup-modal-dismiss" href="#!">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#alt-login-modal" className="login-modal-btn">
                    Login
                  </a>
                  <div
                    id="alt-login-modal"
                    className="reglog-modal-wrapper mfp-hide clearfix"
                    style={{
                      backgroundImage: "url(assets/images/login-modal-bg.jpg)",
                    }}
                  >
                    <div className="overlay-black clearfix">
                      {/* <!-- leftside-content - start --> */}
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
                            <li className="active">
                              <a href="#!">Login</a>
                            </li>
                            <li>
                              <a href="#!">Register</a>
                            </li>
                          </ul>
                        </div>
                        <div className="copyright-text">
                          <p className="m-0">
                            ©2018{" "}
                            <a href="#!" className="yellow-color">
                              Harmoni.com
                            </a>{" "}
                            all right reserved, made with{" "}
                            <i className="fas fa-heart"></i> by jThemes Studio{" "}
                          </p>
                        </div>
                      </div>
                      {/* <!-- leftside-content - end --> */}

                      {/* <!-- rightside-content - start --> */}
                      <div className="rightside-content text-center">
                        <div className="mb-30">
                          <h2 className="form-title title-large white-color">
                            Account <strong>Login</strong>
                          </h2>
                          <span className="form-subtitle white-color">
                            Login to our website, or <strong>REGISTER</strong>
                          </span>
                        </div>

                        <div className="fb-login-btn mb-30">
                          <a href="#!">
                            <span className="icon">
                              <i className="fab fa-facebook-f"></i>
                            </span>
                            login with facebook
                          </a>
                        </div>

                        <div className="or-text mb-30">
                          <span>or sign in</span>
                        </div>

                        <div className="login-form text-center mb-50">
                          <form action="#!">
                            <div className="form-item">
                              <input
                                type="email"
                                placeholder="example@gmail.com"
                              />
                            </div>
                            <div className="form-item">
                              <input type="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="login-btn">
                              login now
                            </button>
                          </form>
                        </div>

                        <div className="bottom-text white-color">
                          <p className="m-0">* Denotes mandatory field.</p>
                          <p className="m-0">
                            ** At least one telephone number is required.
                          </p>
                        </div>
                      </div>
                      {/* <!-- rightside-content - end --> */}

                      <a className="popup-modal-dismiss" href="#!">
                        <i className="fas fa-times"></i>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- login-btn-group - end --> */}

            {/* <!-- social-links - start --> */}
            <div className="social-links">
              <h2 className="menu-title">get in touch</h2>
              <div className="mb-15">
                <h3 className="contact-info">
                  <i className="fas fa-phone"></i>
                  100-2222-9999
                </h3>
                <h3 className="contact-info">
                  <i className="fas fa-envelope"></i>
                  info@harmoni.com
                </h3>
              </div>
              <ul>
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitch"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <a href="contact.html" className="contact-btn">
                contact us
              </a>
            </div>
            {/* <!-- social-links - end --> */}

            <div className="overlay"></div>
          </div>
        </div>
        {/* <!-- sidebar menu - end --> */}
      </div>
      {/* <!-- altranative-header - end */}
      {/* ================================================== --> */}
    </div>
  );
}

export default header;
