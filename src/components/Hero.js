import React from "react"
import heroImage from "../images/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={heroImage} className="hero--img"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </section>



    )
}