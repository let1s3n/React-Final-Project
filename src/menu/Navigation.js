import React from "react";
import {NavLink} from "react-router-dom";
const Navigation = () => {
    return (
        <div className="navbar">
            <h2><NavLink className="hvr-wobble-top" to="/">Home</NavLink></h2>
            <h2><NavLink className="hvr-wobble-top" to="/users">Users</NavLink></h2>
            <h2><NavLink className="hvr-wobble-top" to="/about">About</NavLink></h2>
        </div>


        
    );
};

export default Navigation;