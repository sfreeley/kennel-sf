import React from "react"
import { firstLetterCase } from "../../modules/helpers";

const EmployeeCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require(`./${props.employee.picture}`)} alt={props.employee.name} />
            </picture>
            <h3>
                Name: <span className="card-employeeName">
                   {firstLetterCase(props.employee.name)}
                </span>
            </h3>
            <p>Age: {props.employee.age} </p>
            <p>Experience: {props.employee.experience} </p>
            <button type="button"
                onClick={() => {props.history.push(`/employees/${props.employee.id}/details`)}}>
                    Details
                </button>
            <button type="button"
                onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
                    Edit
                </button>
            <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
        </div>
    </div>

    );
};

export default EmployeeCard