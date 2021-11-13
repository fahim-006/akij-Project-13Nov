import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Menu = () => {
    return (
        <>
     
       <div className="container-fluid grid-container-menu">
   
             <div className="item-menu">
                    <img  src='images/logo.png' alt="Logo" className="logoImage"/>
                </div>
             
                <div className="item1-menu"> <li className="navLi"><a href="/">HOME</a></li></div>
                <div className="item1-menu">  <li className="navLi"><a href="/aboutus">ABOUT US</a></li></div>
                <div className="item1-menu"> <li className="navLi"><a href="#news">AKIJ GROUP</a></li></div>
                <div className="item1-menu">  <li className="navLi"><a href="#home">DEALER</a></li></div>
                <div className="item1-menu"> <li className="navLi"><a href="#home">CAREER</a></li></div>  
                <div className="item1-menu"> <li className="navLi"><a href="#home">CONTACT</a></li></div>
              
            </div>
       
        <Navigation/>
        </>
    )
}

export default Menu;
