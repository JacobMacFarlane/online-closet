import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Outfits.css"

const Outfits = () => {
    return (
        <div>
        <p>Outfits</p>
        <Link to={'/'}>
            <button>Home</button>
        </Link>
    </div>
    )
}



export default Outfits