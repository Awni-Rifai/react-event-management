import React from 'react'
import { Link} from "react-router-dom";

function About() {
  return (
    <div>
        	{/* <!-- breadcrumb-section - start */}
		{/* ================================================== --> */}
		<section id="breadcrumb-section" className="breadcrumb-section clearfix">
			<div className="jarallax" style={{backgroundColor: '#333333'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								{/* <!-- breadcrumb-title - start --> */}
								<div className="breadcrumb-title text-center">
									<span className="sub-title">all you need to know</span>
									<h2 className="big-title"><strong>Conatct With</strong> harmoni</h2>
								</div>
								{/* <!-- breadcrumb-title - end --> */}

								{/* <!-- breadcrumb-list - start --> */}
								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Contact</li>
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
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 m-auto">
                    <section id="main-carousel2" className="main-carousel2 clearfix">

				<div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg6.jpg)'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row">

							{/* <!-- reg-form - start --> */}
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="reg-form">

									<div className="from-title">
										<h2 className="title-text"><strong>Contact</strong> Now</h2>
										<div className="sub-title">Discover More </div>
									</div>

									<div className="form-wrapper mb-30">
										<form action="#">

											<div className="form-item">
												<input type="text" placeholder="Full Name"/>
											</div>

											<div className="form-item">
												<input type="email" placeholder="Email Address"/>
											</div>

											<div className="form-item">
												<input type="tel" placeholder="Phone Number"/>
											</div>
											<div className="form-item">
												<textarea type="text" placeholder="Text Area "/>
											</div>

										

										
											
										</form>
									</div>

									<button type="submit" className="submit-btn">Submit </button>
									
								</div>
							</div>
							{/* <!-- reg-form - end --> */}

							{/* <!-- slider-content - start --> */}
						
							{/* <!-- slider-content - end --> */}
							
						</div>
					</div>
				</div>
			</div>
	

		

		

		</section>
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
					{/* <div className="col-lg-6">
						<div className="section-title mb-50 sr-fade1">
							<span className="line-style"></span>
							<small className="sub-title">why choose us</small>
							<h2 className="big-title">Harmoni <strong>Advantages</strong></h2>
						</div>
					</div> */}
{/* 
					<div className="col-lg-6">
						<div className="team-btn text-right sr-fade2">
							<Link to="/List" className="custom-btn">Explor Events</Link>
						</div>
					</div> */}
				</div>

				

			</div>
		</section>
		{/* <!-- service-section - end */}
		{/* ================================================== --> */}





	


    </div>
  )
}

export default About