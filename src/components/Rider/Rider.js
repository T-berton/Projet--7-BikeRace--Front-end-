import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './rider.css'
import SocialBar from "../Shared/SocialBar/SocialBar";


function Rider (){

    const [rider, setRider] = useState([]);
    const [error, setError] = useState((null));

    async function fetchRider(){
        try {
            const response = await fetch('http://localhost:4000/riders');
            if (!response.ok) {
                throw new Error(
                    `This is an HTML Error : ${response.status}`
                );
            }
            let currentData = await response.json();
            setRider(currentData);
            
        } catch (error) {
            setError(error)
        }
    }
    useEffect(()=> {
        fetchRider();
    }, []);

    return(
        <>
        <Nav/>
            <div className="rider__container">
                <h1 className="rider__title"> ALL THE RIDERS</h1>
                <div className="rider__grid">
                    {
                        rider.map((rider)=>(
                            <div key={rider.id} className="rider__card">
                                <div className="rider__card__title">
                                    <div className="rider__card__title__firstname">
                                        First Name - {rider.first_name}
                                    </div>
                                    <div className="rider__card__title__lastname"> 
                                        Last Name - {rider.last_name}
                                    </div>
                                </div>
                                <div className="rider__card__description">
                                    {rider.first_name} {rider.last_name} comes from the state of {rider.state}, more precisely in {rider.city}.
                                </div>
                        </div> 
                        ))}
                 
                </div>
            </div>
        <Footer/>
        <SocialBar/>
        </>
    )
}

export default Rider;