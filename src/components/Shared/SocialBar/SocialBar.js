import React from "react";
import { Icon } from "@iconify/react";
import './socialbar.css'

function SocialBar() {
    return (
        <>
        <div className="social social--light">
        <a href="https://facebook.com/"> <Icon icon="teenyicons:facebook-solid" className="social__icon"/></a>
        <a href="https://twitter.com/"> <Icon icon="teenyicons:twitter-solid" className="social__icon"/></a>
        <a href="https://instagram.com/"> <Icon icon="teenyicons:instagram-solid" className="social__icon" /></a>
        <a href="https://tiktok.com/"> <Icon icon="teenyicons:tiktok-solid" className="social__icon"/></a>
        </div>
        </>
     
    
    )
}

export default SocialBar