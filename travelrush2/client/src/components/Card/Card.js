//Component to hold yelp cards for restaurant, coffee, and weather
import React from "react";
import "./Card.css";

const Card = props => (
    <div class="card">
        <div class="card-image">
            <img id={props.img}></img>
            <span class="card-title" id={props.cardTitle}></span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" value={props.value}><i class="material-icons">{props.btnName}</i></a>
        </div>
        <div class="card-content" id={props.contentID}>
            <p id={props.title}>{props.name}</p>
            <p id={props.rating}></p>
            <p id={props.price}></p>
        </div>
        <div class="card-action">
            <a href="#" id={props.url}>See More</a>
        </div>
    </div>
);
export default Card;
