import React from 'react'
import BreadCrumps from './BreadCrumps'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from '../carouselOptions';
import { useEffect } from 'react';
import { useState } from 'react';

function EventDetailes() {

	let  [myevent, setMyevent] = useState('');
	useEffect(()=>{
		window.scroll(0,-400);

	let eventId = localStorage.getItem('event_id');

	let single_event = JSON.parse(localStorage.getItem("events")).filter(
		(event) => event.id === eventId
	  );
	
	  setMyevent(single_event[0])

;
	// console.log('name',event.name);

	},[]);

	
	// console.log('111111 event',myevent);
	// console.log('22222 eventId ',eventId)
  return (
    <div>
      		<section id="breadcrumb-section" className="breadcrumb-section clearfix">
			<div className="jarallax" style={{backgroundImage: 'url(assets/images/breadcrumb/0.breadcrumb-bg.jpg)'}}>
				<div className="overlay-black">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-12 col-sm-12">

								{/* <!-- breadcrumb-title - start --> */}
								<div className="breadcrumb-title text-center mb-50">
									<span className="sub-title">event single</span>
									<h2 className="big-title">harmoni <strong>event details</strong></h2>
								</div>
								{/* <!-- breadcrumb-title - end --> */}

								{/* <!-- breadcrumb-list - start --> */}
								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
										<li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Events</a></li>
										<li className="breadcrumb-item active" aria-current="page">{myevent.name}</li>
									</ul>
								</div>
								{/* <!-- breadcrumb-list - end --> */}

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- breadcrumb-section - end
		================================================== --> */}

		{/* <!-- event-details-section - start */}
		{/* ================================================== --> */}
		<section id="event-details-section" className="event-details-section sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- col - event-details - start --> */}
					<div className="col-lg-8 col-md-12 col-sm-12">

						{/* <!-- event-details - start --> */}
						<div className="event-details mb-80">

							<div className="event-title mb-30">
								
								<h2 className="event-title">{myevent.name} <strong>{myevent.event_time}</strong></h2>
							</div>

							<div id="event-details-carousel" className="event-details-carousel  owl-theme">
							<OwlCarousel
 items={1}
 className="owl-theme"
 loop
 margin={10}
 nav
 {...{...options,autoplay:true}}
 
>
<div className="item">
									<img src={myevent.image} alt="Image_not_found"/>
								</div>
								
								{/* <div className="item">
									<img src={myevent.image3} alt="Image_not_found"/>
								</div> */}
	</OwlCarousel>
								
							</div>

							<div className="event-info-list ul-li clearfix mb-50">
								<ul>
									<li className='col-6'>
										<span className="icon">
											<i className="far fa-calendar"></i>
										</span>
										<div className="event-content">
											<small className="event-title">Event Date</small>
											<h3 className="event-date">{myevent.event_time}</h3>
										</div>
									</li>
									<li className='col-6'>
										<span className="icon">
											<i className="far fa-clock"></i>
										</span>
										<div className="event-content">
											<small className="event-title">Event Time</small>
											<h3 className="event-date">{myevent.start_time} - {myevent.end_time}  </h3>
										</div>
									</li>
								
								</ul>
								<div  className=' text-break '>
									<strong>More Info : </strong>
								   {myevent.description}
                              
							</div>
							</div>
	
						</div>
						{/* <!-- event-details - end --> */}


					</div>
					{/* <!-- col - event-details - end --> */}

					{/* <!-- sidebar-section - start --> */}
					<div className="col-lg-4 col-md-12 col-sm-12 sideInfo">
						<div className="sidebar-section">

							{/* <!-- location-wrapper - start --> */}
							<div className="location-wrapper mb-30">
								<div className="title-wrapper">
									<small className="up-arrow-icon">
									</small>
									<span className="icon">
										<i className="fas fa-map-marker-alt"></i>
									</span>
									<div className="title-content">
										<small>event location</small>
										<h3>{myevent.city}</h3>
									</div>
								</div>
								<div className="location-info-list ul-li-block clearfix mb-1">
									<span className="area-name">{myevent.location}</span>
									<ul>
										<li><i className="fas fa-arrow-circle-right"></i> Presented By: <strong> {myevent.speaker}</strong></li>
										<li><i className="fas fa-arrow-circle-right"></i> {myevent.event_time}</li>
										<li><i className="fas fa-arrow-circle-right"></i> From <strong>{myevent.start_time}</strong> to <strong>{myevent.end_time}</strong> (EST)</li>

									</ul>
								</div>
								<div className="button">
									<a href="#!" className="custom-btn">ADD TO MY CALENDAR</a>
								</div>
						
						
							</div>
							{/* <!-- location-wrapper - end --> */}

							

							
						</div>
					</div>
					{/* <!-- sidebar-section - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- event-details-section - end
		================================================== --> */}

    </div>
  )
}

export default EventDetailes