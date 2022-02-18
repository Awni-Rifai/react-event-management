import React from 'react'

function EventsHome() {
  return (
    <div>
{/*         
		<!-- event-section - start
		================================================== --> */}
		<section id="event-section" className="event-section sec-ptb-100 bg-gray-light clearfix">
			<div className="container">

				<div className="mb-50">
					<div className="row">

						{/* <!-- section-title - start --> */}
						<div className="col-lg-3 col-md-12 col-sm-12">
							<div className="section-title text-left">
								<span className="line-style"></span>
								<small className="sub-title">harmoni events</small>
								<h2 className="big-title"><strong>event</strong> listing</h2>
							</div>
						</div>
						{/* <!-- section-title - end --> */}

						{/* <!-- event-tab-menu - start --> */}
						<div className="col-lg-8 col-md-12 col-sm-12">
							<div className="event-tab-menu clearfix">
								<ul className="nav">
									<li>
										<a data-toggle="tab" href="#conference-event">
											<strong><i className="fas fa-microphone"></i> conference</strong> event
										</a>
									</li>
									<li>
										<a data-toggle="tab" href="#playground-event">
											<strong><i className="fas fa-birthday-cake"></i> play ground</strong> event
										</a>
									</li>
									<li>
										<a className="active" data-toggle="tab" href="#musical-event">
											<strong><i className="fas fa-music"></i> musical</strong> event
										</a>
									</li>
									<li>
										<a data-toggle="tab" href="#other-event">
											<strong><i className="far fa-check-square"></i> other</strong> event
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* <!-- event-tab-menu - end --> */}

					</div>
				</div>

				{/* <!-- tab-content - start --> */}
				<div className="tab-content">

					{/* <!-- conference-event - start --> */}
					<div id="conference-event" className="tab-pane fade">
						<div className="row">

							{/* {/*<!-- event-item - start -->*/} 
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/* {/*<!-- event-image - start -->*/} 
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/* {/*<!-- event-image - end -->*/} 

									{/* {/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/* {/*<!-- event-content - end -->*/} 

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/3.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/4.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/5.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/6.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="pagination ul-li clearfix">
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
							</div>

						</div>
					</div>
					{/*<!-- conference-event - end -->*/}

					{/*<!-- playground-event - start -->*/}
					<div id="playground-event" className="tab-pane fade">
						<div className="row">

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/7.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/8.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/3.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/4.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="pagination ul-li clearfix">
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
							</div>

						</div>
					</div>
					{/* <!-- playground-event - end --> */}

					{/* <!-- musical-event - start --> */}
					<div id="musical-event" className="tab-pane fade in active show">
						<div className="row">

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/5.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/6.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/7.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/8.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="pagination ul-li clearfix">
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
							</div>

						</div>
					</div>
					{/* <!-- musical-event - end --> */}

					{/* <!-- other-event - start --> */}
					<div id="other-event" className="tab-pane fade">
						<div className="row">

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/3.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/4.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/5.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/6.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/7.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							{/*<!-- event-item - start -->*/}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="event-item2 clearfix">

									{/*<!-- event-image - start -->*/}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/8.event-grid.jpg" alt="Image_not_found"/>
									</div>
									{/*<!-- event-image - end -->*/}

									{/*<!-- event-content - start -->*/}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona Food truck Festival 2018
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<div className="event-post-meta ul-li-block mb-30">
											<ul>
												<li>
													<span className="icon">
														<i className="far fa-clock"></i>
													</span>
													Start 20:00pm - 22:00pm
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-map-marker-alt"></i>
													</span>
													Manhattan, New York
												</li>
											</ul>
										</div>
										<a href="#!" className="tickets-details-btn">
											tickets & details
										</a>
									</div>
									{/*<!-- event-content - end -->*/}

								</div>
							</div>
							{/*<!-- event-item - end -->*/}

							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="pagination ul-li clearfix">
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
							</div>

						</div>
					</div>
					{/* <!-- other-event - end --> */}

				</div>
				{/* <!-- tab-content - end --> */}

			</div>
		</section>
		{/* <!-- event-section - end
		================================================== --> */}

    </div>
  )
}

export default EventsHome