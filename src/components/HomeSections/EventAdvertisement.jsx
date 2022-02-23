import React,{ useState,useEffect, Fragment } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function EventAdvertisement() {
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

  return (
    <div>
        {/* <!-- event-advertisement-section - start */}
		{/* ================================================== --> */}
		<section id="event-advertisement-section" className="event-advertisement-section clearfix" >
			
				
		</section>
		{/* <!-- event-advertisement-section - end */}
		{/* ================================================== --> */}

    </div>
  )
}

export default EventAdvertisement