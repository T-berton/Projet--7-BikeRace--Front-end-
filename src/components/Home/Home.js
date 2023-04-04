import React from "react";
import Nav from "../Shared/Nav/Nav";
import './home.css'
import { Icon } from '@iconify/react';
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Contact from "./Contact";


function Home() {
    
    return (
        <>
        <div className="home__container home__background">
           <Nav/>
           <div className="home__grid">
                <div className="home__header">
                    <div className="home__header__title">
                        <h1 className="home__header__title-green">BOULDER</h1><h1 className="home__header__title-white"> BIKE</h1> <h1 className="home__header__title-green">TOUR</h1> 
                    </div>
                    <div className="home__header__subtitle">
                        <h2 className="home__header__title-white">
                            09.22.25
                        </h2>
                        <h2 className="home__header__title-green">
                            5:OO AM
                        </h2>
                        <h2 className="home__header__title-white">
                            Colorado
                        </h2>
                    </div>
                </div>    
                <div className="home__social">
                    <a href="https://facebook.com/"> <Icon icon="teenyicons:facebook-solid" className="home__social__icon"/></a>
                    <a href="https://twitter.com/"> <Icon icon="teenyicons:twitter-solid" className="home__social__icon"/></a>
                    <a href="https://instagram.com/"> <Icon icon="teenyicons:instagram-solid" className="home__social__icon" /></a>
                    <a href="https://tiktok.com/"> <Icon icon="teenyicons:tiktok-solid" className="home__social__icon"/></a>
                </div>  
            </div>
        </div>
        <Home2/>
        <Home3/>
        <Home4/>
        <Contact/>
        </>
    )
}

export default Home