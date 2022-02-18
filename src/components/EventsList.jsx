import React from 'react'

function EventsList() {
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
									<span className="sub-title">harmoni events</span>
									<h2 className="big-title">harmoni <strong>event</strong></h2>
								</div>
								{/* <!-- breadcrumb-title - end --> */}

								{/* <!-- breadcrumb-list - start --> */}
								<div className="breadcrumb-list">
									<ul>
										<li className="breadcrumb-item"><a href="index-1.html" className="breadcrumb-link">Home</a></li>
										<li className="breadcrumb-item active" aria-current="page">event listing</li>
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





		{/* <!-- event-search-section - start */}
		{/* ================================================== --> */}
		<section id="event-search-section" className="event-search-section clearfix" style={{backgroundImage: 'url(assets/images/special-offer-bg.png)'}}>
			<div className="container">
				<div className="row">

					{/* <!-- section-title - start --> */}
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="section-title">
							<small className="sub-title">Find best event on Harmoni</small>
							<h2 className="big-title">event <strong>Search</strong></h2>
						</div>
					</div>
					{/* <!-- section-title - end --> */}

					{/* <!-- search-form - start --> */}
					<div className="col-lg-8 col-md-12 col-sm-12">
						<div className="search-form form-wrapper">
							<form action="#!">

								<ul>
									<li>
										<span className="title">event keyword</span>
										<div className="form-item">
											<input type="search" placeholder="Event name,location,etc"/>
										</div>
									</li>
									<li>
										<span className="title">event category</span>
										<select id="event-category-select">
											<option selected="">Conference</option>
											<option value="1">Option 1</option>
											<option value="2">Option 2</option>
											<option value="3">Option 3</option>
										</select>
									</li>
									<li>
										<button type="submit" className="submit-btn">search event now</button>
									</li>
								</ul>
								
							</form>
						</div>
					</div>
					{/* <!-- search-form - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- event-search-section - end */}
		{/* ================================================== --> */}





		{/* <!-- event-section - start */}
		{/* ================================================== --> */}
		<section id="event-section" className="event-section bg-gray-light sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- sidebar-section - start --> */}
					<div className="col-lg-3 col-md-12 col-sm-12">
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

								<h2 className="title-small default-color mb-30">Google Map Search</h2>

								<div id="google-map">
									<div id="googleMaps" className="google-map-container"></div>
								</div>

							</div>
							{/* <!-- map-wrapper - end --> */}

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

					{/* <!-- - start --> */}
					<div className="col-lg-9 col-md-12 col-sm-12">

						<div className="search-result-form">
							<form action="#!">
								<ul>

									<li>
										<span className="result-text">5 Search results from 20 events</span>
									</li>
									<li>
										<label for="year-select">Years:</label>
										<select id="year-select">
											<option selected="">2018</option>
											<option value="1">2019</option>
											<option value="2">2020</option>
											<option value="3">2021</option>
										</select>
									</li>
									<li>
										<label for="munth-select">Months:</label>
										<select id="munth-select">
											<option selected="">June</option>
											<option value="1">July</option>
											<option value="2">August</option>
										</select>
									</li>

								</ul>
							</form>

							<ul className="nav event-layout-btngroup">
								<li><a className="active" data-toggle="tab" href="#list-style"><i className="fas fa-th-list"></i></a></li>
								<li><a data-toggle="tab" href="#grid-style"><i className="fas fa-th"></i></a></li>
							</ul>
						</div>

						<div className="tab-content">
							<div id="list-style" className="tab-pane fade in active show">

								{/* <!-- event-item - start --> */}
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/event-1.jpg" alt="Image_not_found"/>
									</div>
									{/* <!-- event-image - end --> */}

									{/* <!-- event-content - start --> */}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona <strong>Food truck Festival 2018</strong>
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<p className="discription-text mb-30">
											Lorem ipsum dollor site amet the best  consectuer diam nerdistin adipiscing elites sed diam nonummy nibh the ebest uismod delgas tincidunt ut laoreet dolore magna...
										</p>
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>
													</span>
													<div className="info-content">
														<small>Speaker</small>
														<h3>jenny juis</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>2,250 seats</h3>
													</div>
												</li>
												<li>
													<a href="#!" className="tickets-details-btn">
														tickets & details
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- event-content - end --> */}

								</div>
								{/* <!-- event-item - end --> */}

								{/* <!-- event-item - start --> */}
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/event-2.jpg" alt="Image_not_found"/>
									</div>
									{/* <!-- event-image - end --> */}

									{/* <!-- event-content - start --> */}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona <strong>Food truck Festival 2018</strong>
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<p className="discription-text mb-30">
											Lorem ipsum dollor site amet the best  consectuer diam nerdistin adipiscing elites sed diam nonummy nibh the ebest uismod delgas tincidunt ut laoreet dolore magna...
										</p>
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>
													</span>
													<div className="info-content">
														<small>Speaker</small>
														<h3>jenny juis</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>2,250 seats</h3>
													</div>
												</li>
												<li>
													<a href="#!" className="tickets-details-btn">
														tickets & details
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- event-content - end --> */}

								</div>
								{/* <!-- event-item - end --> */}

								{/* <!-- event-item - start --> */}
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/event-3.jpg" alt="Image_not_found"/>
									</div>
									{/* <!-- event-image - end --> */}

									{/* <!-- event-content - start --> */}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona <strong>Food truck Festival 2018</strong>
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<p className="discription-text mb-30">
											Lorem ipsum dollor site amet the best  consectuer diam nerdistin adipiscing elites sed diam nonummy nibh the ebest uismod delgas tincidunt ut laoreet dolore magna...
										</p>
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>
													</span>
													<div className="info-content">
														<small>Speaker</small>
														<h3>jenny juis</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>2,250 seats</h3>
													</div>
												</li>
												<li>
													<a href="#!" className="tickets-details-btn">
														tickets & details
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- event-content - end --> */}

								</div>
								{/* <!-- event-item - end --> */}

								{/* <!-- event-item - start --> */}
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/event-4.jpg" alt="Image_not_found"/>
									</div>
									{/* <!-- event-image - end --> */}

									{/* <!-- event-content - start --> */}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona <strong>Food truck Festival 2018</strong>
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<p className="discription-text mb-30">
											Lorem ipsum dollor site amet the best  consectuer diam nerdistin adipiscing elites sed diam nonummy nibh the ebest uismod delgas tincidunt ut laoreet dolore magna...
										</p>
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>
													</span>
													<div className="info-content">
														<small>Speaker</small>
														<h3>jenny juis</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>2,250 seats</h3>
													</div>
												</li>
												<li>
													<a href="#!" className="tickets-details-btn">
														tickets & details
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- event-content - end --> */}

								</div>
								{/* <!-- event-item - end --> */}

								{/* <!-- event-item - start --> */}
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									<div className="event-image">
										<div className="post-date">
											<span className="date">26</span>
											<small className="month">june</small>
										</div>
										<img src="assets/images/event/event-5.jpg" alt="Image_not_found"/>
									</div>
									{/* <!-- event-image - end --> */}

									{/* <!-- event-content - start --> */}
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												Barcelona <strong>Food truck Festival 2018</strong>
											</h3>
											<span className="ticket-price yellow-color">Tickets from $52</span>
										</div>
										<p className="discription-text mb-30">
											Lorem ipsum dollor site amet the best  consectuer diam nerdistin adipiscing elites sed diam nonummy nibh the ebest uismod delgas tincidunt ut laoreet dolore magna...
										</p>
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>
													</span>
													<div className="info-content">
														<small>Speaker</small>
														<h3>jenny juis</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>2,250 seats</h3>
													</div>
												</li>
												<li>
													<a href="#!" className="tickets-details-btn">
														tickets & details
													</a>
												</li>
											</ul>
										</div>
									</div>
									{/* <!-- event-content - end --> */}

								</div>
								{/* <!-- event-item - end --> */}

								<div className="pagination ul-li clearfix">
									<ul>
										<li className="page-item prev-item">
											<a className="page-link" href="#!">Prev</a>
										</li>
										<li className="page-item"><a className="page-link" href="#!">01</a></li>
										<li className="page-item active"><a className="page-link" href="#!">02</a></li>
										<li className="page-item"><a className="page-link" href="#!">03</a></li>
										<li className="page-item"><a className="page-link" href="#!">04</a></li>
										<li className="page-item"><a className="page-link" href="#!">05</a></li>
										<li className="page-item next-item">
											<a className="page-link" href="#!">Next</a>
										</li>
									</ul>
								</div>

							</div>

							<div id="grid-style" className="tab-pane fade">
								<div className="row justify-content-center">

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/1.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- event-grid-item - start --> */}
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">26</span>
													<small className="month">june</small>
												</div>
												<img src="assets/images/event/2.event-grid.jpg" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
														Barcelona Food Truck Festival 2018-2019
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
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									{/* <!-- event-grid-item - end --> */}

									{/* <!-- pagination - start --> */}
									<div className="pagination ul-li clearfix">
										<ul>
											<li className="page-item prev-item">
												<a className="page-link" href="#!">Prev</a>
											</li>
											<li className="page-item"><a className="page-link" href="#!">01</a></li>
											<li className="page-item active"><a className="page-link" href="#!">02</a></li>
											<li className="page-item"><a className="page-link" href="#!">03</a></li>
											<li className="page-item"><a className="page-link" href="#!">04</a></li>
											<li className="page-item"><a className="page-link" href="#!">05</a></li>
											<li className="page-item next-item">
												<a className="page-link" href="#!">Next</a>
											</li>
										</ul>
									</div>
									{/* <!-- pagination - end --> */}

								</div>
							</div>
						</div>

					</div>
					{/* <!-- - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- event-section - end */}
		{/* ================================================== --> */}
    </div>
  )
}

export default EventsList