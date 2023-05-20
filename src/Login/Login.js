import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    return (
        <div>
        <p>Login</p>
        <Link to={'/'}>
            <button>Home</button>
        </Link>
    </div>
    )
}



export default Login