import React, { Component } from "react";
import "./Closet.css"
import Card from "../Card/Card";

const Closet = (props) => {
const {tops, bottoms,} = props
    const yourTops = tops.map(clothing => {
        return (
            <div className="flex" >
                <img className="tops-img" key={clothing.id} id={clothing.id} src={clothing.img} alt={'this is a Top'} onClick={() => props.changeOutfit(clothing.id, 'top')}/>
                <p>{clothing.name}</p>
            </div>
        )
    })
    const yourBottoms = bottoms.map(clothing => {
        return (
            <div className="flex" >
                <img className="bottoms-img" key={clothing.id} id={clothing.id} src={clothing.img} alt={'this is a Top'} onClick={() => props.changeOutfit(clothing.id, 'bottom')}/>
                <p>{clothing.name}</p>
            </div>
        )
    })
    return (
        <section>
            <div className="tops">
                <h1>Your Tops</h1>
                <div className="flex-inLine">

                 {yourTops}
                </div>
            </div>
            <div className="bottoms">
                <h1>Your Bottoms</h1>
                <div className="flex-inLine">
                    {yourBottoms}    
                </div>
            </div>
            <div></div>
        </section>
    )
}



export default Closet