import React from "react";
import {Link } from "react-router-dom";
import './nav.css'
import logo from '../../../assets/logo.png'

function Nav (){
    return (
        <nav className="nav">
            <span className>
                <img src={logo} class="nav__logo" alt="Logo Boulder Race Colorado"/>
            </span>
            <ul className="nav__liste">
                <li>
                    <Link to={`/`} className="nav__item nav__item-1">HOME</Link>
                </li>
                <li>
                    <Link to={`/Gallery`} className="nav__item nav__item-1">GALLERY</Link>
                </li>    
                <span></span>
                <li>
                    <Link to={`/Sponsor`} className="nav__item nav__item-2">SPONSOR</Link>
                </li>    
                <li>
                    <Link to={`/Location`} className="nav__item nav__item-2">LOCATION</Link>
                </li>        
            </ul>    
        </nav>
    )
}

export default Nav