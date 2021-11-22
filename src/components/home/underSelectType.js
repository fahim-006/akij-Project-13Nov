import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/img1.PNG'
import img2 from './images/img2.PNG'
import img3 from './images/img3.PNG'
import belowType from './images/belowType.jpg'

const UnderSelectType = () => {
    return(
        <div style={{ backgroundImage: `url(${belowType})`}} className="underSelectTypeBackground">
        <Carousel
            centerMode
            showStatus={false}
            dynamicHeight={false}
            arrows={true}
            emulateTouch
            swipeScrollTolerance={50}
            centerSlidePercentage={30}
            showThumbs={false}
            showIndicators>

            <div className="divUnderSelectType">
            <img src={img1} className="imgUnderSelectType"  alt="image"/>
            <div className="myCarousel1">
                <h3>AKIJ Pickup (Bijoy) 1.5 Ton Diesel</h3>
              
            </div>
            </div>

            <div className="divUnderSelectType">
            <img className="imgUnderSelectType" src={img2} />
            <div className="myCarousel1">
                <h3>Electric Motorcycle Bondhu</h3>
              
            </div>
            </div>

            <div className="divUnderSelectType">
            <img className="imgUnderSelectType" src={img3} />
            <div className="myCarousel1">
                <h3>Refrigerator VAN</h3>
               
            </div>
            </div>
        </Carousel>
    
    </div>
    )
}

export default UnderSelectType;