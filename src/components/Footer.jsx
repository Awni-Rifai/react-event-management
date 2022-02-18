import React from 'react'

function footer() {
  return (
    <div>
        	{/* <!-- footer-section3 - start */}
		{/* ================================================== --> */}
		<footer id="footer-section" className="footer-section footer-section3 clearfix">

			{/* <!-- footer-top - start --> */}
			<div className="footer-top sec-ptb-100 clearfix">
				<div className="container">
					<div className="row justify-content-center">

						{/* <!-- about-wrapper - start --> */}
						<div className="col-lg-6 col-md-12 col-sm-12">
							<div className="about-wrapper text-center mb-50 clearfix">

								{/* <!-- site-logo-wrapper - start --> */}
								<div className="site-logo-wrapper mb-30">
									<a href="index-1.html" className="logo">
										<img src="assets/images/2.site-logo.png" alt="logo_not_found"/>
									</a>
								</div>
								{/* <!-- site-logo-wrapper - end --> */}

								<p className="mb-30">
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
								</p>

								{/* <!-- social-links - start --> */}
								<div className="social-links ul-li">
									<h3 className="social-title">network</h3>
									<ul>
										<li>
											<a href="#!"><i className="fab fa-facebook-f"></i></a>
										</li>
										<li>
											<a href="#!"><i className="fab fa-twitter"></i></a>
										</li>
										<li>
											<a href="#!"><i className="fab fa-twitch"></i></a>
										</li>
										<li>
											<a href="#!"><i className="fab fa-google-plus-g"></i></a>
										</li>
										<li>
											<a href="#!"><i className="fab fa-instagram"></i></a>
										</li>
									</ul>
								</div>
								{/* <!-- social-links - end --> */}
								
							</div>
						</div>
						{/* <!-- about-wrapper - end --> */}

						{/* <!-- basic-info - start --> */}
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="basic-info clearfix">
								<div className="row">

									{/* <!-- basic-info-item - start --> */}
									<div className="col-lg-4 col-md-6 col-sm-12">
										<div className="basic-info-item">
											<span className="icon">
												<i className="fas fa-map-marker-alt"></i>
											</span>
											<div className="info-content">
												<p>100 highland ave,</p>
												<h3>california, united state</h3>
											</div>
										</div>
									</div>
									{/* <!-- basic-info-item - end --> */}

									{/* <!-- basic-info-item - start --> */}
									<div className="col-lg-4 col-md-6 col-sm-12">
										<div className="basic-info-item">
											<span className="icon">
												<i className="fas fa-envelope"></i>
											</span>
											<div className="info-content">
												<p><a href="#!">contact@pantero.com</a></p>
												<h3><a href="#!">info@harmoni.com</a></h3>
											</div>
										</div>
									</div>
									{/* <!-- basic-info-item - end --> */}

									{/* <!-- basic-info-item - start --> */}
									<div className="col-lg-4 col-md-6 col-sm-12">
										<div className="basic-info-item">
											<span className="icon">
												<i className="fas fa-phone"></i>
											</span>
											<div className="info-content">
												<p><a href="#!">100 800 1234 5555</a></p>
												<h3><a href="#!">100 800 1234 5555</a></h3>
											</div>
										</div>
									</div>
									{/* <!-- basic-info-item - end --> */}
									
								</div>
							</div>
						</div>
						{/* <!-- basic-info - end --> */}

					</div>
				</div>
			</div>
			{/* <!-- footer-top - end --> */}

			<div className="footer-bottom">
				<div className="container">
					<div className="row">

						{/* <!-- copyright-text - start --> */}
						<div className="col-lg-7 col-md-12 col-sm-12">
							<div className="copyright-text">
								<p className="m-0">©2018 <a href="#!" className="site-link">Harmoni.com</a> all right reserved, made with <i className="fas fa-heart"></i> by <a href="#!" className="author-link"><strong>jThemes Studio</strong></a></p>
							</div>
						</div>
						{/* <!-- copyright-text - end --> */}

						{/* <!-- footer-menu - start --> */}
						<div className="col-lg-5 col-md-12 col-sm-12">
							<div className="footer-menu">
								<ul>
									<li><a href="contact.html">Contact us</a></li>
									<li><a href="about.html">About us</a></li>
									<li><a href="#!">Site map</a></li>
									<li><a href="#!">Privacy policy</a></li>
								</ul>
							</div>
						</div>
						{/* <!-- footer-menu - end --> */}

					</div>
				</div>
			</div>

		</footer>
		{/* <!-- footer-section3 - end
		================================================== --> */}
    </div>
  )
}

export default footer