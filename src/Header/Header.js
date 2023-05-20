import React, { Component } from "react";
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav>
         <button>Menu</button> 
            <Link to={'/friends'}>
                <button>Friends</button>
            </Link>
            <Link to={'/Outfits'}>
                <button>Outfits</button>
            </Link>
            <Link to={'/Login'}>
                <button>Login</button>
            </Link>
        </nav>
    )
}


export default Header