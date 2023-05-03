import React from "react";
import { Link } from "react-router-dom";
import './home3.css'

function Home3(){
    return(
        <div className="home3__background container">
            <h2 className="home3__title">
                EVENT DETAILS
            </h2>
            <div className="home3__grid">
                <div className="home3__card">
                    <div className="home3__card__content">
                        <div className="home3__card__title">
                            REGISTRATION CLOSED
                        </div>
                        <div className="home3__card__body">
                            Registrations are now closed. Discover the Rider for the race and support them!
                        </div>
                        <div className="home3__card__btn">
                            <Link to={`/Rider`} className="btn btn-primary">SEE THE RIDERS</Link>
                        </div>
                    </div>
                </div>
                <div className="home3__card">
                    <div className="home3__card__content">
                        <div className="home3__card__title">
                            SLOGAN IDEA
                        </div>
                        <div className="home3__card__body">
                        Rev up your creativity and race towards the prize by entering our slogan contest today!
                        </div>
                        <div className="home3__card__btn">
                            <Link to={`/Slogan`} className="btn btn-primary">CONTEST SLOGAN IDEA</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3