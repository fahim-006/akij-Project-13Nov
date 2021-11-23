import HomeCoverClick from "./HomeCoverClick";
import Sidebar from "./Sidebar";

const CategoryClick = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12">
                    <Sidebar/>
                </div>
                  
                <div className="col-lg-10 col-md-12 col-sm-12" 
                style={{opacity: "0.5",  background: 'transparent linear-gradient(180deg, #BF0000 0%, #A40000 100%, #808080 100%) 0% 0% no-repeat padding-box' }}>
                        <HomeCoverClick/>
                </div>
            </div>
        </div>
    )
}

export default CategoryClick;