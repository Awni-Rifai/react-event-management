import React from 'react'

function MapHome() {
  return (
    <div>
        	{/* <!-- google map - start */}
		{/* ================================================== --> */}
		<section id="map-section" className="map-section clearfix">
			<div className="address-wrapper">

				{/* <!-- address-info-topbar - start --> */}
				<div className="address-info-topbar mb-30 clearfix">
					<div className="address-info-left">
						<h3 className="title-text">harmoni event management</h3>
						<p className="m-0">
							Apple Store, 112 Prince St New York,
							NY 10012, United States 80361,
							United States
						</p>
					</div>

					<div className="address-info-right">
						<ul>
							<li>
								<button type="button">
									<span className="icon"><i className="fas fa-street-view"></i></span>
									<small>Direction</small>
								</button>
							</li>
							<li>
								<button type="button">
									<span className="icon"><i className="fas fa-rss"></i></span>
									<small>Save</small>
								</button>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- address-info-topbar - end --> */}

				{/* <!-- address-info-bottombar - start --> */}
				<div className="address-info-bottombar clearfix">
					<div className="address-info-left">
						<div className="rating-star">
							<span className="rating-point">4.5</span>
							<ul>
								<li><i className="fas fa-star"></i></li>
								<li><i className="fas fa-star"></i></li>
								<li><i className="fas fa-star"></i></li>
								<li><i className="fas fa-star"></i></li>
								<li><i className="fas fa-star-half"></i></li>
							</ul>
						</div>
						<p className="m-0">105 reviews</p>
					</div>

					<div className="address-info-right">
						<button type="button" className="map-larger-btn">
							view larger map
						</button>
					</div>
				</div>
				{/* <!-- address-info-bottombar - end --> */}
					
			</div>
			<div id="google-map">
				<div id="googleMaps" className="google-map-container"></div>
			</div>
		</section>
		{/* <!-- google map - end
		================================================== --> */}
    </div>
  )
}

export default MapHome