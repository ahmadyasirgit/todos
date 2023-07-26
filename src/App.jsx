import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
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
            <Route path="/counter" element={<Counter />}/>
        </Routes>
    // </Router>
    
   );
}

export default App;

