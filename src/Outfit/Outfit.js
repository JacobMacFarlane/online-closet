import React, { Component } from "react";
import "./Outfit.css"

const Outfit = (props) => {
    console.log(props, 'props in outfit')
    return (
        <div className="current-outfit">
            <img src={props.currentTop.img} className="current-top"/>
            <img src={props.currentBottom.img} className="current-bottom"/>
        </div>
    )
}



export default Outfit