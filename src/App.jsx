import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
// import {Route, Routes} from "react-router-dom"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App()
{
   return (

    // <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/home" element={<Home />}/> */}
            <Route path="/login" element={<Login />}/>
            <Route path="/About" element={<About />}/>
        </Routes>
    // </Router>
    
   );
}

export default App;

