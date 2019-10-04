import React from "react";
import "../Card.css";

// props location found at businesses.location.display_address[1]

const Favorites = props => (
    
            <a className="collection-item" href={props.urlplaceholder} target="_blank">
                {props.name} | Location: {props.location}</a>


);
export default Favorites;