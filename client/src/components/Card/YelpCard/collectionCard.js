import React from "react";
import "../Card.css";

// Collection component to display additional yelp card results
const CollectionCard = props => (
    <div>
        <a className="collection-item" href={props.urlplaceholder} target="_blank">
            {props.name} | Price: {props.price} | {props.distance} miles away </a>
        <button onClick={props.onClick} id="faves-btn" className="far fa-heart"></button>
    </div>
);
export default CollectionCard;
