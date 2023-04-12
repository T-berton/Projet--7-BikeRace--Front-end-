import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './location.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Location (){

   const [locationRiders,setLocationRider] = useState([]);
   const [error,setError] = useState((null));

    async function fetchLocation() {
        try {
            const response = await fetch("http://localhost:4000/locations");
            if (!response.ok){
                throw new Error(`HTML ERROR : ${response.status}`);
            }

            let currentData = await response.json();
            if (currentData){
                setLocationRider(currentData);
            }
            
        } catch (error) {
            setError((error));
        }
    }

    useEffect(()=> {
        fetchLocation();
    },[])

    return(
        <>
            <Nav/>
            <div className="map__container">
                <h1>
                    LIVE RACE 
                </h1>
                <MapContainer
                center={[40.01, -105.29]}
                zoom={12}
                scrollWheelZoom={true}
                className="map"
                >
                <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    locationRiders.map((locationRider) => {
                        return (
                            <Marker position={[locationRider.latitude,locationRider.longitude]}>
                                <Popup>
                                    {locationRider.rider.first_name} <br/>
                                    {locationRider.rider.last_name}
                                </Popup>
                            </Marker>
                        );
                    })
                }
            </MapContainer>
            </div>
            <Footer/>
        </>
    )
}

export default Location