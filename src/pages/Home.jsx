import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import {Route, Routes} from "react-router-dom"


function Home()
{
   return (
    <div>
        < Header />
        <Note />
        
        < Footer />
    </div>
   );
}

export default Home;

