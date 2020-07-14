//another component that "routes" you to the path that was clicked on in nav bar
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./locations/LocationList";
import LocationDetail from "./locations/LocationDetail";
import LocationForm from "./locations/LocationForm";
import LocationEditForm from "./locations/LocationEditForm";
import LocationWithEmployees from "./locations/LocationWithEmployees";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import EmployeeEditForm from "./employees/EmployeeEditForm";
import EmployeeWithAnimals from "./employees/EmployeeWithAnimals";
import OwnerList from "./owners/OwnerList";
import OwnerForm from "./owners/OwnerForm";
import OwnerEditForm from "./owners/OwnerEditForm";

//this Application Views component will be defining HOW the application responds
//after the links are clicked in nav bar -- this will render that specific component in DOM

const ApplicationViews = () => {
    //checking if credentials are in session storage (returns true or false)
    const isAuthenticated = () => {
        return sessionStorage.getItem("credentials") !== null
    }
    
    return (
        <React.Fragment>
            <Route
            exact
            path="/"
            render={props => {
                return (isAuthenticated() ? <Home /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/login"
            component={Login}
            />
            <Route
            exact
            path="/animals"
            render={props => {
                //giving all properties of Router to AnimalList so that history.push can be utilized
                //isAuthenticated gives boolean value of whether there is the user in session storage
                //if user is already in session storage, allow user to see content of animal page
                //if not redirect to login
                return (isAuthenticated() ?  <AnimalList {...props}/> : <Redirect to="/login" />)
            }}
            />
            <Route
            exact
            path="/animals/:animalId(\d+)"
            render={props => {
                //pass animalId to AnimalDetailComponent
                return (isAuthenticated() ? <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} /> : <Redirect to="/login" />)
                //AnimalDetail component needs to get router history object so we must pass the props to this component
                //spread operator copies all Router properties onto AnimalDetail component
            }}
            />
            <Route
            path="/animals/:animalId(\d+)/edit" render={props => {
                return (isAuthenticated() ? <AnimalEditForm {...props} /> : <Redirect to="/login" />)
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
                return (isAuthenticated() ? <LocationList {...props} /> : <Redirect to="/login" /> )
            }}
            />
            {/* <Route
            exact
            path="/locations/:locationId(\d+)"
            render={props => {
                return (isAuthenticated() ? <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} /> : <Redirect to="/login" />)
            }}
            /> */}
            <Route
            path="/locations/:locationId(\d+)/details" render={props => {
                return <LocationWithEmployees {...props} />
            }}
            />
            <Route
            path="/locations/:locationId(\d+)/edit" render={props => {
                return (isAuthenticated() ? <LocationEditForm {...props} /> : <Redirect to="/login" />)
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
                return (isAuthenticated() ? <EmployeeList {...props} /> : <Redirect to="/login" />) 
            }}
            />
            <Route
            path="/employees/:employeeId(\d+)/details"
            render={props => {
                return <EmployeeWithAnimals {...props} />
            }}
            />
            <Route
            path="/employees/:employeeId(\d+)/edit" render={props => {
                return (isAuthenticated() ? <EmployeeEditForm {...props} /> : <Redirect to="/login" />)
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
                return (isAuthenticated() ? <OwnerList {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/owners/:ownerId(\d+)/edit" render={props => {
                return (isAuthenticated() ? <OwnerEditForm {...props} /> : <Redirect to="/login" />)
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

