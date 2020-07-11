import React, { useState } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";

const AnimalForm = props => {
    const [animal, setAnimal] = useState({name: "", breed: ""});
    //isLoading is set to false (ie not disabled)
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        //value of stateToChange variable are the properties of animal object
        const stateToChange = {...animal,
                             picture:"dog.svg"};
        //set the properties of animal object (ie name, breed) that corresponds to
        //id of input field(ie name, breed) to the value of what the user types
        stateToChange[event.target.id] = event.target.value;
        //change state to user input which will cause new info to re-render
        setAnimal(stateToChange);
    };

        //make sure fields are not empty, set loadingStatus, create animal object,
        //invoke AnimalManger POST method and redirect to full animal list
        const constructNewAnimal = event => {
            event.preventDefault();
            if (animal.name === "" || animal.breed === "") {
                window.alert("Please input an animal name and breed");
            } else {
                //now make submit button not clickable
                setIsLoading(true);
                //go save the new animal object into database, move user to full animal list which will
                //now show the newly admitted animal
                AnimalManager.post(animal)
                .then(() => props.history.push("/animals"));
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
                    placeholder="Animal name"
                    />
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="breed"
                    placeholder="Breed"
                    />
                    <label htmlFor="breed">Breed</label>
                </div>
                <div className="alignRight">
                    <button
                    type="button"
                    disabled={isLoading}
                    onClick={constructNewAnimal}>
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </>
    )
};

export default AnimalForm
