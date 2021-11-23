import imageCover from './home/images/coverImage.png'

const HomeCoverClick = () => {
    return(      
        <div className="container-fluid homecover">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 homecover1">
                     <p className="homeCoverTagline">Very effective with minimum cost</p>
                           <p className="homepageCoverName">Electric Motorcycle Durdanto V6</p>
                          <button className="homepageCoverButton">Details &nbsp;&nbsp;&nbsp; <i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 homecover3">
                         <img src={imageCover} alt="imageCoverHome"/>                          
                </div>
            </div>
        </div>
    )
}
export default HomeCoverClick;