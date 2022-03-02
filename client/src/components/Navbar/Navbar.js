import React from "react";
//Styles
import './Navbar.css'

const Navbar = ({title}) => {
    return (
        <nav>
            <h1>{title ? title : "Please give a title"}</h1>
        </nav>
    )
}

export default Navbar;