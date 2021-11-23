import React from "react";
import exeTeam1 from './images/exeTeam1.PNG'
import exeTeam2 from './images/exeTeam2.PNG'
import exeTeam3 from './images/exeTeam3.PNG'
import exeTeam4 from './images/exeTeam4.PNG'
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
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width:  "17rem" 
 };

 const style1 = { 
    backgroundColor: "#FB4339",
    color: "#ffffff",
    width:  "17rem" 
 };
const AboutDiv6 = () => {
    return(
        <div className="container-fluid"  style={{marginTop: "140px"}}>
            <p className="aboutusHeading1" style={{ textAlign: "center"}}>Executive Team</p>
            <hr  className="aboutusDiv5-hr1"/>

            <div className="row">
                <div className="col-lg-3 col-md-12 col-sam-12">
                <Card style={style}>
        <CardImg
          alt="Founder"
          src={exeTeam1}
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
                <p className="AboutusCardText">Dr Rockley Moan</p>
                <p className="SemiAboutusCardText">Chief Executive Officer</p>
          </CardText>
        </CardBody>
      </Card>
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12">
                <Card style={style}>
        <CardImg
          alt="Founder"
          src={exeTeam2}
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
                <p className="AboutusCardText">Dr Rockley Moan</p>
                <p className="SemiAboutusCardText">Chief Operating Officer</p>
          </CardText>
        </CardBody>
      </Card>
                </div>

                <div className="col-lg-3 col-md-12 col-sam-12">
                <Card style={style}>
        <CardImg
          alt="Founder"
          src={exeTeam3}
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
                <p className="AboutusCardText">Dr Rockley Moan</p>
                <p className="SemiAboutusCardText">Chief Operating Officer</p>
          </CardText>
        </CardBody>
      </Card>
                </div>

        <div className="col-lg-3 col-md-12 col-sam-12">
        <Card style={style}>
        <CardImg
          alt="Founder"
          src={exeTeam4}
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
                <p className="AboutusCardText">Dr Rockley Moan</p>
                <p className="SemiAboutusCardText">Chief Operating Officer</p>
          </CardText>
        </CardBody>
      </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutDiv6;