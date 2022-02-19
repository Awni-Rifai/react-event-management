
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged,signOut} from "firebase/auth";



function App() {
  const navigate=useNavigate();
  const [loggedIn,setLoggedIn]=useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) setLoggedIn(true);
      else setLoggedIn(false);
    });

  },[])
  const logout=async()=>{

    await signOut(auth);
  }

  
  return (
    <div className="App">
     
      
      {window.location.pathname==='/'?<HeaderHome logout={logout} loggedIn={loggedIn}/>:<Header loggedIn={loggedIn} logout={logout} />}
        
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
      
    </div>
  );
}

export default App;
