import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from '../../carouselOptions';

function TestoHome() {
  return (
    <div>
        	{/* <!-- testimonial5-section - start */}
		{/* ================================================== --> */}
		<section id="testimonial5-section" className="testimonial5-section clearfix">
		<OwlCarousel
 items={1}
 className="owl-theme"
 loop
 margin={10}
 nav
 {...{...options,autoplay:true}}
 
>
<div className="item text-center">
								<span className="quote-icon">
									<i className="fas fa-quote-right"></i>
								</span>
								<p className="clients-comment">
									“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”
								</p>
								<div className="client-info">
									<h3 className="client-name">Jenni Hernandes</h3>
									<span className="client-sub-title">Graphic Designer</span>
								</div>
							</div>

							<div className="item text-center">
								<span className="quote-icon">
									<i className="fas fa-quote-right"></i>
								</span>
								<p className="clients-comment">
									“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”
								</p>
								<div className="client-info">
									<h3 className="client-name">Jenni Hernandes</h3>
									<span className="client-sub-title">Graphic Designer</span>
								</div>
							</div>

							<div className="item text-center">
								<span className="quote-icon">
									<i className="fas fa-quote-right"></i>
								</span>
								<p className="clients-comment">
									“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”
								</p>
								<div className="client-info">
									<h3 className="client-name">Jenni Hernandes</h3>
									<span className="client-sub-title">Graphic Designer</span>
								</div>
							</div>

							<div className="item text-center">
								<span className="quote-icon">
									<i className="fas fa-quote-right"></i>
								</span>
								<p className="clients-comment">
									“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”
								</p>
								<div className="client-info">
									<h3 className="client-name">Jenni Hernandes</h3>
									<span className="client-sub-title">Graphic Designer</span>
								</div>
							</div>
	</OwlCarousel>
			<div className="jarallax" style={{backgroundImage: 'url(assets/images/testimonial-bg.jpg)'}}>
				<div className="overlay-black sec-ptb-100">
					<div className="container">

						{/* <!-- testimonial5-carousel - start --> */}
						<div id="testimonial5-carousel" className="testimonial5-carousel owl-carousel owl-theme">

						

						</div>
						{/* <!-- testimonial5-carousel - end --> */}

					</div>
				</div>
			</div>
		</section>
		{/* <!-- testimonial5-section - end
		================================================== --> */}

    </div>
  )
}

export default TestoHome