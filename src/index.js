import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

/**
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
 */