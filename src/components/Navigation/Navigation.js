import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

const navigation = (props) => {

    return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <br/>
                <NavLink exact to="/page-one">Page One</NavLink>
                <br/>
                <NavLink exact to="/page-two">Page Two</NavLink>
                <br/>
                <NavLink to={{
                    pathname: "/code-snippets", /* location */
                    hash: "#submit", /*this will allow you to jump to that section*/
                    search: "?quick-submit=true"
                }}>Error page</NavLink>
            </div>
    );
};

export default navigation; 