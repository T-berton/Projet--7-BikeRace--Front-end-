import React from "react";
import './home4.css'
import map from '../../assets/Home/map.png'
import { Link } from "react-router-dom";

function Home4(){
    return(
        <div className="home4__container">
            <div className="home4__text">
                <h1 className="home4__text__title">
                    BIKE RACE ROUTE
                </h1>
                <p className="home4__text__description">
                Scenic yet tough. Cyclists will experience a path consisting of remarkable climbs and descents, offering breathtaking vistas at every turn.
                </p>
            </div>
            <div className="">
                <img src={map} alt="Road of the bike race" className="home4__img"/>
                <div className="btn btn-primary">
                    <Link to={`/Location`} className="btn__content-primary">SEE THE RACE IN LIVE !</Link>
                </div>
            </div>
        </div>
    )
}

export default Home4