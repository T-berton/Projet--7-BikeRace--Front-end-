import React from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './rider.css'

function Rider (){
    return(
        <>
        <Nav/>
            <div className="rider__container">
                <h1 className="rider__title"> Rider</h1>
                <div className="rider__grid">
                    <div className="rider__card">
                        <div className="rider__card__title">
                        </div>
                        <div className="rider__card__description">

                        </div>
                    </div>
                </div>
            </div>
           
        <Footer/>
        </>
    )
}

export default Rider;