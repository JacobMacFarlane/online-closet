import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Friends.css"


const Friends = () => {
    return (
        <div>
            <p>Friends</p>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>
    )
}



export default Friends