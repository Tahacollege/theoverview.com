import React from "react";
export default function Anime(props){
    return(
        <div className="datacontainer">
        <div className="data">
            <img src={props.img} className="img"></img>
            <h1> Name {props.name}</h1>
            <p> Rating {props.rating}</p>
            <p> Episodes {props.episodes}</p>
            <h3> Genre {props.genre}</h3>
            <h4> Storyline{props.storyline}</h4>
        </div>
        </div>
    )
}