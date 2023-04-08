import React from "react";
import './footer.css'
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__content">
                <Link to={'/'} className="footer__content__logo">
                    <img src={logo} class="footer__logo" alt="Logo Boulder Race Colorado"/>
                </Link>
                <nav className="footer__nav">           
                    <Link to={`/`} className="footer__nav-link">HOME</Link>
                    <Link to={`/Gallery`} className="footer__nav-link">GALLERY</Link>
                    <Link to={`/Slogan`} className="footer__nav-link">SLOGAN</Link>
                    <Link to={`/Location`} className="footer__nav-link">LOCATION</Link>
                </nav>
            </div>
            <div className="footer__copyright">© 2023 - Developped by Thomas Berton</div>
        </footer>

    )
}

export default Footer
