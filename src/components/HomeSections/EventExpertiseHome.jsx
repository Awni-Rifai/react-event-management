import React,{ useState,useEffect, Fragment } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function EventExpertiseHome() {
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
        	{/* <!-- event-expertise-section - start */}
		{/* ================================================== --> */}
		<section id="event-expertise-section2" className="event-expertise-section2 bg-gray-light sec-ptb-100 clearfix">
			<div className="container">

				{/* <!-- section-title - start --> */}
				<div className="section-title text-center mb-50">
					{/* <small className="sub-title">our Events</small> */}
					<h2 className="big-title">harmony <strong>Events</strong></h2>
				</div>
				{/* <!-- secti/on-title - end --> */}

				<div className="row ">


				{data.map(item => (
				<Fragment>
        <div className="col-lg-3 col-md-6 col-sm-12">
						<div className="expertise-item">

							<div className="expertise-image">
								<img src={item.image} alt="Image_not_found"/>
								<Link  onClick={()=>goDetails(item.id)} to="/details" className="plus-effect"></Link>
							</div>

							<div className="expertise-content">
								<h3 className="title">Wedding Party</h3>
								<p>Start from <strong>$1.200-$2.000</strong></p>
								<a href="#!" className="link-btn">
									<i className="fas fa-arrow-circle-right"></i>
								</a>
							</div>

						</div>
					</div>
		</Fragment>
				))}	
					{/* <!-- expertise-item - start --> */}
					
					{/* <!-- expertise-item - end --> */}

			
					

					
				

				


				</div>
				<div className="text-center">
            <Link to="/List" className="custom-btn">view all gallery</Link>
        </div>
			</div>
		</section>
		{/* <!-- event-expertise-section - end */}
		{/* ================================================== --> */}

    </div>
  )
}

export default EventExpertiseHome