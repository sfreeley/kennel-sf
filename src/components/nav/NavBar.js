import React from "react";
//importing Link will tells what content to load
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom"
import "./NavBar.css";

//Link component comes from react router package-- 
//has built in 'to' attribute that will change URL in browser, but still be in same application
//passing props from Kennel (hasUser, setUser)
const NavBar = (props) => {
   
    const handleLogout = () => {
        //call clearUser function from Kennel.js to clear session and local storage; update state of user
        props.clearUser();
        //send user back to home page
        props.history.push('/')
    }

    return (
        <header>
            <h1 className="site-title">
                Student Kennels
                <br />
                <small>Loving care when you're not there</small>
            </h1>

            <nav>
                <ul className="container">
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" exact={true} to="/">
                            Home
                        </NavLink>
                    </li>
                    {props.hasUser ? 
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/animals">
                            Animals
                        </NavLink>
                    </li> 
                    : null}
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/locations">
                            Locations
                        </NavLink>
                    </li>
                    {props.hasUser ?
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/employees">
                            Employees
                        </NavLink>
                    </li>
                    : null}
                    {props.hasUser ? 
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/owners">
                            Owners
                        </NavLink>
                    </li>
                    : null}
                    {props.hasUser 
                    ? <li>
                        <span className="nav-link" onClick={handleLogout}> Logout </span>
                    </li> : <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/login"> Login </NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);