import React from "react"
import navLogo from "../images/airbnb-logo.png"

export default function NavBar (){

    return (
        <nav className="nav--bar">
            <img src={navLogo} className="nav--icon"></img>
        </nav>
    )
}