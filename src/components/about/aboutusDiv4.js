import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
  
const AboutUsDiv4 = (props) => {

    return(
        <div style={{marginTop:"100px", backgroundColor:"#F7FAFC"}} className="aboutDiv4Main">
             <p className="aboutusHeading1" style={{left: "50%", textAlign: "center"}}>Testomonial</p>
             <p className="aboutusHeading1" style={{left: "50%", textAlign: "center", fontSize:"30px", fontWeight:"normal"}}>See what people say about our company</p>
             <hr  className="aboutusDiv4-hr1"/>
            <Carousel
              centerMode
              showStatus={false}
              dynamicHeight={false}
              arrows={false}
              emulateTouch
              swipeScrollTolerance={50}
              centerSlidePercentage={30}
              showThumbs={false}
              showIndicators>

                <div>
                <img src="/images/shirley.png" className="imgAboutDiv4" alt="image"/>
                <div className="myCarousel">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site
                    </p>
                </div>
                </div>

                <div>
                <img className="imgAboutDiv4"  src="/images/daniel.png" />
                <div className="myCarousel">
                    <h3>Daniel Keystone</h3>
                    <h4>Designer</h4>
                    <p>
                    The simple and intuitive design makes it easy for me use. I highly
                    recommend Fetch to my peers.
                    </p>
                </div>
                </div>

                <div>
                <img  className="imgAboutDiv4"  src="/images/theo.png" />
                <div className="myCarousel">
                    <h3>Theo Sorel</h3>
                    <h4>Designer</h4>
                    <p>
                    I enjoy catching up with Fetch on my laptop, or on my phone when
                    I'm on the go!
                    </p>
                </div>
                </div>
            </Carousel>
            

        </div>
        
    );
    
}


export default AboutUsDiv4;