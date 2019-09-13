import React from "react";
import "./Card.css";

const FirstCard = props => (
    <div className="card">
        <div className="card-image">
            <img id={props.img}></img>
            <span className="card-title" id={props.cardTitle}></span>
            <a className="btn-floating halfway-fab waves-effect waves-light red" value={props.value}><i className="material-icons">{props.btnName}</i></a>
        </div>
        <div className="card-content" id={props.contentID}>
            <p id={props.title}>{props.name}</p>
            <p id={props.rating}></p>
            <p id={props.price}></p>
        </div>
        <div className="card-action">
            <a href="#" id={props.url}>Learn More</a>
        </div>
    </div>
);
export default FirstCard;
