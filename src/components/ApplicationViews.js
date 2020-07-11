//another component that "routes" you to the path that was clicked on in nav bar
import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./locations/LocationList";
import LocationDetail from "./locations/LocationDetail";
import LocationForm from "./locations/LocationForm";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import OwnerList from "./owners/OwnerList";
import OwnerForm from "./owners/OwnerForm";


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
                //giving all properties of Router to AnimalList so that history.push can be utilized
                return <AnimalList {...props}/>;
            }}
            />
            <Route
            path="/animals/:animalId(\d+)"
            render={props => {
                //pass animalId to AnimalDetailComponent
                return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
                //AnimalDetail component needs to get router history object so we must pass the props to this component
                //spread operator copies all Router properties onto AnimalDetail component
                {...props} />
            }}
            />
            <Route
            path="/animals/new"
            render={(props) => {
                return <AnimalForm {...props} />
            }}
            />
            <Route
            exact
            path="/locations"
            render={props => {
                return <LocationList {...props} />;
            }}
            />
            <Route 
            path="/locations/:locationId(\d+)"
            render={props => {
                return <LocationDetail locationId={parseInt(props.match.params.locationId)} 
                                       {...props}/>
            }}
            />
            <Route
            path="/locations/new"
            render={props => {
                return <LocationForm {...props} />
            }}
            />
            <Route
            exact
            path="/employees"
            render={props => {
                return <EmployeeList {...props} />;
            }}
            />
            <Route
            path="/employees/new"
            render={props => {
                return <EmployeeForm {...props} />
            }}
            />
            <Route
            exact
            path="/owners"
            render={props => {
                return <OwnerList {...props} />;
            }}
            />
            <Route 
            path="/owners/new"
            render={props => {
                return <OwnerForm {...props} />
            }}
            />
        </React.Fragment>
       
    );
};

export default ApplicationViews;

//note: exact needed on home page path because it will also match the other pages that have a "/" and render all the other components as well
//if have Link must have Route element!

