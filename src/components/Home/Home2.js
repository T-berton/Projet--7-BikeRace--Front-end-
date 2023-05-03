import React from "react";
import './home2.css';
import cyclist1 from '../../assets/Home/cyc1.png';
import cyclist2 from '../../assets/Home/cyc2.png';
import cyclist3 from '../../assets/Home/cyc3.png';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home2() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const slideImages = [cyclist1, cyclist2, cyclist3];

  return (
    <div className="home2__background">
      <div className="home2__header">
        <h2 className="home2__header__title">
          Get Ready for the 2024 Boulder Bike Tour!
        </h2>
        <div className="home2__header__subtitle">
          <p className="home2__header__description">
            The Boulder Bike Tour, a thrilling and esteemed bike race in Colorado's Rocky Mountains, happens every 10 years and is coming up next year!
          </p>
          <Link to={`/Gallery`} className="btn btn-secondary">DISCOVER THE GALLERY</Link>
        </div>
      </div>
      {isMobile ? (
        <div className="container__carousel">
            <Carousel className="home2__carousel" showThumbs={true} showStatus={true} showIndicators={true} showArrows={true} infiniteLoop autoPlay>
            {slideImages.map((slide, index) => (
            <div key={index}>
                <img src={slide} alt={`Cyclist ${index + 1}`} className="carousel__img"/>
            </div>
            ))}
            </Carousel>
        </div>
       
      ) : (
        <div className="home2__grid">
          <img src={cyclist1} className="home2__grid__item" alt="Cyclist 1" />
          <img src={cyclist2} className="home2__grid__item" alt="Cyclist 2" />
          <img src={cyclist3} className="home2__grid__item" alt="Cyclist 3" />
        </div>
      )}
    </div>
  );
}

export default Home2;
