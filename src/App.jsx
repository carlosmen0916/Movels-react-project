import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar, Home } from "./pages";
import Help from "./pages/Help";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      mirror: true,
    });
    window.addEventListener("load", AOS.refresh);
    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);
  return (
    <div className="app">
      <BrowserRouter>      
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/home" element={<Home />} />     
            <Route path="/help" element={<Help />} />        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
