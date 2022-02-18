import React from 'react'

function BreadCrumps() {
  return (
    <div>
        
		{/* <!-- breadcrumb-section - start
		================================================== --> */}
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
    </div>
  )
}

export default BreadCrumps