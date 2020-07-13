import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";

const AnimalEditForm = (props) => {
    const [animal, setAnimal] = useState({name:"", breed:""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = {...animal};
        stateToChange[event.target.id] = event.target.value;
        setAnimal(stateToChange);
    };

    
    const updateExistingAnimal = event => {
        event.preventDefault();
        //button will be clickable now 
        setIsLoading(true);
    

    //creating our edited animal object that needs to edit by id
    const editedAnimal = {
        id: props.match.params.animalId,
        name: animal.name,
        breed: animal.breed,
        picture: animal.picture
    };

    //PUT (ie edit) the edited animal object into database and then post it to animal list page
    AnimalManager.update(editedAnimal)
    .then(() => props.history.push("/animals"))

    };

    useEffect(() => {
        //GET animals by animalId
        AnimalManager.get(props.match.params.animalId)
        //then once get that one animal, change its state 
        //make button unclickable because will be retrieving data and do not want
        //user to be able to click continously
        .then(animal => {
            setAnimal(animal);
            setIsLoading(false)
        });
        //need this in dependency array because need to watch for change in animalId so can re-render the animal object
    }, [props.match.params.animalId]);

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
                    value={animal.name}
                    />
                    <label htmlFor="name">Animal name</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="breed"
                    value={animal.breed}
                    />
                    <label htmlFor="breed">Breed</label>
                </div>
                <div className="alignRight">
                    <button
                    type="button" disabled={isLoading}
                    onClick={updateExistingAnimal}
                    className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </>
    );

};

export default AnimalEditForm