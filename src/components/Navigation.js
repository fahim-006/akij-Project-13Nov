import { useState } from "react";

const Navigation = ({onToggle}) => {
      const [show, setShow] = useState("false");

      const toggleClass = () => {
            setShow(!show);
          };
      
    return(
          <div>     
            <div className="container-fluid navCategory grid-container">
                  <div className="item1" onClick={onToggle} >
                        <svg
                              
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 412"
                              height="1em"
                              width="2em"
                              xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                              fill="none"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              strokeWidth="48"
                              d="M88 152h336M88 256h336M88 360h336"
                        ></path>
                        </svg> CATEGORIES
                        </div>
                              <div className="item">COMMERCIAL VEHICLE</div>
                              <div className="item">PRIVATE VEHICLE</div>
                              <div className="item">MOTOR SERVICING</div>  
                              <div className="item">GARAGE EQUIPMENTS</div>
                              <div className="item">SPARE PARTS</div>
                              <div className="item">ELECTRIC MOTORCYCLE</div>
                              <div className="item">FORLIFT/STACKER</div>
                              <div className="item">CONSTRUCTION MACHINERY</div>
                              <div className="item">SPECIAL VEHICLE</div>
                        </div>

              </div>
    )
}

export default Navigation;