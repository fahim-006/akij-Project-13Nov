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
                  
                            
                         
                                            <div>
                                                <img src={sedan}/>
                                                <p>SEDAN </p>
                                            </div>


                                            <div>
                                                <img src={crossover}/>
                                                <p>CROSSOVER </p>
                                            </div>
                      
                                            <div>
                                                <img src={pickup}/>
                                                <p>PICKUP TRUCK</p>
                                         </div>

                                            <div>
                                                <img src={sportscar}/>
                                                <p>SPORTS CAR</p>
                                            </div>
                                    

                                            <div>
                                                <img src={suv}/>
                                                <p>SUV </p>
                                            </div>
                                   

                                            <div>
                                                <img src={convertable}/>
                                                <p>CONVERTABLE </p>
                                            </div>
                                      
                                            <div>
                                                <img src={luxury}/>
                                                <p>LUXURY CAR </p>
                                            </div>

                             
                                            <div>
                                                <img src={certified}/>
                                                <p>CERTIFIED CAR</p>
                                            </div>
                                      
                           
              
                </div>
                </div>

             
          
        </div>
    );
}

export default SelectType;