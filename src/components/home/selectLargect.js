import img1 from '../home/servicing/images/largest/img1.PNG'
import img2 from '../home/servicing/images/largest/img2.PNG'
import img3 from '../home/servicing/images/largest/img3.PNG'

const Largest = () => {
    return(
        <div className="container-fluid" style={{marginTop: "60px",marginBottom: "60px" , backgroundColor: "#F7FAFC", }}>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p className="aboutusHeading" style={{textAlign: "center", left: "50%"}}>Largest Selection of Vehicles</p>
                    <p style={{left: "50%", textAlign: "center", color: "#000000"}}>
                        AKIJ Motors, one of the biggest auto mobile companies in Bangladesh. It has been working since 2016 <br/> with trust &amp; 
                        reputation. Akij Motors solely believes in total customer satisfaction with <br/>"Trust &amp; Mutual Benefit".
                        </p>
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12"></div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="grid-container-servicing-part2">
                            <div className="LargestBackgroundImg">
                                <img src={img1}/>
                                <p className="aboutusHeading1" style={{fontSize: "22px" ,textAlign: "center", left: "50%"}}>Find Bikes</p>
                                <button className="selectlargeButton">11,542</button>
                            </div>

                            <div className="LargestBackgroundImg">
                                <img src={img2}/> 
                                <p className="aboutusHeading1" style={{fontSize: "22px" ,textAlign: "center", left: "50%"}}>Find Bikes</p>
                                <button className="selectlargeButton">11,542</button>
                            </div>

                            <div className="LargestBackgroundImg">
                                <img src={img3}/>
                                <p className="aboutusHeading1" style={{fontSize: "22px" ,textAlign: "center", left: "50%"}}>Find Bikes</p>
                                <button className="selectlargeButton">11,542</button>
                            </div>

                        </div>
                    </div>
                <div className="col-lg-3 col-md-12 col-sm-12"></div>
            </div>
        </div>
    )
}

export default Largest;