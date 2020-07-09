import React, { useEffect, useState } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

const OwnerList = () => {
    const [owners, setOwners] = useState([]);

    const getOwners = () => {
        return OwnerManager.getAllOwners().then(ownersFromAPI => {
            console.log(ownersFromAPI)
            setOwners(ownersFromAPI)
        });
    };

    //initial render will activate getOwners to fetch information
    useEffect(() => {
        getOwners();
    }, []);

    return (
        <div className="container-cards">
            { owners.map(owner => <OwnerCard key={owner.id} owner={owner} />) }
        </div>
    );

};

export default OwnerList;