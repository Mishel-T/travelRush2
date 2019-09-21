//Component to hold yelp cards for restaurant, coffee, and weather
import React from "react";
import "../Card.css";

const Card = props => (
    <div className="card">
        <div className="card-image">
            <img id={props.img} src={props.imgsrc} alt=""></img>
            <span className="card-title" id={props.cardTitle}>{props.nameEntry}</span>
            <button className="btn-floating halfway-fab waves-effect waves-light red" value={props.value}><i className="material-icons">{props.btnName}</i></button>
        </div>
        <div className="card-content" id={props.contentID}>
            <p id={props.title}>{props.name}</p>
            <p id={props.rating}>{props.ratingEntry}</p>
            <p id={props.price}>{props.priceEntry}</p>
        </div>
        <div className="card-action">
            <a href={props.urlEntry} id={props.url}>Learn More</a>
        </div>
    </div>
);
export default Card;
