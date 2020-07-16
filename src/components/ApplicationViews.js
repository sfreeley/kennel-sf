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
import OwnerWithAnimals from "./owners/OwnerWithAnimals";

//this Application Views component will be defining HOW the application responds
//after the links are clicked in nav bar -- this will render that specific component in DOM

const ApplicationViews = (props) => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;
    const setLocalStorage = props.setLocalStorage
    
    return (
        <React.Fragment>
            <Route
            exact
            path="/"
            render={props => {
                return <Home /> 
            }}
            />
            <Route
            path="/login"
            render={props => {
                //pass setUser function to login component
                return <Login setUser={setUser} {...props} setLocalStorage={setLocalStorage}  />
            }}
            />
            <Route
            exact
            path="/animals"
            render={props => {
               if (hasUser) {
                   return <AnimalList {...props}/>
               } else {
                   return <Redirect to="/login" />
               }
            }}
            />
            <Route
            exact
            path="/animals/:animalId(\d+)"
            render={props => {
                //pass animalId to AnimalDetailComponent
                return (hasUser ? <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} /> : <Redirect to="/login" />)
                //AnimalDetail component needs to get router history object so we must pass the props to this component
                //spread operator copies all Router properties onto AnimalDetail component
            }}
            />
            <Route
            path="/animals/:animalId(\d+)/edit" render={props => {
                return <AnimalEditForm {...props} />
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
                return <LocationList {...props} /> 
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
                return (hasUser ? <LocationWithEmployees {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/locations/:locationId(\d+)/edit" render={props => {
                return (hasUser ? <LocationEditForm {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/locations/new"
            render={props => {
                return (hasUser ? <LocationForm {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            exact
            path="/employees"
            render={props => {
                return (hasUser ? <EmployeeList {...props} /> : <Redirect to="/login" />) 
            }}
            />
            <Route
            path="/employees/:employeeId(\d+)/details"
            render={props => {
                return (hasUser ? <EmployeeWithAnimals {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/employees/:employeeId(\d+)/edit" render={props => {
                return (hasUser ? <EmployeeEditForm {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/employees/new"
            render={props => {
                return (hasUser ? <EmployeeForm {...props} /> : <Redirect to="/login" /> ) 
            }}
            />
            <Route
            exact
            path="/owners"
            render={props => {
                return (hasUser ? <OwnerList {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route
            path="/owners/:ownerId(\d+)/details" render={props => {
                return (hasUser ? <OwnerWithAnimals {...props} /> : <Redirect to="/login" />) 
            }}
            />
            <Route
            path="/owners/:ownerId(\d+)/edit" render={props => {
                return (hasUser ? <OwnerEditForm {...props} /> : <Redirect to="/login" />)
            }}
            />
            <Route 
            path="/owners/new"
            render={props => {
                return (hasUser ? <OwnerForm {...props} /> : <Redirect to="/login" />)
            }}
            />
        </React.Fragment>
       
    );
};

export default ApplicationViews;

//note: exact needed on home page path because it will also match the other pages that have a "/" and render all the other components as well
//if have Link must have Route element!

