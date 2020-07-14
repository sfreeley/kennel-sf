import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationManager from "../../modules/LocationManager";

const EmployeeEditForm = props => {
    //(1) useState declared and will render whatever is returned (when rendering, initially every value will be empty)
    const [employee, setEmployee] = useState({name: "", age: "", experience: ""});
    const [isLoading, setIsLoading] = useState(false);
    //locations useState set because there can be multiple locations
    const [locations, setLocations] = useState([]);

    //(5) when user types this will get initiated 
    const handleFieldChange = event => {
        const stateToChange = {...employee};
        stateToChange[event.target.id] = event.target.value;
        //with every keystroke, the form gets re-rendered
        setEmployee(stateToChange);
    };

    //(6) this will then run after submit button clicked
    const updateExistingEmployee = event => {
        //prevents automatic refresh of page after submit
        event.preventDefault();
        //no longer can click button because form will already be submitting
        setIsLoading(true);

        //editedEmployee object
        const editedEmployee = {
            id: props.match.params.employeeId,
            name: employee.name,
            age: employee.age,
            experience: employee.experience,
            picture: employee.picture,
            locationId: employee.locationId
        };

        //passing in editedEmployee object into PUT function from EmployeeManager
        EmployeeManager.updateEmployee(editedEmployee)
        //then will direct user to employee list page where the new object will be displayed
            .then(() => props.history.push("/employees"))
    }

    //(3) then useEffect runs after return renders initially(this will get the one employee by id)
    //state changes and re-renders the page with the values for the employee you want to edit 
    useEffect(() => {
        //get the employee using employee id
        EmployeeManager.getEmployee(props.match.params.employeeId)
        //then state changes and re-renders the page to show the employee object you want to edit 
            .then(employee => {
                LocationManager.getAllLocations()
                .then(location => {
                    setLocations(location)
                    setEmployee(employee);
                    //user can make edits and button is ok to click to submit form
                    setIsLoading(false);
                })
            })
    }, [props.match.params.employeeId]);

    //(2) will return this when useState is set
    //(4) will render again after useEffect runs (this time with values populated with the employee you want to edit)
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
                    value={employee.name}
                    />
                    <label htmlFor="name">Employee Name</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="age"
                    value={employee.age}
                    />
                    <label htmlFor="age">Employee Age</label>

                    <input
                    type="text"
                    required
                    className="form-control"
                    onChange={handleFieldChange}
                    id="experience"
                    value={employee.experience}
                    />
                    <label htmlFor="experience">Employee Experience</label>
                </div>
                <select
                    className="form-control"
                        id="locationId"
                        value={employee.locationId}
                        onChange={handleFieldChange}
                         >
                        {locations.map(location =>
                        <option key={location.id} value={location.id}>
                        {location.name}
                        </option>
                         )}
                    </select>
                    <label htmlFor="employeeId">Employee</label>
                    <button 
                    type="button" disabled={isLoading}
                    //user clicks this submit button after editing form fields and will make updateExistingEmployee function above run
                    onClick={updateExistingEmployee}
                    className="btn btn-primary">
                        Submit
                    </button>
            </fieldset>
        </form>
        </>
    );
};

export default EmployeeEditForm