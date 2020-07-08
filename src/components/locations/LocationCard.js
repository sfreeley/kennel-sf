import React from "react";

const LocationCard = () => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require("./doggy.jpg")} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-locationName">East Nashville</span>
            </h3>
            <p>Hours: 24 hours</p>
        </div>
    </div>

    );
};

export default LocationCard