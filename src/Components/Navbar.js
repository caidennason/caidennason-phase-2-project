import React, {useState} from "react";
import {NavLink} from "react-router-dom"

function Navbar(){

    return <div className="navbar">
    <NavLink to="/" onClick={(e) => console.log('hi')}
    >
        Home
    </NavLink>
    <NavLink style={{color:'peachpuff'}}to="/about"
    >
        About
    </NavLink>
    <NavLink to="/submissionform"
    >
        Submission Form
    </NavLink>
    </div>
}

export default Navbar
