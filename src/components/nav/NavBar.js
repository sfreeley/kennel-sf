import React from "react";
//importing Link will tells what content to load
import { Link } from "react-router-dom";
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
                        <Link className="nav-link" to="/">
                            Home
                </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/animals">
                            Animals
                </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/locations">
                            Locations
                </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/employees">
                            Employees
                </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/Owners">
                            Owners
                </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;