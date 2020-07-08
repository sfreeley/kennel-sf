//another component that "routes" you to the path that was clicked on in nav bar
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import OwnerCard from "./owners/OwnerCard";

//this Application Views component will be defining HOW the application responds
//after the links are clicked in nav bar -- this will render that specific component in DOM

const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
            exact
            path="/"
            render={props => {
                return <Home />;
            }}
            />
            <Route
            path="/animals"
            render={props => {
                return <AnimalCard />;
            }}
            />
            <Route 
            path="/locations"
            render={props => {
                return <LocationCard />;
            }}
            />
            <Route 
            path="/employees"
            render={props => {
                return <EmployeeCard />;
            }}
            />
            <Route
            path="/owners"
            render={props => {
                return <OwnerCard />;
            }}
            />
        </React.Fragment>
       
    );
};

export default ApplicationViews;

//note: exact needed on home page path because it will also match the other pages that have a "/" and render all the other components as well
//if have Link must have Route element!