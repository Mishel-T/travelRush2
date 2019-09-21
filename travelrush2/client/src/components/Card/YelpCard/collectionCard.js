import React from "react";
import "./Card.css";

const CollectionCard = props => (
    <div>
        {/* will I be dynamically generating the collection-items in cardContainer? */}
        <a class="collection-item" href={props.urlplaceholder} target="_blank">
        {props.name} | Price: {props.price} | {props.distance} miles away</a>
           
        </div>
);
export default CollectionCard;
