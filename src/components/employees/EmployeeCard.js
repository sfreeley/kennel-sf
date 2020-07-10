import React from "react"

const EmployeeCard = (props) => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require(`./${props.employee.picture}`)} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-employeeName">
                    {props.employee.name}
                </span>
            </h3>
            <p>Age: {props.employee.age} </p>
            <p>Experience: {props.employee.experience} </p>
            <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Discharge</button>
        </div>
    </div>

    );
};

export default EmployeeCard