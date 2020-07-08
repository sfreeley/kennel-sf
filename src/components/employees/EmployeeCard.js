import React from "react"

const EmployeeCard = () => {
    return (
        <div className="card">
        <div className="card-content">
            <picture>
                <img src={require("./employee-dog.jpg")} alt="My Dog" />
            </picture>
            <h3>
                Name: <span className="card-employeeName">Alice</span>
            </h3>
            <p>Experience: 5 years</p>
        </div>
    </div>

    );
};

export default EmployeeCard