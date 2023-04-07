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
                            SPONSOR REQUEST
                        </div>
                        <div className="home3__card__body">
                            The official event shirt,
                            freebies, and other items will
                            be provided one week before the race.
                        </div>
                        <div className="home3__card__btn">
                            <Link to={`/Sponsor`} className="btn btn-primary">REQUEST SPONSORSHIP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3