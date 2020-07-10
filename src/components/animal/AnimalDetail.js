import React, { useState, useEffect} from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

//this component will have the responsibility of rendering the details of the one single animal after the user clicks on the Details button
const AnimalDetail = (props) => {
    const [animal, setAnimal] = useState({name: "", breed: "", picture: "dog.svg" });

    useEffect( () => {
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(props.animalId)
        .then(animal => {
            console.log(animal)
            setAnimal({
                name: animal.name,
                breed: animal.breed,
                picture: animal.picture
            });
        });
    }, [props.animalId]);

    return(
        <div className="card">
            <div className="card-content">
                <picture>
                <img src={require(`/${animal.picture}`)} alt={animal.name} />
                    {/* {animal.picture === "" ? undefined : <img src={require(`/${animal.picture}`)} alt={animal.name} />} */}
                </picture>
                <h3>
                    Name: <span style={{ color: 'darkslategrey'}}>{animal.name} </span>
                </h3>
                <p>Breed: {animal.breed} </p>
            </div>
        </div>
    );
}

export default AnimalDetail