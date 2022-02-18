import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from '../../carouselOptions';

function Slider() {
  return (
    <div>
        	{/* <!-- slide-section - start */}
		{/* ================================================== --> */}
		<section id="main-carousel2" className="main-carousel2 clearfix">
		<OwlCarousel
                    items={1}
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
					{...options}
					
                   
                  >
					  	<div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg4.jpg)'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row">

							{/* <!-- reg-form - start --> */}
							<div className="col-lg-4 col-md-12 col-sm-12">
								<div className="reg-form">

									<div className="from-title">
										<h2 className="title-text"><strong>register</strong> now</h2>
										<div className="sub-title">make a booking now</div>
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
												<select className="package-select">
													<option selected="">Choose Package</option>
													<option value="1">Option 1</option>
													<option value="2">Option 2</option>
													<option value="3">Option 3</option>
												</select>
											</div>

											<div className="form-item">
												<select className="quantity-select">
													<option selected="">Ticket Quantity</option>
													<option value="1">Option 1</option>
													<option value="2">Option 2</option>
													<option value="3">Option 3</option>
												</select>
											</div>
											
										</form>
									</div>

									<button type="submit" className="submit-btn">register now</button>
									
								</div>
							</div>
							{/* <!-- reg-form - end --> */}

							{/* <!-- slider-content - start --> */}
							<div className="col-lg-8 col-md-12 col-sm-12">
								<div className="slider-content">
									<div className="countdown-timer mb-50">
										<ul className="countdown-list" data-countdown="2020/08/08"></ul>
									</div>
									<span className="date">26 december 2019</span>
									<h1 className="title-text">
										AMSTERDAM
									</h1>
									<strong className="bold-text">PHP CONFERENCE</strong>
									<a href="#!" className="details-btn">event details</a>
								</div>
							</div>
							{/* <!-- slider-content - end --> */}
							
						</div>
					</div>
				</div>
			</div>
					  	<div className="item" style={{backgroundImage: 'url(assets/images/slider/slider-bg6.jpg)'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row">

							{/* <!-- reg-form - start --> */}
							<div className="col-lg-4 col-md-12 col-sm-12">
								<div className="reg-form">

									<div className="from-title">
										<h2 className="title-text"><strong>register</strong> now</h2>
										<div className="sub-title">make a booking now</div>
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
												<select className="package-select">
													<option selected="">Choose Package</option>
													<option value="1">Option 1</option>
													<option value="2">Option 2</option>
													<option value="3">Option 3</option>
												</select>
											</div>

											<div className="form-item">
												<select className="quantity-select">
													<option selected="">Ticket Quantity</option>
													<option value="1">Option 1</option>
													<option value="2">Option 2</option>
													<option value="3">Option 3</option>
												</select>
											</div>
											
										</form>
									</div>

									<button type="submit" className="submit-btn">register now</button>
									
								</div>
							</div>
							{/* <!-- reg-form - end --> */}

							{/* <!-- slider-content - start --> */}
							<div className="col-lg-8 col-md-12 col-sm-12">
								<div className="slider-content">
									<div className="countdown-timer mb-50">
										<ul className="countdown-list" data-countdown="2020/08/08"></ul>
									</div>
									<span className="date">26 december 2019</span>
									<h1 className="title-text">
										AMSTERDAM
									</h1>
									<strong className="bold-text">PHP CONFERENCE</strong>
									<a href="#!" className="details-btn">event details</a>
								</div>
							</div>
							{/* <!-- slider-content - end --> */}
							
						</div>
					</div>
				</div>
			</div>
					  </OwlCarousel>
	

		

		

		</section>
		{/* <!-- slide-section - end */}
		{/* ================================================== --> */}
    </div>
  )
}

export default Slider