import React from "react";
import { Link } from "react-router-dom"
import { firstLetterCase } from "../../modules/helpers";

const LocationCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                 <img src={require(`./${props.location.picture}`)} alt={props.location.name} />
            </picture>
            <h3>
    Name: <span className="card-locationName"> {firstLetterCase(props.location.name)} </span>
            </h3>
            <p>Address: {props.location.address} </p>
            <p>Hours: {props.location.hours} </p>
            <Link to={`/locations/${props.location.id}`}>
                <button>Details</button>
            </Link>
            <button type="button" onClick={() => {props.deleteLocation(props.location.id)}}>Remove</button>
        </div>
    </div>

    );
};

export default LocationCard