import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import LocationManager from "../../modules/LocationManager";


const EmployeeForm = props => {
    const [employee, setEmployee] = useState({name: "", age: "", experience: "", locationId: 1});
    const [isLoading, setIsLoading] = useState(false);
    //adding state to locations in order to create employee dropdown menu
    const [locations, setLocations] = useState([]);
    
    const handleFieldChange = event => {
        const stateToChange = {...employee, picture: "corgi.jpg"}

        stateToChange[event.target.id] = event.target.value
        setEmployee(stateToChange)

    }

    useEffect(() => {
        LocationManager.getAllLocations()
            .then(locations => {
                setLocations(locations)
            })
    }, [])

    const handleLocationIdFieldChange = event => {
        const stateToChange = {...employee}

        stateToChange[event.target.id] = parseInt(event.target.value)
        setEmployee(stateToChange)

    }


    const constructNewEmployee = event => {
        event.preventDefault();
        if (employee.name === "" || employee.age === "" || employee.experience === "" || employee.locationId === null) {
            window.alert("Please input employee name, age, and experience")
        } else {
            setIsLoading(true);
            EmployeeManager.postEmployee(employee)
            .then(() => {props.history.push("/employees")})
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
                    placeholder="Employee Name"
                    />
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="age"
                    placeholder="Employee Age"
                    />
                    <label htmlFor="age">Age</label>
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="experience"
                    placeholder="Employee Experience"
                    />
                    <label htmlFor="experience">Experience</label>

                    <select 
                    className="form-control"
                    id="locationId"
                    value={employee.locationId}
                    onChange={handleLocationIdFieldChange}
                    >
                    {locations.map(location => 
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    )}
                    </select>
                    <label htmlFor="locationId">Current Location</label>
                </div>
                <button
                type="button"
                disabled={isLoading}
                onClick={constructNewEmployee}>
                    Submit
                </button>
            </fieldset>
        </form>
        </>
    );
};

export default EmployeeForm