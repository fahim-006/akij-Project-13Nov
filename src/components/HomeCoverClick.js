import { useEffect, useState } from "react";
import { getAllVehicleDetails, getAllVehicleImages, getAllVehicleNames } from "../api";
import imageCover from './home/images/coverImage.png'
import Layout from './Layout';
var Carousel = require('react-responsive-carousel').Carousel;


const HomeCoverClick = () => {
    
    const [vehiclename, setvehiclename] = useState([]);
    const [VehicleDetails, setVehicleDetails] = useState([]);
    const [VehicleImages, setVehicleImages] = useState([]);

    useEffect(()=>{
        getAllVehicleNames()
          .then(response => {
            setvehiclename(response.data)
          })
          .catch(err => alert("Something went wrong!"))

        getAllVehicleDetails()
          .then(response => {
            setVehicleDetails(response.data)
          })
          .catch(err => alert("Something went wrong!"))

        getAllVehicleImages()
          .then(response => {
            setVehicleImages(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        
      },[]) 

    return(
        <Layout title="Akij Motors | Home">
        <div className="container-fluid homecover">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 homecover1">
                        {VehicleDetails.map((item) => {
                            return(
                                <p className="homeCoverTagline">{item.tagline}</p>
                            )
                         
                        })}

                {vehiclename.map((item1) => {
                            return(
                                <p className="homepageCoverName">{item1.VehicleName}</p>
                            )
                         
                        })}

                        <button className="homepageCoverButton">Details &nbsp;&nbsp;&nbsp; <i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 homecover3">
                        {VehicleImages.map((item2) => {
                              return(
                                  <>
                                <img src={imageCover} alt="imageCoverHome"/>
                                </>
                            )
                        })}
                </div>
            </div>
        </div>
        </Layout>
    )
}
export default HomeCoverClick;