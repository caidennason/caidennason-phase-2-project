import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return <div style={{background:'peachpuff'}}className="navbar">
    <NavLink style={{color:'black'}} to="/" 
    >
        Home
    </NavLink>
    <NavLink style={{color:'black'}} to="/submissionform"
    >
        Submission Form
    </NavLink>
    <NavLink style={{color:'black'}} to="/about"
    >
        About Winoa
    </NavLink>
    </div>
}

export default Navbar
