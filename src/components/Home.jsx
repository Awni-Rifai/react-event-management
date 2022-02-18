import React from 'react'
// import Header from './HomeSections/Header';
import Slider from './HomeSections/Slider';
import EventAdvertisement from './HomeSections/EventAdvertisement';
import AboutHome from './HomeSections/AboutHome';
import EventGalleryHome from './HomeSections/EventGalleryHome';
import EventExpertiseHome from './HomeSections/EventExpertiseHome';
import SpeakerHome from './HomeSections/SpeakerHome';
import TestoHome from './HomeSections/TestoHome';
import OffersHome from './HomeSections/OffersHome';
import EventsHome from './HomeSections/EventsHome';
import NewsHome from './HomeSections/NewsHome';
import SponserHome from './HomeSections/SponserHome';
import MapHome from './HomeSections/MapHome';
function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Slider/>
       <EventAdvertisement/>
       <AboutHome/>
       <EventGalleryHome/>
       <EventExpertiseHome/>
       <SpeakerHome/>
       <TestoHome/>
       <OffersHome/>
       <EventsHome/>
       <NewsHome/>
       <SponserHome/>
       <MapHome/>
    </div>
  )
}

export default Home