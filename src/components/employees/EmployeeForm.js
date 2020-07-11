import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";


const EmployeeForm = props => {
    const [employee, setEmployee] = useState({name: "", age: "", experience: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = {...employee, picture: "corgi.jpg"}

        stateToChange[event.target.id] = event.target.value
        setEmployee(stateToChange)

    }

    const constructNewEmployee = event => {
        event.preventDefault();
        if (employee.name === "" || employee.age === "" || employee.experience === "") {
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