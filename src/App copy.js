import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import ContactsPage from "./components/ContactsPage"
import data from "./data"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

/*<Hero/>*/
/**
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "mountain-bike.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
 */



export default function Appwithinstance() {

    const dataItems = data.map(item=>{
        return <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location ={item.location}
            title ={item.title}
            price = {item.price}
            openSpots = {item.openSpots}
        />
    })
    console.log(dataItems)
    return (
        <div>
            <NavBar/>
            <section className="cards-list">
                {dataItems}
            </section>
        </div>
    )
}