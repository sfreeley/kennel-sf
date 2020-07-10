import React from "react";

const LocationCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require(`./${props.location.picture}`)} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-locationName"> {props.location.name} </span>
            </h3>
            <p>Address: {props.location.address} </p>
            <p>Hours: {props.location.hours} </p>
        </div>
    </div>

    );
};

export default LocationCard