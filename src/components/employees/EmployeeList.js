import React, { useEffect, useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager"
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {
    //initial state is empty array
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        //after fetch call and information comes back, setEmployees function gives access to change the state)
        //setEmployees will also save the "employees" in the component's state
        //once setEmployees in invoked, will re-render DOM
        return EmployeeManager.getAllEmployees().then(employeesFromAPI => {
            console.log(employeesFromAPI)
            setEmployees(employeesFromAPI)
        });
    };

   const deleteEmployee = (id) => {
       EmployeeManager.delete(id)
       .then(() => {
           EmployeeManager.getAllEmployees().then(employeesFromAPI => {
               return setEmployees(employeesFromAPI)
           });
       });
   };
    //empty array tells when to call the function (at first render of component)
    useEffect(() => {
        getEmployees();
    }, []);

    return(
        <div className="container-cards">
            { employees.map(employee => <EmployeeCard key={employee.id} 
                                                           employee={employee} 
                                                           deleteEmployee={deleteEmployee}/>)}
        </div>
    );
};

export default EmployeeList
