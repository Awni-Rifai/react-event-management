import React, { useEffect } from 'react'
// import Header from './HomeSections/Header';
import Slider from './HomeSections/Slider';
import AboutHome from './HomeSections/AboutHome';
import EventExpertiseHome from './HomeSections/EventExpertiseHome';



function Home() {
  useEffect(()=>{
    window.scroll(0,-400);
    
    

  },[])
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
      
      
       {/* <EventGalleryHome/> */}
       <EventExpertiseHome/>
       <AboutHome/>
      
       {/* <EventsHome/> */}
      
      
    
    </div>
  )
}

export default Home