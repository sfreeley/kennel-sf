import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeCard from "../employees/EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager"

//component responsible for showing 1 location with employees that work there
const LocationWithEmployees = props => {
    const [location, setLocation] = useState({});
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //making call to database to get the locationwithEmployees
        LocationManager.getWithEmployees(props.match.params.locationId)
            .then(APIResult => {
                setLocation(APIResult);
                setEmployees(APIResult.employees)
            })
    }, []);

    const deleteEmployee = (id) => {
        EmployeeManager.deleteEmployee(id).then(() => {
            LocationManager.getWithEmployees(props.match.params.locationId)
                .then(APIResult => {
                    setLocation(APIResult);
                    setEmployees(APIResult.employees)
            });
        });
    };

    return (
        <div className="card">
            <p>Location: {location.name}</p>
            {employees.map(employee => <EmployeeCard key={employee.id}
                                                     employee={employee}
                                                     deleteEmployee={deleteEmployee}
                                                     {...props} /> )}
        </div>    
    );
};

export default LocationWithEmployees