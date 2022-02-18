import React from 'react'

function OffersHome() {
  return (
    <div>
        
		{/* <!-- special-offer-section - start
		================================================== --> */}
		<section id="special-offer-section" className="special-offer-section clearfix" style={{backgroundImage: 'url(assets/images/special-offer-bg.png)'}}>
			<div className="container">
				<div className="row">

					{/* <!-- special-offer-content - start --> */}
					<div className="col-lg-9 col-md-12 col-sm-12">
						<div className="special-offer-content">
							<h2><strong>30%</strong> Off in June~July for <span>Birthday Events</span></h2>
							<p className="m-0">
								Contact us now and we will make your event unique & unforgettable
							</p>
						</div>
					</div>
					{/* <!-- special-offer-content - end --> */}

					{/* <!-- event-makeing-btn - start --> */}
					<div className="col-lg-3 col-md-12 col-sm-12">
						<div className="event-makeing-btn">
							<a href="#!">make an event now</a>
						</div>
					</div>
					{/* <!-- event-makeing-btn - end --> */}

				</div>
			</div>
		</section>
		{/* <!-- special-offer-section - end
		================================================== --> */}

    </div>
  )
}

export default OffersHome