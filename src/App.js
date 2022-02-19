
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import EventDetailes from "./components/EventDetailes";
import EventsList from "./components/EventsList";
import Booking from "./components/Booking";
import About from "./components/About";
import  HeaderHome from "./components/HomeSections/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";



function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      
      {window.location.pathname==='/'?<HeaderHome loggedIn={loggedIn}/>:<Header loggedIn={loggedIn} />}
        
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
    
        <Route path="/details" element={<EventDetailes/>}/>
        <Route path="/List" element={<EventsList/>}/>
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/About" element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
