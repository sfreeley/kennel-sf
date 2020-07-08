import React from "react";
import "./Kennel.css";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

//Kennel is a function that returns static HTML
//Animal Card component is child of Kennel component (when Kennel component is rendered it will render the AnimalCard component)
const Kennel = () => {
    return (
        <>
        <NavBar />
        <ApplicationViews />
        </>
    );
};

export default Kennel;

//Note: <> </> same as <React.Fragment></React.Fragment>
//it is a container that acts like a <div></div> but does not show anything in
//index.html and prevents from having multiple unnecessary <div></div> tags
//it encompasses separate pieces into "one box" so it can all be returned from the function