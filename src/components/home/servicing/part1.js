import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'

const ServicingPart1 = () => {
    return(
        <div className="container-fluid servicingPart1">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 rightDivSerivinfPart1">
                       <p className="rightDivSerivinfPart1para">AKIJ Motors solely believes in total customer satisfaction with "Trust &amp; Mutual Benefit". 
                           With this particular view, the Akij Motors introduces a One Stop Automobile Solution in Bangladesh and proudly announces the affiliation with some of world's renowned automobile &amp; garage equipment manufacturers.
                      </p>
                    <div className="grid-container-servicing">
                            <div>
                                <img src={img1}/>
                                <h6>Super Fast</h6>
                                <p>Confidence in Motion. Creating a Higher Standard. Creative technologie.</p>
                            </div>

                            <div>
                                <img src={img2}/>
                                <h6>Air conditioning</h6>
                                <p>Clean air for your breathing. Just the right temparature. </p>
                            </div>

                            <div>
                                <img src={img3}/>
                                <h6>Transmission</h6>
                                <p>GRACE, SPACE, PACE </p>
                            </div>

                            <div>
                                <img src={img4}/>
                                <h6>Dealership</h6>
                                <p>Affordability at your fingertip. </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicingPart1;