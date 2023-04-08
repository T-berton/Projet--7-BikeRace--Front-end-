import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './location.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Location (){

   const [location,setLocation] = useState([]);
   const [rider, setRider] = useState([]);

    return(
        <>
            <Nav/>
            <div className="map__container">
                <MapContainer
                center={[40.00, -105.32]}
                zoom={13}
                scrollWheelZoom={true}
                className="map"
                >
                <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[40.00, -105.35]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                </MapContainer>
            </div>
            <Footer/>
        </>
    )
}

export default Location