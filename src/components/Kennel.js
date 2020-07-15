import React, { useState, useEffect } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

//Kennel is a function that returns static HTML
//Animal Card component is child of Kennel component (when Kennel component is rendered it will render the AnimalCard component)
const Kennel = () => {
    //checking if credentials are in session storage (returns true or false)
    const isAuthenticated = () => {
        return sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null
    }
    //adding state for user
    const [hasUser, setHasUser] = useState(isAuthenticated());

    //logout function (clearing session and local storage and changing isAuthenticated to false)
    const clearUser = () => {
        sessionStorage.clear();
        localStorage.clear();
        setHasUser(isAuthenticated())
    }
    //function that takes in user and sets it to sessionStorage and puts user into state?
    const setUser = user => {
        sessionStorage.setItem("credentials", JSON.stringify(user));
        setHasUser(isAuthenticated());
    };

    const setLocalStorage = user => {
        localStorage.setItem("credentials", JSON.stringify(user))
        setHasUser(isAuthenticated());
    };

    return (
        <>
        <NavBar hasUser={hasUser} clearUser={clearUser} />
        <ApplicationViews hasUser={hasUser} setUser={setUser} setLocalStorage={setLocalStorage}  />
        </>
    );
};

export default Kennel;

//Note: <> </> same as <React.Fragment></React.Fragment>
//it is a container that acts like a <div></div> but does not show anything in
//index.html and prevents from having multiple unnecessary <div></div> tags
//it encompasses separate pieces into "one box" so it can all be returned from the function