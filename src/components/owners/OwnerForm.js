import React, { useState } from "react";
import OwnerManager from "../../modules/OwnerManager";


const OwnerForm = props => {
    const [owner, setOwner] = useState({name: "", phone: ""});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFieldChange = event => {
        //stateToChange variable has value of owner object with all properties
        //and with state change will add picture
        const stateToChange = {...owner, picture: "bike-dog-owner.jpg"}
        //owner object properties that equal the id of input fields (ie same as properties of object: name, phone) will take value of user input value
        stateToChange[event.target.id] = event.target.value
        //will change the state- form will be re-rendered with every key user types
        setOwner(stateToChange)
    }

    const constructNewOwner = event => {
        event.preventDefault();
        if (owner.name === "" || owner.phone === "") {
            window.alert("Please input owner name and phone number")
        } else {
           setIsLoading(true);
           OwnerManager.postOwner(owner)
           .then(() => {props.history.push("/owners")})
        }
    }

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
                        placeholder="Owner Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input 
                        type="tel"
                        required
                        onChange={handleFieldChange}
                        id="phone"
                        placeholder="Owner Phone Number"
                        />
                        <label htmlFor="phone">Phone Number</label>
                        <small>Format: (123)-XXX-XXXX</small>
                        
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewOwner} >
                            Submit
                        </button>
                    </div>
                </fieldset>
            </form>
            </>
        );

}

export default OwnerForm