import React, { useState, useEffect } from "react"
import OwnerManager from "../../modules/OwnerManager";

const OwnerEditForm = props => {
    const [owner, setOwner] = useState({name: "", phone: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = {...owner};
        stateToChange[event.target.id] = event.target.value;
        setOwner(stateToChange);
    }

    const updateExistingOwner = event => {
        event.preventDefault();
        setIsLoading(true);

        const editedOwner = {
            id: props.match.params.ownerId,
            name: owner.name,
            phone: owner.phone,
            picture: owner.picture
        }

        OwnerManager.updateOwner(editedOwner)
            .then( () => props.history.push("/owners"))
    }

    useEffect(() => {
        OwnerManager.getOwner(props.match.params.ownerId)
            .then(owner => {
                console.log(owner)
                setOwner(owner);
                setIsLoading(false);
            })
    }, [props.match.params.ownerId]);

    return (
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
                    value={owner.name}
                    />
                    <label htmlFor="name">Owner Name</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="phone"
                    value={owner.phone}
                    />
                    <label htmlFor="phone">Owner Phone Number</label>
                </div>
                    <button type="button" disabled={isLoading}
                    onClick={updateExistingOwner}
                    className="btn btn-primary">
                        Submit
                    </button>
            </fieldset>
        </form>
    </>
    );
};

export default OwnerEditForm