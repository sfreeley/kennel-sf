import React from "react";
import "./Kennel.css";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./locations/LocationCard";
import OwnerCard from "./owners/OwnerCard"
import EmployeeCard from "./employees/EmployeeCard"

//Kennel is a function that returns static HTML
//Animal Card component is child of Kennel component (when Kennel component is rendered it will render the AnimalCard component)
const Kennel = () => {
    return (
    <div>
        <div className="section-name">
            <h2>
                Student Kennels
                <br />
                <small>Loving care when you're not there.</small>
            </h2>
            <address>
                Visit Us at the Nashville North Location
                <br />
                500 Puppy Way
            </address>
        </div>
        <div className="container-cards">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            
            <LocationCard />
            <LocationCard />
            <LocationCard />
            
            <OwnerCard />
            <OwnerCard />
            <OwnerCard />
            
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
       
       </div>
    </div>
    );
};

export default Kennel;