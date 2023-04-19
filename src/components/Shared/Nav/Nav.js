import React from "react";
import {Link, useLocation } from "react-router-dom";
import './nav.css'
import logo from '../../../assets/logo.png'
import { Fade as Hamburger } from 'hamburger-react'


function Nav (){
    const location= useLocation();
    const currentpath = location.pathname;
    return (
        <nav className={`${currentpath === '/' ? 'nav-home' : 'nav-other'}`}>
            <span className>
                <img src={logo} class="nav__logo" alt="Logo Boulder Race Colorado"/>
            </span>
            <div className="nav__mobile">
                <Hamburger label="Show menu" rounded duration={0.8} color="#C1FF72" onToggle={toggled =>{
                    const navListe = document.querySelector(".nav__liste");
                    if (toggled) {
                        navListe.setAttribute('data-visible',true);
                    }
                    else {
                        navListe.setAttribute('data-visible',false);
                    }
                }}/>
            </div>
            <ul className="nav__liste" id="nav__liste" data-visible="false">
                <li>
                    <Link to={`/`} className="nav__item nav__item-1">HOME</Link>
                </li>
                <li>
                    <Link to={`/Gallery`} className="nav__item nav__item-1">GALLERY</Link>
                </li>    
                <span></span>
                <li>
                    <Link to={`/Slogan`} className="nav__item nav__item-2">SLOGAN</Link>
                </li>    
                <li>
                    <Link to={`/Location`} className="nav__item nav__item-2">LOCATION</Link>
                </li>        
            </ul>    
        </nav>
    )
}

export default Nav