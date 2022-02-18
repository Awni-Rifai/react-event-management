import React from 'react'

function EventAdvertisement() {
  return (
    <div>
        {/* <!-- event-advertisement-section - start */}
		{/* ================================================== --> */}
		<section id="event-advertisement-section" className="event-advertisement-section clearfix" style={{backgroundImage: "url(assets/images/special-offer-bg.png)"}}>
			<div className="container">
				<div className="row">

					{/* <!-- event-item - start --> */}
					<div className="col-lg-7 col-md-12 col-sm-12">
						<div className="event-item">

							<div className="event-image">
								<img src="assets/images/event/2.jpg" alt="Image_not_found"/>
								<a href="#!" className="plus-effect"></a>
							</div>

							<div className="event-content">
								<div className="event-title">
									<span className="tag">
										<i className="fas fa-bookmark"></i>
										Featured Event
									</span>
									<h3 className="title-text">Barcelona <strong>Food truck Festival</strong></h3>
									<small className="ticket-price">Tickets start from $52.00</small>
								</div>
								<div className="event-info ul-li-block">
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
											Barcelona, Spain
										</li>
										
									</ul>
								</div>
							</div>

						</div>
					</div>
					{/* <!-- event-item - end --> */}

					{/* <!-- right-content-wrapper - start --> */}
					<div className="col-lg-5 col-md-12 col-sm-12">
						<div className="right-content-wrapper">

							<div className="countdown-timer mb-30">
								<ul className="countdown-list" data-countdown="2020/08/08"></ul>
							</div>

							<div className="text-right">
								<a href="#!" className="booking-btn">booking ticket</a>
								<a href="#!" className="details-btn">tickets & details</a>
							</div>
							
						</div>
					</div>
					{/* <!-- right-content-wrapper - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- event-advertisement-section - end */}
		{/* ================================================== --> */}

    </div>
  )
}

export default EventAdvertisement