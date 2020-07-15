import React, { useEffect, useState } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = (props) => {
    //(1)setting state will cause rendering of return
    const [owners, setOwners] = useState([]);

    //(4) get all owners and change state of empty owners' array to return from api call
    const getOwners = () => {
        return OwnerManager.getAllOwners().then(ownersFromAPI => {
            console.log(ownersFromAPI)
            setOwners(ownersFromAPI)
        });
    };

    const deleteOwner = (id) => {
        OwnerManager.deleteOwner(id).then(() => {
            OwnerManager.getAllOwners().then(ownersFromAPI => {
                return setOwners(ownersFromAPI)
            });
        });
    };

    //(3) after initial render will activate useEffect, which invokes getOwners to fetch information
    useEffect(() => {
        getOwners();
    }, []);

    //(2) renders initially after state is set
    //(5) after change in owner's state, re-render
    return (
        <>
        <section className="section-content">
            <button type="button"
            className="btn"
            onClick={() => {props.history.push("/owners/new")}} >
                Add Owner
            </button>
        </section>
        <div className="container-cards">
            { owners.map(owner => <OwnerCard key={owner.id} 
                                             owner={owner}
                                             deleteOwner={deleteOwner}
                                             {...props} 
                                             />)}
        </div>
        </>
    );

};

export default OwnerList;