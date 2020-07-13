import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";

const LocationEditForm = (props) => {
    //initial render of return statement happens when useState is set
    const [location, setLocation] = useState({name: "", address: "", hours: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = {...location};
        stateToChange[event.target.id] = event.target.value;
        setLocation(stateToChange)
    }

    const updateExistingLocation = event => {
        event.preventDefault();
        //this will stop ability to click button because will be already in process of updating?
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            name: location.name,
            address: location.address,
            hours: location.hours,
            picture: location.picture
        };

        LocationManager.updateLocation(editedLocation)
        .then(() => props.history.push("/locations"))
    };

    useEffect(() => {
        LocationManager.getLocation(props.match.params.locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            })
    }, [props.match.params.locationId]);

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="name"
                    value={location.name}
                    />
                    <label htmlFor="name">Location Name</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="address"
                    value={location.address}
                    />
                    <label htmlFor="address">Address</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="hours"
                    value={location.hours}
                    />
                    <label htmlFor="hours">Hours</label>
                </div>
                <button
                type="button" disabled={isLoading}
                onClick={updateExistingLocation}
                className="btn btn-primary">
                    Submit
                </button>
            </fieldset>
        </form>
        </>
    );
};

export default LocationEditForm