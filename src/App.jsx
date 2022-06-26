import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx"
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error"
import './index.css'

const App= ()=>{

   return(
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="" element={<Error/>} />
            <Route path="" element={<Mh/>} />
        </Routes>
        </>
            )
}
 
export default App;
