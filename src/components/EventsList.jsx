import React,{ useState,useEffect, Fragment } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function EventsList() {
	const [data, setData] = useState([])
  
	useEffect(() => {
	  const fetchData = async () =>{
	
		try {
		  const {data: response} = await axios.get('http://localhost/event_managments_mySql/event.php');
		  setData(response);

		} catch (error) {
		  console.error(error.message);
		}
	  }
  
	  fetchData();
	 
	}, []);

 const goDetails = (id)=>{
  localStorage.setItem('event_id',id);
 localStorage.setItem('events',JSON.stringify(data));
 

  console.log(localStorage.getItem('event_id'))
	}
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
										<li className="breadcrumb-item"><Link to="i/" className="breadcrumb-link">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Events </li>
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
		{/* <section id="event-search-section" 
		className="event-search-section clearfix" style={{backgroundImage: 'url(assets/images/special-offer-bg.png)'}}>
			<div className="container">
				<div className="row col-12"> */}

					{/* <!-- section-title - start --> */}
					{/* <div className="col-lg-4 col-md-12 col-sm-12">
						<div className="section-title">
							<small className="sub-title">Find best event on Harmoni</small>
							<h2 className="big-title">event <strong>Search</strong></h2>
						</div>
					</div> */}
					{/* <!-- section-title - end --> */}

					{/* <!-- search-form - start --> */}
					{/* <div className="col-lg-8 col-md-12 col-sm-12">
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
										<button type="submit" className="submit-btn">search event now</button>
									</li>
								</ul>
								
							</form>
						</div>
					</div> */}
					{/* <!-- search-form - end --> */}
{/* 					
				</div>
			</div>
		</section> */}
		{/* <!-- event-search-section - end */}
		{/* ================================================== --> */}





		{/* <!-- event-section - start */}
		{/* ================================================== --> */}
		<section id="event-section" className="event-section bg-gray-light sec-ptb-100 clearfix">
			<div className="container">
				<div className="row">

					{/* <!-- sidebar-section - start --> */}
				
					{/* <!-- sidebar-section - end --> */}

					{/* <!-- - start --> */}
					<div className="col-lg-12 col-md-12 col-sm-12">

						<div className="search-result-form">
						

							<ul className="nav event-layout-btngroup">
								<li><a className="active" data-toggle="tab" href="#list-style"><i className="fas fa-th-list"></i></a></li>
								<li><a data-toggle="tab" href="#grid-style"><i className="fas fa-th"></i></a></li>
							</ul>
						</div>

						<div className="tab-content">
							<div id="list-style" className="tab-pane fade in active show">
							

								{/* <!-- event-item - start --> */}
								{data.map(item => (
								<div className="event-list-item clearfix">

									{/* <!-- event-image - start --> */}
									
							<Fragment>
									<div className="event-image">
										<div className="post-date">
											<span className="date">{item.event_time.slice(0,3)}</span>
											<small className="month">{item.event_time.slice(3,6)}</small>
										</div>
										<img src={item.image} alt="Image_not_found"/>
									</div>
								
									<div className="event-content">
										<div className="event-title mb-15">
											<h3 className="title">
												 <strong><span>{item.name}</span></strong>
											</h3>
											<span className="ticket-price yellow-color"><span>${item.price}</span></span>
										</div>
										{/* <p className="discription-text mb-30">
							            {item.description}
										</p> */}
										<div className="event-info-list ul-li clearfix">
											<ul>
												<li>
													<span className="icon">
														<i className="fas fa-microphone"></i>,
													</span>
													<div className="info-content">
														<small> Hosted by :  </small>
														<h3>{item.speaker}</h3>
													</div>
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-ticket-alt"></i>
													</span>
													<div className="info-content">
														<small>Max Seats</small>
														<h3>{item.seat}</h3>
													</div>
												</li>
										
											</ul>
										
										</div>
										<div className='mt-3'>
										<Link onClick={()=>goDetails(item.id)} to="/details" className="tickets-details-btn">
													tickets & details
												</Link>
											</div>
									</div>
									</Fragment>

								

								</div>
								

								))}
								{/* <div className="pagination ul-li clearfix">
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
								</div> */}

							</div>

							<div id="grid-style" className="tab-pane fade">
								<div className="row justify-content-center">
								{data.map(item => (
									<div className="col-lg-6 col-md-6 col-sm-12">
										<div className="event-grid-item">
											{/* <!-- event-image - start --> */}
											<div className="event-image">
												<div className="post-date">
													<span className="date">{item.event_time.slice(0,3)}</span>
													<small className="month">{item.event_time.slice(3,6)}</small>
												</div>
												<img src={item.image} width="100%" alt="Image_not_found"/>
											</div>
											{/* <!-- event-image - end --> */}

											{/* <!-- event-content - start --> */}
											<div className="event-content">
												<div className="event-title mb-30">
													<h3 className="title">
													{item.name}
													</h3>
													<span className="ticket-price yellow-color">${item.price}</span>
												</div>
												<div className="event-post-meta ul-li-block mb-30">
													<ul>
														<li>
															<span className="icon">
																<i className="far fa-clock"></i>
															</span>
															{item.start_time} - {item.end_time}
														</li>
													
														<li>
															<span className="icon">
																<i className="fas fa-map-marker-alt"></i>
															</span>
															{item.city}
														</li>
														<li>
															<span className="icon">
																<i className="fas fa-map-marker-alt"></i>
															</span>
															{item.location}
														</li>
													</ul>
												</div>
												<Link onClick={()=>goDetails(item.id)} to="/details" className="tickets-details-btn">
													tickets & details
												</Link>
											</div>
											{/* <!-- event-content - end --> */}
										</div>
									</div>
									))}
									

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