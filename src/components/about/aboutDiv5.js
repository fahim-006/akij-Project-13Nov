import React from "react";
import Founder from './images/Founder.jpg'
import Facebook from './images/fb.png'
import Instagram from './images/instagram.png'
import Twitter from './images/twitter.jpg'

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardText,
} from "reactstrap";

const style = { 
    width: "22rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
 };

 const style1 = { 
    backgroundColor: "#FB4339",
    color: "#ffffff"
 };
function AboutDiv5() {
  return (
    <div style={{marginTop: "70px"}}>
        <p className="aboutusHeading" style={{textAlign: "center", left: "50%"}}>Meet Our Team</p>
        <p className="aboutusHeading1" style={{left: "50%", textAlign: "center"}}>Senior Leadership</p>
      <div className="chairmain">
      <Card>
        <CardImg
          alt="Founder"
          src={Founder}
          top
        ></CardImg>
        <CardBody style={style1}>
          <CardText>
                <div className="flex-container-card">
                    <div className="flex-item-card">
                        <img src={Facebook}  alt="image" style={{borderRadius: "50%"}} width="50%"/>
                    </div>

                    <div className="flex-item-card">
                    <img src={Instagram}  alt="image" style={{borderRadius: "50%"}} width="50%"/>
                    </div>

                    <div className="flex-item-card">
                    <img src={Twitter}  alt="image" style={{borderRadius: "50%"}} width="50%"/>
                    </div>
                </div>
                <p className="AboutusCardText">Sheikh Akijuddin</p>
                <p className="SemiAboutusCardText">Founder &amp; Chairman</p>
          </CardText>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

export default AboutDiv5;