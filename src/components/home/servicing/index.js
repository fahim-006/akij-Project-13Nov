import ServicingPart1 from "./part1"
import ServicingPart2 from "./part2";

const Servicing = () =>{
    return(
        <div>
             <div className="col-lg-12 col-md-12 col-sm-12" style={{marginTop: "30px", marginBottom: "30px"}}>
                    <p className="aboutusHeading1" style={{textAlign: "center", left: "50%"}}>OUR SERVICING </p>
                </div>
            <ServicingPart1/>
            <ServicingPart2/>
        </div>
    )
}

export default Servicing;