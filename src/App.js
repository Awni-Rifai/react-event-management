
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import EventDetailes from "./components/EventDetailes";
import EventsList from "./components/EventsList";
import Booking from "./components/Booking";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} forceRefresh={true} />
        <Route path="/detailes" element={<EventDetailes/>} forceRefresh={true} />
        <Route path="/List" element={<EventsList/>} forceRefresh={true} />
        <Route path="/Booking" element={<Booking/>} forceRefresh={true} />
        <Route path="/About" element={<About/>} forceRefresh={true} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
