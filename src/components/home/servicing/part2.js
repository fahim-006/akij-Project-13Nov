import airCondition from './images/part2/airCondition.jpg'
import battery from './images/part2/battery.PNG'
import engineManagement from './images/part2/engineManagement.jpg'
import stearing from './images/part2/stearing.jpg'
import suspension from './images/part2/suspension.jpg'
import wheel from './images/part2/wheel.jpg'

const ServicingPart2 = () =>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12"></div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="grid-container-servicing-part2">
                        <div style={{backgroundImage: `url(${battery})`}} className="servicingPart2BackgroundImg">
                            <h4 className="servicingPart2h6">battery</h4>
                        </div>

                        <div style={{backgroundImage: `url(${airCondition})`}}  className="servicingPart2BackgroundImg"> 
                            <h6 className="servicingPart2h6">AIR CONDITIONING</h6>
                        </div>

                        <div style={{backgroundImage: `url(${stearing})`}}  className="servicingPart2BackgroundImg">
                            <h6 className="servicingPart2h6">STEEGING</h6>
                        </div>

                        <div style={{backgroundImage: `url(${engineManagement})`}}  className="servicingPart2BackgroundImg">
                            <h6 className="servicingPart2h6">ENGINE MANAGEMENT</h6>
                        </div>

                        <div style={{backgroundImage: `url(${suspension})`}}  className="servicingPart2BackgroundImg">
                            <h6 className="servicingPart2h6">SUSPENSION</h6>
                        </div>

                        <div style={{backgroundImage: `url(${wheel})`}}  className="servicingPart2BackgroundImg">
                            <h6 className="servicingPart2h6">WHEEL</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12"></div>
            </div>
        </div>
    )
}

export default ServicingPart2;