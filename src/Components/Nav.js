import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  
import '../Styles/Nav.css';


function Nav () {
    return (
        // <Router>
        <nav className="nav-bar">
            <ul>
                <li className="nav-li"><a href="/" id="logo" className="nav-link" >😸🎣🪗</a></li>
                <li className="nav-li"><a href="/catfish-accordion"  className="nav-link">Catfish Accordion</a></li>
                <li className="nav-li"><a href="/Profile"  className="nav-link">My Profile</a></li>
                <li className="nav-li"><a href="/Factory"  className="nav-link">User Factory</a></li>
                <li className="nav-li"><a href="/Context"  className="nav-link">Context Editor</a></li>
                <li className="nav-li"><a href="/Dispatch" className="nav-link" >Dispatch</a></li>
                <li className="nav-li"><a href="/All-Users"  className="nav-link">View DB</a></li>
                {/* <li><NavLink to="/" id="logo">😸🎣🪗</NavLink></li>
                <li><NavLink to="/catfish-accordion">Catfish Accordion</NavLink></li>
                <li><NavLink to="Profile">My Profile</NavLink></li>
                <li><NavLink to="Factory">User Factory</NavLink></li>
                <li><NavLink to="Context">Context Editor</NavLink></li>
                <li><NavLink to="Dispatch">Dispatch</NavLink></li>
                <li><NavLink to="All Users">View DB</NavLink></li> */}
                <a href="#" id="menu-icon"></a>
            </ul>
        </nav>
        // <Switch>
        //     <Route path=""></Route>
        //     <Route path=""></Route>
        //     <Route path=""></Route>
        //     <Route path=""></Route>
        //     <Route path=""></Route>
        // </Switch>
    // </Router>
    )
}

export default Nav;