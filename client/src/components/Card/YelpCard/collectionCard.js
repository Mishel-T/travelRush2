import React from "react";
import "../Card.css";

// Collection component to display additional yelp card results
const CollectionCard = props => (
    <div>
        <a className="collection-item" href={props.urlplaceholder} target="_blank">
            {props.name} | Price: {props.price} | {props.distance} miles away <button class="waves-effect waves-light btn modal-trigger" data-target="modal1" onClick={props.onClick} id="faves-btn" className="far fa-heart"></button>
</a>
    </div>
);
export default CollectionCard;
