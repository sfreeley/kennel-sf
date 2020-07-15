import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

//component to display single employee and include <AnimalCard/> for each animal
//that employee is taking care of

const EmployeeWithAnimals = props => {
    //one employee
    const [employee, setEmployee] = useState({});
    //array of animals because one employee can be responsible for multiple animals
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        //make call to get employees with animal from EmployeeManager
        EmployeeManager.getWithAnimals(props.match.params.employeeId)
            .then(APIResult => {
                console.log(APIResult)
                //set empty employee array with object of api result (gets one employee by id with the animals they are responsible for)
                setEmployee(APIResult)
                //setting animals empty array with the result of animal objects (APIResult.animals because now nested as child of employee) from api call
                setAnimals(APIResult.animals);
            })
    }, [props.match.params.employeeId]);

    const deleteAnimal = id => {
        AnimalManager.delete(id)
        .then(() => {
            EmployeeManager.getWithAnimals(props.match.params.employeeId).then((APIResult) => {
                 setEmployee(APIResult)
                 setAnimals(APIResult.animals)
            });
        });
    };

    return (
        <div className="card">
            <p>Employee: {employee.name}</p>
            {animals.map(animal => <AnimalCard key={animal.id}
                                    animal={animal}
                                    deleteAnimal={deleteAnimal}
                                    {...props} />
                )} 
        </div>
    );
};

export default EmployeeWithAnimals

