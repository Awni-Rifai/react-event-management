import React from 'react'
import BreadCrumps from './BreadCrumps'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from '../carouselOptions';
import { useEffect } from 'react';

function EventDetailes() {

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
										<li className="breadcrumb-item active" aria-current="page">Istanbul Wine Party 2018</li>
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
								<span className="tag-item">
									<i className="fas fa-bookmark"></i>
									Featured Event
								</span>
								<h2 className="event-title">Istanbul <strong>Wine Party 2018</strong></h2>
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
									<img src="assets/images/event/event-details-1.jpg" alt="Image_not_found"/>
								</div>
								<div className="item">
									<img src="assets/images/event/event-details-2.jpg" alt="Image_not_found"/>
								</div>
								<div className="item">
									<img src="assets/images/event/event-details-3.jpg" alt="Image_not_found"/>
								</div>
	</OwlCarousel>
								
							</div>

							<div className="event-info-list ul-li clearfix mb-50">
								<ul>
									<li>
										<span className="icon">
											<i className="far fa-calendar"></i>
										</span>
										<div className="event-content">
											<small className="event-title">Event Date</small>
											<h3 className="event-date">26 december 2018</h3>
										</div>
									</li>
									<li>
										<span className="icon">
											<i className="far fa-clock"></i>
										</span>
										<div className="event-content">
											<small className="event-title">Event Time</small>
											<h3 className="event-date">15:00PM ~ 22:00PM</h3>
										</div>
									</li>
									<li>
										<span className="icon">
											<i className="fas fa-map-marker-alt"></i>
										</span>
										<div className="event-content">
											<small className="event-title">Event Location</small>
											<h3 className="event-date">vanila hotal</h3>
										</div>
									</li>
								</ul>
							</div>

							<p className="black-color mb-30">
								Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
							</p>

							<p className="black-color m-0">
								Lorem ipsum dollor site amet the best  consectuer diam adipiscing elites sed diam nonummy nibh the euismod tincidunt ut laoreet dolore magna aliquam erat volutpat insignia the consectuer adipiscing elit. 
							</p>

						</div>
						{/* <!-- event-details - end --> */}

						{/* <!-- event-schedule - start --> */}
						<div className="event-schedule mb-80">

							<div className="section-title text-left mb-30">
								<h2 className="big-title">event <strong>schedule</strong></h2>
							</div>

							{/* <!-- schedule-wrapper - start --> */}
							<div className="schedule-wrapper">
								<ul className="nav schedule-date-menu">
									<li><a className="active" data-toggle="tab" href="#day1">Day 1 <small>26 December 2018</small></a></li>
									<li><a data-toggle="tab" href="#day2">Day 2 <small>26 December 2018</small></a></li>
									<li><a data-toggle="tab" href="#day3">Day 3 <small>26 December 2018</small></a></li>
								</ul>

								<div className="tab-content">
									{/* <!-- day 1 - start --> */}
									<div id="day1" className="tab-pane fade in active show">
										<ul className="nav hotal-menu">
											<li><a data-toggle="tab" href="#day1hall1"><i className="fas fa-arrow-circle-right"></i> vanila hall 1</a></li>
											<li><a className="active" data-toggle="tab" href="#day1hall2"><i className="fas fa-arrow-circle-right"></i> vanila hall 2</a></li>
											<li><a data-toggle="tab" href="#day1hall3"><i className="fas fa-arrow-circle-right"></i> vanila hall 3</a></li>
											<li><a data-toggle="tab" href="#day1hall4"><i className="fas fa-arrow-circle-right"></i> vanila hall 4</a></li>
										</ul>
										<div className="tab-content">
											<div id="day1hall1" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day1hall2" className="tab-pane fade in active show">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">03. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day1hall3" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day1hall4" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- day 1 - end --> */}

									{/* <!-- day 2 - start --> */}
									<div id="day2" className="tab-pane fade">
										<ul className="nav hotal-menu">
											<li><a className="active" data-toggle="tab" href="#day2hall1"><i className="fas fa-arrow-circle-right"></i> vanila hall 1</a></li>
											<li><a data-toggle="tab" href="#day2hall2"><i className="fas fa-arrow-circle-right"></i> vanila hall 2</a></li>
											<li><a data-toggle="tab" href="#day2hall3"><i className="fas fa-arrow-circle-right"></i> vanila hall 3</a></li>
											<li><a data-toggle="tab" href="#day2hall4"><i className="fas fa-arrow-circle-right"></i> vanila hall 4</a></li>
										</ul>
										<div className="tab-content">
											<div id="day2hall1" className="tab-pane fade in active show">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day2hall2" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">03. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day2hall3" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day2hall4" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- day 2 - end --> */}

									{/* <!-- day 3 - start --> */}
									<div id="day3" className="tab-pane fade">
										<ul className="nav hotal-menu">
											<li><a data-toggle="tab" href="#day3hall1"><i className="fas fa-arrow-circle-right"></i> vanila hall 1</a></li>
											<li><a data-toggle="tab" href="#day3hall2"><i className="fas fa-arrow-circle-right"></i> vanila hall 2</a></li>
											<li><a className="active" data-toggle="tab" href="#day3hall3"><i className="fas fa-arrow-circle-right"></i> vanila hall 3</a></li>
											<li><a data-toggle="tab" href="#day3hall4"><i className="fas fa-arrow-circle-right"></i> vanila hall 4</a></li>
										</ul>
										<div className="tab-content">
											<div id="day3hall1" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day3hall2" className="tab-pane fade in active show">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. Greeting <strong>Welcome</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">03. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day3hall3" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>

											<div id="day3hall4" className="tab-pane fade">
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/2.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">01. learn <strong>drink wine</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="hall-item clearfix">
													<div className="hall-image">
														<img src="assets/images/event/1.hall.png" alt="Image_not_found"/>
													</div>
													<div className="hall-content">
														<h3 className="event-title title-large mb-15">02. say <strong>goodbye</strong></h3>
														<p className="mb-30 black-color">
															Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore magna aliquam erat volutpat guild insignia the consectuer adipiscing elit. 
														</p>
														<div className="event-info-list ul-li clearfix">
															<ul>
																<li>
																	<span className="icon">
																		<i className="fas fa-microphone"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Speaker</small>
																		<h3 className="event-date">jenny juis</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="fas fa-ticket-alt"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Max Seats</small>
																		<h3 className="event-date">2,250 seats</h3>
																	</div>
																</li>
																<li>
																	<span className="icon">
																		<i className="far fa-clock"></i>
																	</span>
																	<div className="event-content">
																		<small className="event-title">Event Time</small>
																		<h3 className="event-date">15~16pm</h3>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <!-- day 3 - end --> */}
								</div>
							</div>
							{/* <!-- schedule-wrapper - end --> */}

						</div>
						{/* <!-- event-schedule - end --> */}

						{/* <!-- event-pricing-plan - start --> */}
						<div className="event-pricing-plan mb-80 clearfix">

							<div className="section-title text-left mb-50">
								<span className="line-style"></span>
								<h2 className="big-title">Event <strong>Pricing Plans</strong></h2>
							</div>

							<div className="pricing-list ul-li clearfix">
								<ul>

									<li className="pricing-table">
										<div className="pricing-header clearfix">
											<span className="amount">$19</span>
											<h3 className="pricing-table-title">standart</h3>
										</div>

										<div className="pricing-body clearfix">
											<ul>

												<li className="item-off">1-4 Person</li>
												<li className="item-off">2 Outfits</li>
												<li className="item-off">45 Minutes</li>
												<li className="item-on">10 Digital images</li>
												<li className="item-on">Print Release</li>
												<li className="item-on">Custom Album</li>

											</ul>
										</div>

										<div className="pricing-footer clearfix">
											<a href="#!" className="custom-btn">get this</a>
										</div>
									</li>

									<li className="pricing-table popular-pricing-table">
										<span className="popularity-sign">best choice</span>
										<div className="pricing-header clearfix">
											<span className="amount">$59</span>
											<h3 className="pricing-table-title">professional</h3>
										</div>

										<div className="pricing-body clearfix">
											<ul>

												<li className="item-off">1-4 Person</li>
												<li className="item-off">2 Outfits</li>
												<li className="item-off">45 Minutes</li>
												<li className="item-on">10 Digital images</li>
												<li className="item-on">Print Release</li>
												<li className="item-on">Custom Album</li>

											</ul>
										</div>

										<div className="pricing-footer clearfix">
											<a href="#!" className="custom-btn">get this</a>
										</div>
									</li>

									<li className="pricing-table">
										<div className="pricing-header clearfix">
											<span className="amount">$99</span>
											<h3 className="pricing-table-title">enterprise</h3>
										</div>

										<div className="pricing-body clearfix">
											<ul>

												<li className="item-off">1-4 Person</li>
												<li className="item-off">2 Outfits</li>
												<li className="item-off">45 Minutes</li>
												<li className="item-on">10 Digital images</li>
												<li className="item-on">Print Release</li>
												<li className="item-on">Custom Album</li>

											</ul>
										</div>

										<div className="pricing-footer clearfix">
											<a href="#!" className="custom-btn">get this</a>
										</div>
									</li>
									
								</ul>
							</div>

						</div>
						{/* <!-- event-pricing-plan - end --> */}

						{/* <!-- register-wrapper - start --> */}
						<div className="register-wrapper mb-80 clearfix">

							<div className="section-title text-left mb-50">
								<span className="line-style"></span>
								<h2 className="big-title">register <strong>now</strong></h2>
							</div>

							<div className="register-table">
								<ul>
									<li className="rt-header">
										<div className="header-leftside-content">SUN, <strong>DEC 26, 2018,</strong> 15:00 PM – THU, <strong>DEC 28, 2018,</strong> 10:00 PM</div>
										<div className="header-rightside-content">Sales end on December 31</div>
									</li>
									<li className="rt-body">
										<div className="rt-body-item">
											<div className="leftside-content">
												<h3 className="ticket-title">Harmoni Package 1</h3>
												<span className="ticket-price">$120.00 + FEE $5.00</span>
											</div>
											<div className="rightside-content">
												<div className="ticket-select">
													<select id="ticket-select1">
														<option selected>0 TICKET</option>
														<option value="1">1 TICKET</option>
														<option value="2">2 TICKET</option>
														<option value="3">3 TICKET</option>
													</select>
												</div>
											</div>
										</div>

										<div className="rt-body-item">
											<div className="leftside-content">
												<h3 className="ticket-title">Harmoni Package 2</h3>
												<span className="ticket-price">$120.00 + FEE $5.00</span>
											</div>
											<div className="rightside-content">
												<div className="ticket-select">
													<select id="ticket-select2">
														<option selected>0 TICKET</option>
														<option value="1">1 TICKET</option>
														<option value="2">2 TICKET</option>
														<option value="3">3 TICKET</option>
													</select>
												</div>
											</div>
										</div>

										<div className="rt-body-item">
											<div className="leftside-content">
												<h3 className="ticket-title">Harmoni Package 3</h3>
												<span className="ticket-price">$120.00 + FEE $5.00</span>
											</div>
											<div className="rightside-content">
												<div className="ticket-select">
													<select id="ticket-select3">
														<option selected>0 TICKET</option>
														<option value="1">1 TICKET</option>
														<option value="2">2 TICKET</option>
														<option value="3">3 TICKET</option>
													</select>
												</div>
											</div>
										</div>
									</li>
									<li className="rt-footer">
										<div className="footer-leftside-content">
											<span className="payment-card">
												<img src="assets/images/payment-cards.png" alt="payment_cards_not_found"/>
											</span>
											<span className="total-price">TOTAL PRICE :  $570.00</span>
										</div>
										<div className="footer-rightside-content">
											<a href="#!" className="custom-btn">order now</a>
										</div>
									</li>
								</ul>
							</div>

						</div>
						{/* <!-- register-wrapper - end --> */}

						{/* <!-- reviewer-comment-wrapper - start --> */}
						<div className="reviewer-comment-wrapper mb-30 clearfix">

							<div className="section-title text-left mb-50">
								<h2 className="big-title">Event <strong>reviews</strong></h2>
							</div>

							<div className="comment-bar clearfix">
								<div className="admin-image">
									<img src="assets/images/admin.png" alt="Image_not_found"/>
								</div>
								<div className="comment-content">
									<div className="admin-name mb-15">
										<div className="rateing-star ul-li clearfix">
											<ul>
												<li className="rated"><i className="fas fa-star"></i></li>
												<li className="rated"><i className="fas fa-star"></i></li>
												<li className="rated"><i className="fas fa-star"></i></li>
												<li className="rated"><i className="fas fa-star"></i></li>
												<li className="rated"><i className="fas fa-star"></i></li>
											</ul>
										</div>
										<div className="name">
											<a href="#!">john doe</a>
										</div>
									</div>
									<div className="comment-text">
										<p className="mb-30">
											Brilliant production.  Enjoyed this as it captured so many emotions and being Irish some bits resonated with Irish families, the craic, singing.  Fantastic acting and so many surprises.
										</p>

										<div className="meta-wrapper">
											<div className="btn-group-left float-left">
												<span className="title"><i className="fas fa-heart"></i> Helpful?</span>
												<ul>
													<li><button type="button">Yes</button></li>
													<li><button type="button">No</button></li>
												</ul>
											</div>
											<div className="btn-group-right float-right">
												<ul>
													<li><button type="button"><i className="fas fa-reply-all"></i> Replay</button></li>
													<li><button type="button"><i className="fas fa-share-square"></i> Share</button></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						{/* <!-- reviewer-comment-wrapper - end --> */}

						<div className="pagination ul-li clearfix mb-80">
							<ul>
								<li className="page-item prev-item">
									<a className="page-link" href="#">Prev</a>
								</li>
								<li className="page-item"><a className="page-link" href="#">01</a></li>
								<li className="page-item active"><a className="page-link" href="#">02</a></li>
								<li className="page-item"><a className="page-link" href="#">03</a></li>
								<li className="page-item"><a className="page-link" href="#">04</a></li>
								<li className="page-item"><a className="page-link" href="#">05</a></li>
								<li className="page-item next-item">
									<a className="page-link" href="#">Next</a>
								</li>
							</ul>
						</div>

						{/* <!-- comment-form - start --> */}
						<div className="comment-form clearfix">

							<div className="section-title text-left mb-50">
								<h2 className="big-title">write a <strong>comment</strong></h2>

								<div className="rateing-star-wrapper">
									<span className="rating-title float-left">Your Rating:</span>
									<div className="rateing-star-form float-right">
										<form action="#">

											<div className="form-check clearfix">
												<input type="checkbox"/>
											</div>
											<div className="form-check clearfix">
												<input type="checkbox"/>
											</div>
											<div className="form-check clearfix">
												<input type="checkbox"/>
											</div>
											<div className="form-check clearfix">
												<input type="checkbox"/>
											</div>
											<div className="form-check clearfix">
												<input type="checkbox"/>
											</div>

										</form>
									</div>
								</div>

							</div>

							<div className="form-wrapper">
								<form action="https://jthemes.net/themes/html/harmony-event/contact.php">
									<div className="row">

										{/* <!-- form-item - start --> */}
										<div className="col-lg-4 col-md-6 col-sm-12">
											<div className="form-item mb-30">
												<input type="text" name="name" placeholder="Your Name" required/>
											</div>
										</div>
										{/* <!-- form-item - end --> */}

										{/* <!-- form-item - start --> */}
										<div className="col-lg-4 col-md-6 col-sm-12">
											<div className="form-item mb-30">
												<input type="email" name="email" placeholder="Your Email Address" required/>
											</div>
										</div>
										{/* <!-- form-item - end --> */}

										{/* <!-- form-item - start --> */}
										<div className="col-lg-4 col-md-12 col-sm-12">
											<div className="form-item mb-30">
												<input type="tel" name="phone" placeholder="Your Phone" required/>
											</div>
										</div>
										{/* <!-- form-item - end --> */}

										{/* <!-- form-item - start --> */}
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="mb-30">
												<textarea name="message" placeholder="Your Comment" required></textarea>
											</div>
											<button type="submit" className="custom-btn">SUBMIT NOW</button>
										</div>
										{/* <!-- form-item - end --> */}

									</div>
								</form>
							</div>

						</div>
						{/* <!-- comment-form - end --> */}

					</div>
					{/* <!-- col - event-details - end --> */}

					{/* <!-- sidebar-section - start --> */}
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="sidebar-section">

							{/* <!-- Add to Calendar - start --> */}
							<div title="Add to Calendar" className="addeventatc">
								Add to Calendar
								<span className="start">06/18/2015 09:00 AM</span>
								<span className="end">06/18/2015 11:00 AM</span>
								<span className="timezone">Europe/Paris</span>
								<span className="title">Summary of the event</span>
								<span className="description">Description of the event</span>
								<span className="location">Location of the event</span>
								<span className="organizer">Organizer</span>
								<span className="organizer_email">Organizer e-mail</span>
								<span className="all_day_event">false</span>
								<span className="date_format">MM/DD/YYYY</span>
							</div>
							{/* <!-- Add to Calendar - end --> */}

							{/* <!-- map-wrapper - start --> */}
							<div className="map-wrapper mb-30">

								{/* <!-- section-title - start --> */}
								<div className="section-title mb-30">
									<h2 className="big-title">event <strong>location</strong></h2>
								</div>
								{/* <!-- section-title - end --> */}

								<div id="google-map">
									<div id="googleMaps" className="google-map-container"></div>
								</div>

							</div>
							{/* <!-- map-wrapper - end --> */}

							{/* <!-- location-wrapper - start --> */}
							<div className="location-wrapper mb-30">
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

							{/* <!-- faq-wrapper - start --> */}
							<div className="faq-wrapper mb-30">

								{/* <!-- section-title - start --> */}
								<div className="section-title mb-30">
									<h2 className="big-title">event <strong>FAQ</strong></h2>
								</div>
								{/* <!-- section-title - end --> */}

								<div id="faq-accordion" className="faq-accordion">
									<div className="card">
										<div className="card-header" id="headingone">
											<button className="btn btn-link" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
												How to join this event?
											</button>
										</div>

										<div id="collapseone" className="collapse show" aria-labelledby="headingone" data-parent="#faq-accordion">
											<div className="card-body">
												Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingtwo">
											<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
												How to make new event?
											</button>
										</div>
										<div id="collapsetwo" className="collapse" aria-labelledby="headingtwo" data-parent="#faq-accordion">
											<div className="card-body">
												Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingthree">
											<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
												Lorem ipsm dolor sit amet?
											</button>
										</div>
										<div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#faq-accordion">
											<div className="card-body">
												Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingfour">
											<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
												Consectuerer set diam?
											</button>
										</div>
										<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#faq-accordion">
											<div className="card-body">
												Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingfive">
											<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
												Volutpat laoret nonummy?
											</button>
										</div>
										<div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#faq-accordion">
											<div className="card-body">
												Lorem ipsum dollor site amet the best  consectuer diam nerd adipiscing elites sed diam nonummy nibh the ebest uismod tincidunt ut laoreet dolore.
											</div>
										</div>
									</div>
								</div>
								
							</div>
							{/* <!-- faq-wrapper - end --> */}

							{/* <!-- spacial-event-wrapper - start --> */}
							<div className="spacial-event-wrapper text-center" style={{backgroundImage: 'url(assets/images/spacial-event-bg.jpg)'}}>
								<div className="overlay-black">
									<p className="sub-title white-color mb-30">26 DECEMBER 2018</p>
									<h2 className="title-large white-color mb-30">
										AMSTERDAM
										<strong className="yellow-color">PHP CONFERENCE</strong>
									</h2>
									<a href="#!" className="custom-btn">booking ticket</a>
								</div>
							</div>
							{/* <!-- spacial-event-wrapper - end --> */}
							
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