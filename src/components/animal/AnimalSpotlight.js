import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";
import { firstLetterCase } from "../../modules/helpers";

const AnimalSpotlight = props => {
    const [animal, setAnimal] = useState({name: "", breed: ""});

    useEffect(() => {
        AnimalManager.get(props.animalId).then(animal => {
            setAnimal({
                name: animal.name,
                breed: animal.breed,
                picture: animal.picture
            });
        });
    }, [props.animalId]);

    return (
        <div className="animal-spotlight">
            {animal.picture === undefined ? null : <img src={require(`./${animal.picture}`)} alt={animal.name} />}
            <div>
                <h3>{firstLetterCase(animal.name)}</h3>
                <p>{animal.breed}</p>
            </div>
        </div>
            
    );
};

export default AnimalSpotlight