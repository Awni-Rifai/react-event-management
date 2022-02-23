import React, { useEffect } from 'react'
import { useState} from 'react';
import axios from 'axios';
import Guest from './Guest';
function Booking() {
const [id,setId]=useState(localStorage.getItem('event_id'));
const [[event],setEvent] = useState(JSON.parse(localStorage.getItem('events')).filter(item=>item.id===id));
let [isLogged,setIsLogged]=useState(localStorage.getItem('prevUrl')?localStorage.getItem('prevUrl'):0);

	const bookHandle = ()=>{
		let fd = new FormData();
    fd.append("user_id", 1);
    fd.append("event_id", localStorage.getItem("event_id"));
    

    axios.post("http://localhost/book-log.php", fd);
	}

// const [event,setEvent]	= useState(event);


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
									<span className="sub-title">ticket booking</span>
									<h2 className="big-title">harmoni <strong>booking</strong></h2>
								</div>
								{/* <!-- breadcrumb-title - end --> */}

								{/* <!-- breadcrumb-list - start --> */}
								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">booking</li>
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





		{/* <!-- booking-timeout-section - start */}
		{/* ================================================== --> */}
		<section id="booking-timeout-section" className="booking-timeout-section clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- leftside-wrapper - start --> */}
					<div className="col-lg-7 col-md-12 col-sm-12">
						<div className="leftside-wrapper">
							<h3>Please complete registration <strong className="yellow-color">within 12:00 hours.</strong></h3>
							<p className="m-0">After 12:00 hours, the reservation we’re holding will be released to others.</p>
						</div>
					</div>
					{/* <!-- leftside-wrapper - end --> */}

					{/* <!-- rightside-wrapper - start --> */}
					<div className="col-lg-5 col-md-12 col-sm-12">
						<div className="rightside-wrapper">

							<div className="clock-wrapper">
								<ul className="countdown-list" data-countdown="2019/01/01"></ul>
							</div>
							
						</div>
					</div>
					{/* <!-- rightside-wrapper - end --> */}

				</div>
			</div>
		</section>
		{/* <!-- booking-timeout-section - end */}
		{/* ================================================== --> */}





		{/* <!-- booking-section - start */}
		{/* ================================================== --> */}
		<section id="booking-section" className="booking-section bg-gray-light sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- booking-content-wrapper - start --> */}
					<div className="col-lg-8 col-md-12 col-sm-12">
						<div className="booking-content-wrapper">

							{/* <!-- order-summary - start --> */}
							<div className="order-summary mb-50">
								{/* <!-- section-title - start --> */}
								<div className="section-title mb-30">
									<h2 className="big-title">order <strong>summary</strong></h2>
								</div>
								{/* <!-- section-title - end --> */}
								<div className="order-summary-table table-responsive">

									<table className="table text-center" >
										<thead>
											<tr>
												<th scope="col" style={{idth:"33.333%"}}>Event Name</th>
												<th scope="col" >price</th>
												<th scope="col" >Number of Seats</th>
												<th scope="col" >Event start Time</th>
												<th scope="col" >Event end Time</th>
											</tr>
										</thead>
										<tbody>
											<tr className="bg-gray-light" >
												<th scope="row" >{event.name}</th>
												<td >${event.price}</td>
												<td>{event.seat}</td>
												<td>{event.start_time}</td>
												<td>{event.end_time}</td>
											</tr>
											
											<tr className="tfooter">
												<th colspan="4" className="text-left">order total</th>
												<td>${event.price}</td>
											</tr>
										</tbody>
									</table>

								</div>
							</div>
							{/* <!-- order-summary - end --> */}
{isLogged===0?<Guest/>:""}




							{/* <!-- billing-info - start --> */}
							<div className="billing-info mb-50">

								{/* <!-- section-title - start --> */}
								<div className="section-title mb-30">
									<h2 className="big-title">if you are <strong>logged in</strong></h2>
								</div>
								{/* <!-- section-title - end --> */}

								{/* <!-- billing-form - start --> */}
								<div className="billing-form form-wrapper">
										<div className="text-center">
											<button type="button" className="custom-btn" onClick={bookHandle}>
												pay now
											</button>
										</div>

									
								</div>
								{/* <!-- billing-form - end --> */}

							</div>
							{/* <!-- billing-info - end --> */}
							
						</div>
					</div>
					{/* <!-- booking-content-wrapper - end --> */}

					{/* <!-- sidebar-section - start --> */}
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="sidebar-section">

							{/* <!-- section-title - start --> */}
							<div className="section-title mb-30">
								<h2 className="big-title">ticket <strong>info</strong></h2>
							</div>
							{/* <!-- section-title - end --> */}

							{/* <!-- location-wrapper - start --> */}
							<div className="location-wrapper bg-white">

								<div className="title-wrapper">
									<small className="up-arrow-icon">
										<i className="fas fa-chevron-circle-up"></i>
									</small>
									<span className="icon">
										<i className="fas fa-map-marker-alt"></i>
									</span>
									<div className="title-content">
										<small>event location</small>
										<h3>vanila hotel</h3>
									</div>
								</div>
								<div className="location-info-list ul-li-block clearfix">
									<span className="area-name">Istanbul Turkey</span>
									<ul>
										<li><i className="fas fa-arrow-circle-right"></i> Bayezid II Mosque and Beyazid Square</li>
										<li><i className="fas fa-arrow-circle-right"></i> Istanbul, IS 240012</li>
										<li><i className="fas fa-arrow-circle-right"></i> Thursday, December 26, 2018</li>
										<li><i className="fas fa-arrow-circle-right"></i> From <strong>15.00 PM</strong> to <strong>20.00 PM</strong> (EST)</li>
									</ul>
								</div>
								<div className="button">
									<a href="#!" className="custom-btn">ADD TO MY CALENDAR</a>
								</div>
								<div className="title-wrapper">
									<small className="up-arrow-icon">
										<i className="fas fa-chevron-circle-up"></i>
									</small>
									<span className="icon">
										<i className="fas fa-link"></i>
									</span>
									<div className="title-content">
										<small>contact information</small>
										<h3>harmoni staff</h3>
									</div>
								</div>
								<div className="contact-links ul-li-block clearfix">
									<p className="black-color mb-30">
										Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant. Proin gravida nibh vel velit auctor aliquet. sollicitudin, lorem quis more...
									</p>
									<ul>
										<li>
											<a href="#!" target="_blank">
												<span className="icon">
													<i className="fab fa-facebook-f"></i>
												</span>
												facebook.com/harmoni
											</a>
										</li>
										<li>
											<a href="#!" target="_blank">
												<span className="icon">
													<i className="fab fa-twitter"></i>
												</span>
												twitter.com@harmoni
											</a>
										</li>
										<li>
											<a href="#!" target="_blank">
												<span className="icon">
													<i className="fas fa-link"></i>
												</span>
												http://www.harmoni.com
											</a>
										</li>
									</ul>
									<a href="#!" className="custom-btn">CONTACT US NOW</a>
								</div>
							</div>
							{/* <!-- location-wrapper - end --> */}
							
						</div>
					</div>
					{/* <!-- sidebar-section - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- booking-section - end */}
		{/* ================================================== --> */}


    </div>
  )
}

export default Booking