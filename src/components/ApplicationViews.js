//another component that "routes" you to the path that was clicked on in nav bar
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail"
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owners/OwnerList";

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
            exact
            path="/animals"
            render={props => {
                return <AnimalList />;
            }}
            />
            <Route
            path="/animals/:animalId(\d+)"
            render={props => {
                //pass animalId to AnimalDetailComponent
                return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
            }}
            />
            <Route 
            path="/locations"
            render={props => {
                return <LocationList />;
            }}
            />
            <Route 
            path="/employees"
            render={props => {
                return <EmployeeList />;
            }}
            />
            <Route
            path="/owners"
            render={props => {
                return <OwnerList />;
            }}
            />
        </React.Fragment>
       
    );
};

export default ApplicationViews;

//note: exact needed on home page path because it will also match the other pages that have a "/" and render all the other components as well
//if have Link must have Route element!

