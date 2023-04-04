import React from "react";
import './home2.css'
import cyclist1 from '../../assets/Home/cyc1.png'
import cyclist2 from '../../assets/Home/cyc2.png'
import cyclist3 from '../../assets/Home/cyc3.png'

function Home2(){
    return (
        <div className="home2__background">
            <div className="home2__header">
                <h2 className="home2__header__title">
                    Get Ready for the 2024 Boulder Bike Tour!
                </h2>
                <p className="home2__header__description">
                    The Boulder Bike Tour, a thrilling and esteemed bike race in Colorado's Rocky Mountains, happens every 10 years and is coming up next year!
                </p>
            </div>
            <div className="home2__grid">
                <img src={cyclist1} class="home2__grid__item" alt="Cyclist 1"/>
                <img src={cyclist2} class="home2__grid__item" alt="Cyclist 2"/>
                <img src={cyclist3} class="home2__grid__item" alt="Cyclist 3"/>
            </div>

        </div>
    )
}

export default Home2