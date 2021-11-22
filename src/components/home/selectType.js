import { useEffect, useState } from 'react';
import { getAllVehicleTypes } from '../../api';
import top from './images/top.png'
import certified from './images/typeImage/certified.png'
import convertable from './images/typeImage/convertable.png'
import crossover from './images/typeImage/crossover.png'
import luxury from './images/typeImage/luxury.png'
import pickup from './images/typeImage/pickup.png'
import sedan from './images/typeImage/sedan.png'
import sportscar from './images/typeImage/sportscar.png'
import suv from './images/typeImage/suv.png'

const SelectType = () => {
    const [types, setTypes] = useState([]);

    useEffect(()=>{
        getAllVehicleTypes()
        .then(response => {
            setTypes(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        },[])

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <img 
                        src={top}
                        className="selectTypeTop" 
                        alt="select your type"
                        />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 grid-container-selecttype">
                  
                            
                            {types.map((item) => {
                                if(item.typeofVehicle==="SEDAN"){
                                    return(
                                        <>
                                            <div>
                                                <img src={sedan}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle==="CROSSOVER"){
                                    return(
                                        <>
                                            <div>
                                                <img src={crossover}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle==="PICKUP TRUCK"){
                                    return(
                                        <>
                                            <div>
                                                <img src={pickup}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle==="SPORTS CAR"){
                                    return(
                                        <>
                                            <div>
                                                <img src={sportscar}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle=="suv"){
                                    return(
                                        <>
                                            <div>
                                                <img src={suv}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle=="convertible"){
                                    return(
                                        <>
                                            <div>
                                                <img src={convertable}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle=="luxury car"){
                                    return(
                                        <>
                                            <div>
                                                <img src={luxury}/>
                                                <p>{item.typeofVehicle.toUpperCase()} </p>
                                            </div>
                                        </>
                                    )
                                }

                                if(item.typeofVehicle=="certified car"){
                                    return(
                                        <>
                                            <div>
                                                <img src={certified}/>
                                                <p>{item.typeofVehicle.toUpperCase} </p>
                                            </div>
                                        </>
                                    )
                                }
                         
                        })}
                           
              
                </div>
                </div>

             
          
        </div>
    );
}

export default SelectType;