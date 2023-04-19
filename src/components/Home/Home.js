import React from "react";
import Nav from "../Shared/Nav/Nav";
import './home.css'
import { Icon } from '@iconify/react';
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Footer from "../Shared/Footer/Footer";
import {useEffect, useState} from 'react'
import SocialBar from "../Shared/SocialBar/SocialBar";


function Home() {

    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    function convertMstoTime(time_ms){
        const seconds = Math.floor((time_ms/1000)%60);
        const minutes = Math.floor((time_ms/(1000*60))%60);
        const hours = Math.floor((time_ms/(1000 * 60*60))%24);
        const days = Math.floor((time_ms/(1000*60*60*24))%30);
        const months = Math.floor((time_ms/(1000*60*60*24*30))%12);
        return ({months,days,hours,minutes,seconds})
    }

    function computeTimeLeft(){
        const currentDate_ms = new Date().getTime();
        const targetDate = new Date("April 1, 2024 12:00:00:000");
        const targetDate_ms = targetDate.getTime();
        const timeLeft_ms = targetDate_ms - currentDate_ms;
        const timeLeft = convertMstoTime(timeLeft_ms);
        console.log('computeTimeLeft:', timeLeft);
        setTimeLeft(timeLeft)

    }

    useEffect(() => {
        const intervalId = setInterval(()=>{
            computeTimeLeft();
        },1000);
        return () => clearInterval(intervalId);
    
    }, [])
    
    
    return (
        <>
        <div className="home__background">
            <div className="home__container">
            <Nav/>
           <div className="home__grid">
                <div className="home__header">
                    <div className="home__header__title">
                        <h1 className="home__header__title-green">BOULDER</h1><h1 className="home__header__title-white"> BIKE</h1> <h1 className="home__header__title-green">TOUR</h1> 
                    </div>
                    <h2 className="home__header__title-green home__header__counter__title">COMING SOON...</h2>
                    <div className="home__header__subtitle">
                        <div className="home__header__date"> 
                            <h2 className="home__header__title-white">
                                {timeLeft.months}
                            </h2>
                            <p className="home__header__title-green">Mths</p>
                        </div>
                        <h2 className="home__header__title-green">:</h2>
                        <div className="home__header__date"> 
                            <h2 className="home__header__title-white">
                                {timeLeft.days}
                            </h2>
                            <p className="home__header__title-green">Days</p>
                        </div>
                        <h2 className="home__header__title-green">:</h2>
                        <div className="home__header__date"> 
                            <h2 className="home__header__title-white">
                                {timeLeft.hours}
                            </h2>
                            <p className="home__header__title-green">Hrs</p>
                        </div>
                        <h2 className="home__header__title-green">:</h2>
                        <div className="home__header__date"> 
                            <h2 className="home__header__title-white">
                                {timeLeft.minutes} 
                            </h2>
                            <p className="home__header__title-green">Min</p>
                        </div>
                        <h2 className="home__header__title-green">:</h2>
                        <div className="home__header__date"> 
                            <h2 className="home__header__title-white">
                                {timeLeft.seconds}
                            </h2>
                            <p className="home__header__title-green">Sec</p>
                        </div>
                        {/* <h2 className="home__header__title-white">
                            {`${timeLeft.hours}h${timeLeft.minutes}min${timeLeft.seconds}sec`}
                        </h2>
                        <h2 className="home__header__title-green">
                            {`${timeLeft.days}days ${timeLeft.months}months`}
                        </h2>
                        <h2 className="home__header__title-white">
                            Colorado
                        </h2> */}
                    </div>
                </div>
            </div>
               
            </div>
        </div>
        <SocialBar/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Footer/>
        </>
    )
}

export default Home