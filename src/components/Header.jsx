import React from "react";
import { NavLink, Link} from "react-router-dom";

function Header()
{
    return (
        <div className="header">
        <h1 >To Do List </h1>
        <h2 ><Link to="/"> Home </Link> </h2>
        <h2><Link to="/counter"> Counter </Link> </h2>
        <h2><Link to="/login"> Login </Link> </h2>
        <h2>Logout</h2>
        </div>
        );
}

export default Header;