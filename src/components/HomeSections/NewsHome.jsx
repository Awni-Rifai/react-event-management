import React from 'react'

function NewsHome() {
  return (
    <div>
        	{/* <!-- news-update-section - start
		================================================== --> */}
		<section id="news-update-section" className="news-update-section sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- faq-accordion - start --> */}
					<div className="col-lg-6 col-md-12 col-sm-12">
						{/* <!-- section-title - start --> */}
						<div className="section-title mb-30">
							<span className="line-style"></span>
							<small className="sub-title">find your answer</small>
							<h2 className="big-title">ask & <strong>questions</strong></h2>
						</div>
						{/* <!-- section-title - end --> */}
						<div id="faq-accordion" className="faq-accordion">

							<div className="card">
								<div className="card-header" id="headingone">
									<button className="btn collapsed" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
										<span>01.</span> How to join Harmoni Event Management?
									</button>
								</div>

								<div id="collapseone" className="collapse" aria-labelledby="headingone" data-parent="#faq-accordion">
									<div className="card-body">
										<h3>answer</h3>
										Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="headingtwo">
									<button className="btn" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
										<span>02.</span> How to make my own event?
									</button>
								</div>
								<div id="collapsetwo" className="collapse show" aria-labelledby="headingtwo" data-parent="#faq-accordion">
									<div className="card-body">
										<h3>answer</h3>
										Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="headingthree">
									<button className="btn collapsed" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
										<span>03.</span> About the price to make new event?
									</button>
								</div>
								<div id="collapsethree" className="collapse" aria-labelledby="headingthree" data-parent="#faq-accordion">
									<div className="card-body">
										<h3>answer</h3>
										Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="headingfour">
									<button className="btn collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
										<span>04.</span> About the price to make new event?
									</button>
								</div>
								<div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#faq-accordion">
									<div className="card-body">
										<h3>answer</h3>
										Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</div>
								</div>
							</div>

						</div>
					</div>
					{/* <!-- faq-accordion - end --> */}

					{/* <!-- latest-blog-wrapper - start --> */}
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="latest-blog-wrapper">

							{/* <!-- section-title - start --> */}
							<div className="section-title mb-30">
								<span className="line-style"></span>
								<small className="sub-title">our blog</small>
								<h2 className="big-title">latest <strong>news</strong></h2>
							</div>
							{/* <!-- section-title - end --> */}

							{/* <!-- latest-blog - start --> */}
							<div className="latest-blog clearfix">
								<div className="blog-image">
									<img src="assets/images/blog/1.latest-blog.jpg" alt="Image_not_found"/>
									<a href="#!" className="plus-effect"></a>
								</div>
								<div className="blog-content">
									<div className="blog-title mb-30">
										<h3>Barcelona Friday Food Truck Festival 26 Mei 2019</h3>
										<span>26 June 2018</span>
									</div>
									<p className="m-0">
										Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</p>
								</div>
							</div>
							{/* <!-- latest-blog - end --> */}

							{/* <!-- latest-blog - start --> */}
							<div className="latest-blog clearfix">
								<div className="blog-image">
									<img src="assets/images/blog/1.latest-blog.jpg" alt="Image_not_found"/>
									<a href="#!" className="plus-effect"></a>
								</div>
								<div className="blog-content">
									<div className="blog-title mb-30">
										<h3>Barcelona Friday Food Truck Festival 26 Mei 2019</h3>
										<span>26 June 2018</span>
									</div>
									<p className="m-0">
										Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet.
									</p>
								</div>
							</div>
							{/* <!-- latest-blog - end --> */}

						</div>
					</div>
					{/* <!-- latest-blog-wrapper - end --> */}
					
				</div>
			</div>
		</section>
		{/* <!-- news-update-section - end
		================================================== --> */}
    </div>
  )
}

export default NewsHome