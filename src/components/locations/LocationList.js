import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager"

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        LocationManager.getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    useEffect(() => {
        getLocations();
    }, []);

    return(
        <div className="container-cards">
            { locations.map(location => <LocationCard key="location.id" location={location} />)}
        </div>
    );
};

export default LocationList;