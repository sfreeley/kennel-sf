import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";

const LocationForm = props => {
    const [location, setLocation] = useState({name: "", address: "", hours: ""});
    const [isLoading, setIsLoading] = useState(false);
    

    const handleFieldChange = (event) => {
        //stateToChange variable has value of all properties of location object
        //and when state changes, will change picture
        const stateToChange = {...location, picture: "form-pug.jpg"}

        //value of property that equals name, address, hours(same as input field id) 
        //of location object will be determined by user input
        stateToChange[event.target.id] = event.target.value
        //state will be changed with every instance that user hits key and will cause re-rendering of form
        setLocation(stateToChange)
    };

    //form validation for all fields filled out, set Loading status to true,
    //create location object, invoke LocationManager POST method and redirect to full list of locations, including new location
    const constructNewLocation = (event) => {
        event.preventDefault();
        if (location.name === "" || location.address === "" || location.hours === "") {
            window.alert("Please input location name, address, and hours")
        } else {
            //once submit button clicked, change submit button to not clickable because will already be in process of submitting form
            setIsLoading(true);
            //create the animal object and redirect user to full location list
            LocationManager.postLocation(location)
            .then( () => props.history.push("/locations"));
        }
    };

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Location name"
                    />
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="address"
                    placeholder="Location address"
                    />
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="hours"
                    placeholder="Location hours"
                    />
                    <label htmlFor="hours">Hours</label>
                </div>
                <div className="alignRight">
                    <button
                    type="button"
                    disabled={isLoading}
                    onClick={constructNewLocation}>
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </> 
    );
};

export default LocationForm