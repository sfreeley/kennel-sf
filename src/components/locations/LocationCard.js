import React from "react";
import { Link } from "react-router-dom"
import { firstLetterCase } from "../../modules/helpers";

const LocationCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
               <img src={require(`./${props.locations.picture}`)} alt={props.locations.name} />
            </picture>
            <h3>
                Name: <span className="card-locationName"> {firstLetterCase(props.locations.name)} </span>
            </h3>
            <p>Address: {props.locations.address} </p>
            <p>Hours: {props.locations.hours} </p>
            <Link to={`/locations/${props.locations.id}`}>
                <button>Details</button>
            </Link>
            <button type="button"
            onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>
                Edit
            </button>
            <button type="button" onClick={() => {props.deleteLocation(props.locations.id)}}>Remove</button>
        </div>
    </div>

    );
};

export default LocationCard