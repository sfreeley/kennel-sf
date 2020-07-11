import React, { useState, useEffect} from "react";
import AnimalManager from "../../modules/AnimalManager";
import {firstLetterCase} from "../../modules/helpers";
import "./AnimalDetail.css";

//this component will have the responsibility of rendering the details of the one single animal after the user clicks on the Details button
const AnimalDetail = (props) => {
    const [animal, setAnimal] = useState({name: "", breed: "", picture:"" });
    //declaring useState to tell if a component is loading and whether you can click the button or not
    //ie cannot click the button until everything is loaded (isLoading is a boolean)
    const [isLoading, setIsLoading] = useState(true)

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
            //once useEffect has been activated after initial render (ie when all values are still empty)
            //..then set isLoading to false so the user can click the button when there is information 
            setIsLoading(false)
        });
    }, [props.animalId]);

    const handleDelete = () => {
        //invoke delete function in AnimalManager and re-direct to animal list
        //make button unclickable again after user clicks 'Discharge'
        setIsLoading(true);
        //delete based on animalId then redirect user to animal list
        AnimalManager.delete(props.animalId).then(() => props.history.push("/animals"))
    }

    return(
        <div className="card">
            <div className="card-content">
                <picture>
                    {animal.picture === "" ? undefined : <img src={require(`/${animal.picture}`)} alt={animal.name} />}
                </picture>
                <h3>
                    Name: <span style={{ color: 'darkslategrey'}}>{firstLetterCase(animal.name)}</span>
                </h3>
                <p>Breed: {animal.breed} </p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Discharge
                </button>
            </div>
        </div>
    );
}

export default AnimalDetail