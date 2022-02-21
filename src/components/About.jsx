import React from 'react'
import { Link} from "react-router-dom";

function About() {
  return (
    <div>
        	{/* <!-- breadcrumb-section - start */}
		{/* ================================================== --> */}
		<section id="breadcrumb-section" className="breadcrumb-section clearfix">
			<div className="jarallax" style={{backgroundImage: 'url(assets/images/breadcrumb/0.breadcrumb-bg.jpg)'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								{/* <!-- breadcrumb-title - start --> */}
								<div className="breadcrumb-title text-center mb-50">
									<span className="sub-title">all you need to know</span>
									<h2 className="big-title"><strong>about</strong> harmoni</h2>
								</div>
								{/* <!-- breadcrumb-title - end --> */}

								{/* <!-- breadcrumb-list - start --> */}
								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">about us</li>
									</ul>
								</div>
								{/* <!-- breadcrumb-list - end --> */}

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- breadcrumb-section - end */}
		{/* ================================================== --> */}





		{/* <!-- our-management-section - start */}
		{/* ================================================== --> */}
		<section id="our-management-section" className="our-management-section bg-gray-light sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- section-title - start --> */}
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="section-title text-left mb-50 sr-fade1">
							<small className="sub-title">we are harmoni</small>
							<h2 className="big-title"><strong>No.1</strong> Events Management</h2>
							<Link to="/" className="custom-btn">
								Go Home!
							</Link>
						</div>
					</div>
					{/* <!-- section-title - end --> */}

					<div className="col-lg-8 col-md-12 col-sm-12">
						<div className="row">

							{/* <!-- management-item - start --> */}
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="management-item sr-fade2">
									<div className="item-title">
										<h3 className="title-text">
											our mission
										</h3>
									</div>
									<p className="black-color mb-30">
									We understand the challenges of delivering a successful hybrid event and combine our long list of comprehensive abilities in both in-person and virtual events to create a bespoke hybrid event that meets your vision.									</p>
									<p className="black-color m-0">
										<strong>
											<i>
											We help you map your delegate journey and design your event, so that it not only fits your event objectives, but also that of your broader campaign and company objectives.											</i>	
										</strong>
									</p>
								</div>
							</div>
							{/* <!-- management-item - end --> */}

							{/* <!-- management-item - start --> */}
							<div className="col-lg-6 col-md-6 col-sm-12">
								<div className="management-item sr-fade3">
									<div className="item-title">
										<h3 className="title-text">
											our vission
										</h3>
									</div>
									<p className="black-color mb-30">
										Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit.
									</p>
									<p className="black-color m-0">
										<strong>
											<i>
												Lorem ipsum dollor site amet the best  consectuer adipiscing elites sed diam nonummy nibh euismod.
											</i>	
										</strong>
									</p>
								</div>
							</div>
							{/* <!-- management-item - end --> */}

						</div>
					</div>
					
				</div>
			</div>
		</section>
		{/* <!-- our-management-section - end */}
		{/* ================================================== --> */}





	




		{/* <!-- service-section - start */}
		{/* ================================================== --> */}
		<section id="service-section" className="service-section sec-ptb-100 bg-gray-light clearfix">
			<div className="container">

				<div className="row">
					<div className="col-lg-6">
						<div className="section-title mb-50 sr-fade1">
							<span className="line-style"></span>
							<small className="sub-title">why choose us</small>
							<h2 className="big-title">Harmoni <strong>Advantages</strong></h2>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="team-btn text-right sr-fade2">
							<Link to="/List" className="custom-btn">Explor Events</Link>
						</div>
					</div>
				</div>

				<div className="service-wrapper sr-fade1">
					<ul>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-handshake"></i>
								</span>
								<strong className="service-title">friendly team</strong>
								<small className="service-sub-title">More than 200 teams</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-cheers"></i>
								</span>
								<strong className="service-title">Unique Scenario</strong>
								<small className="service-sub-title">we thinking out of the box</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-two-balloons"></i>
								</span>
								<strong className="service-title">perfect venues</strong>
								<small className="service-sub-title">perfect venues</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-speech-bubble"></i>
								</span>
								<strong className="service-title">24/7 hours support</strong>
								<small className="service-sub-title">anitime anywhere</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-clown-hat"></i>
								</span>
								<strong className="service-title">Unforgetable Times</strong>
								<small className="service-sub-title">More than 200 teams</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-light-bulb"></i>
								</span>
								<strong className="service-title">Briliant Idea</strong>
								<small className="service-sub-title">We thinking out of the box</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-event-date-and-time-symbol"></i>
								</span>
								<strong className="service-title">Unique Scenario</strong>
								<small className="service-sub-title">perfact venues</small>
							</a>
						</li>

						<li>
							<a href="#!">
								<span className="icon">
									<i className="flaticon-group"></i>
								</span>
								<strong className="service-title">Best Management</strong>
								<small className="service-sub-title">anytime anywhere</small>
							</a>
						</li>

					</ul>
				</div>

			</div>
		</section>
		{/* <!-- service-section - end */}
		{/* ================================================== --> */}





	


    </div>
  )
}

export default About