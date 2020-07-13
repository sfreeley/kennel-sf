import React from "react";
//importing Link will tells what content to load
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom"
import "./NavBar.css";

//Link component comes from react router package-- 
//has built in 'to' attribute that will change URL in browser, but still be in same application
const NavBar = () => {
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
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/animals">
                            Animals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/locations">
                            Locations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/employees">
                            Employees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" activeClassName="nav-link--active" to="/owners">
                            Owners
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);