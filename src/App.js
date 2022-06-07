import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import data from "./data"




export default function App() {

    const cards = data.map(item=>{
        return <Card
        key={item.id}
        item={item}
        />
    })

    return (
        <div>
            <NavBar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}