import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import partner1 from '../images/partner1.PNG'
import partner2 from '../images/partner2.PNG'
import partner3 from '../images/partner3.PNG'
import partner4 from '../images/partner4.PNG'
import partner5 from '../images/partner5.PNG'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const AboutDiv8 = () => {
    return(
        <div>
            <p className="aboutusHeading1" style={{left: "50%", textAlign: "center", marginTop: "20px"}}>Partners</p>
            <hr  className="aboutusDiv5-hr1"/>
            <div  className="partnerDivno8">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
            >
                <div> <img src={partner1} alt="partner" className="img-thumbnail"/></div>
                <div><img src={partner2} alt="partner" className="img-thumbnail"/></div>
                <div><img src={partner3} alt="partner" className="img-thumbnail"/></div>
                <div><img src={partner4} alt="partner" className="img-thumbnail"/></div> 
                <div><img src={partner5} alt="partner" className="img-thumbnail"/></div>
            </Carousel>;
            </div>
        </div>
    )
}

export default AboutDiv8;