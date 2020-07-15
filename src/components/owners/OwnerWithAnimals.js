import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import AnimalCard from "../animal/AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

const OwnerWithAnimals = props => {
    const [owner, setOwner] = useState({});
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        OwnerManager.getWithAnimals(props.match.params.ownerId)
            .then(APIResult => {
                setOwner(APIResult)
                setAnimals(APIResult.animals)
            });
    }, []);

    const deleteAnimal = id => {
        AnimalManager.delete(id)
        .then(() => {
            OwnerManager.getWithAnimals(props.match.params.ownerId).then((APIResult) => {
                 setOwner(APIResult)
                 setAnimals(APIResult.animals)
            });
        });
    };

    return (
        <div className="card">
            <p>Owner: {owner.name}</p>
            {animals.map(animal => <AnimalCard key={animal.id}
                                               animal={animal}
                                               deleteAnimal={deleteAnimal}
                                               {...props} />
                )}
        </div>
    );
};

export default OwnerWithAnimals