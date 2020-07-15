import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./AnimalForm.css";

const AnimalForm = props => {
    const [animal, setAnimal] = useState({name: "", breed: ""});
    //isLoading is set to false (ie not disabled)
    const [isLoading, setIsLoading] = useState(false);
    //state declared for employees in order to add dropdown for caretaker
    const [employees, setEmployees] = useState([])

    const handleFieldChange = event => {
        //value of stateToChange variable are the properties of animal object
        const stateToChange = {...animal,
                            employeeId: parseInt(animal.employeeId),
                             picture:"dog.svg"};
        //set the properties of animal object (ie name, breed) that corresponds to
        //id of input field(ie name, breed) to the value of what the user types
        stateToChange[event.target.id] = event.target.value;
        //change state to user input which will cause new info to re-render
        setAnimal(stateToChange);
    };

    useEffect(() => {
        EmployeeManager.getAllEmployees()
            .then(employee => {
                setEmployees(employee)
            })
    }, [])

        //make sure fields are not empty, set loadingStatus, create animal object,
        //invoke AnimalManger POST method and redirect to full animal list
        const constructNewAnimal = event => {
            event.preventDefault();
            if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
                window.alert("Please input an animal name, breed, and caretaker");
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
                    <select
                    className="form-control"
                    id="employeeId"
                    value={animal.employeeId}
                    onChange={handleFieldChange}
                    >
                    {employees.map(employee => 
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                        )}
                    </select>
                    <label htmlFor="employeeId">Employee Caretaker</label>
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
