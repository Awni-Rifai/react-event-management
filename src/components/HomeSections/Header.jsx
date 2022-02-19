import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HeaderHome({loggedIn}) {
  const [userDropDown, setUserDropDown] = useState(false);
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 0) setNavBarBackgroundColor(true);
    else setNavBarBackgroundColor(false);
  };
  const navigate = useNavigate();
  const goToLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("prevUrl", window.location.pathname);
    navigate("login");
  };
  const goToRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("prevUrl", window.location.pathname);
    navigate("register");
  };
  const toggleDropDownUser = () => {
    setUserDropDown((prevState) => {
      return prevState ? false : true;
    });
  };

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
      <div id="preloader"></div>
      {/* <!-- preloader - end --> */}

      {/* <!-- header-section - start */}
      {/* ================================================== --> */}
      <header
        style={{
          backgroundColor: navBarBackgroundColor ? "rgba(0,0,0,1)" : "initial",
        }}
        id="header-section"
        className="header-section sticky-header-section not-stuck clearfix"
      >
        {/* <!-- header-bottom - start --> */}
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              {/* <!-- site-logo-wrapper - start --> */}
              <div className="col-lg-3">
                <div className="site-logo-wrapper">
                  <a href="index-1.html" className="logo">
                    <img
                      src="assets/images/1.site-logo.png"
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
                          <li className="menu-item-has-children active">
                            <a href="#!">home</a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <a href="index-1.html">home v.1</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="#">example v.1.1</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.1.2</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.1.3</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.1.4</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="index-2.html" className="active">
                                  home v.2
                                </a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="#">example v.2.1</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.2.2</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.2.3</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="index-3.html">home v.3</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="#">example v.3.1</a>
                                  </li>
                                  <li>
                                    <a href="#">example v.3.2</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="index-4.html">home v.4</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="#">example v.4.1</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#!">about</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="about.html">about us</a>
                              </li>
                              <li>
                                <a href="service.html">service</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#!">events</a>
                            <ul className="sub-menu">
                              <li className="menu-item-has-children">
                                <a href="event-1.html">event List</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="event-1-without-sidebar.html">
                                      list without sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="event-2.html">event Grid</a>
                                <ul className="sub-menu">
                                  <li>
                                    <a href="event-2-without-sidebar.html">
                                      grid without sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="event-details.html">event details</a>
                              </li>
                              <li>
                                <a href="booking.html">event booking</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#!">blogs</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog.html">blog</a>
                              </li>
                              <li>
                                <a href="blog-details.html">blog details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="gallery.html">gallery</a>
                          </li>
                          <li>
                            <a href="speaker.html">speaker</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#!">contact</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="contact.html">contact us</a>
                              </li>
                              <li>
                                <a href="404-error.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- menu-item-list - end --> */}

                    {/* <!-- menu-item-list - start --> */}
                    <div className="col-lg-2">
                      <div className="user-search-btn-group ul-li clearfix">
                        {/** //! User Btn  */}
                        <ul>
                          <li>
                            <a onClick={toggleDropDownUser}>
                              <i className="fas fa-lock"></i>
                              {userDropDown && (
                                <div>
                                  {!loggedIn ? (
                                    <>
                                      <a onClick={goToLogin}>Login</a>
                                      <a onClick={goToRegister}>Register</a>
                                    </>
                                  ) : (
                                    <Link to="profile">Profile</Link>
                                  )}
                                </div>
                              )}
                            </a>

                            {/*  Profile */}
                            {/* <a >
														<i className="fas fa-user"></i>
													</a> */}
                          </li>
                          {/**Search Component */}
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
      {/* <!-- header-section - end */}
      {/* ================================================== --> */}

      {/* <!-- altranative-header - start */}
      {/* ================================================== --> */}
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
                <li className="active">
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
                <li>
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
                  <a onClick={goToRegister}>
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

export default HeaderHome;
