import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import Cards from "../components/Cards";
import {Route, Routes} from "react-router-dom"


function Home()
{
   return (
    <div>
        <Note />
    </div>
   );
}

export default Home;

