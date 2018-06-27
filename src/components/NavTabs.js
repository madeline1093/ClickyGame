import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => (
    <ul className= "nav nav-tabs">
        <li className= "nav-item">
            <Link
                to="/"
                className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
            >
                Clicky Game
            </Link>
        </li>
        <li>
        </li>
    </ul>
);

export default NavTabs;