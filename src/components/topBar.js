import { Link } from "react-router-dom";

const Topbar = () => {
    return(
        <div className="container-fluid topbar">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="item-menu">
                    <Link to="/"><img  src='images/logo.png' alt="Logo" className="logoImage"/></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="item1-menu"> <li className="navLi"><a href="#home">CONTACT</a></li></div>
                    <div className="item1-menu">  <li className="navLi"><a href="#home">DEALER</a></li></div>
                    <div className="item1-menu"> <li className="navLi"><a href="#news">AKIJ GROUP</a></li></div>
                    <div className="item1-menu">  <li className="navLi"><a href="/aboutus">ABOUT US</a></li></div>
                    <div className="item1-menu"> <li className="navLi"><a href="/">HOME</a></li></div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;