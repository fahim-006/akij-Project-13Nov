import client1 from './images/client1.PNG'
import client2 from './images/client2.PNG'
import client3 from './images/client3.PNG'
import client4 from './images/client4.PNG'
import client5 from './images/client5.PNG'
import client6 from './images/client6.PNG'
import client7 from './images/client7.PNG'
import client8 from './images/client8.PNG'
import client9 from './images/client9.PNG'
import client10 from './images/client10.PNG'
import client11 from './images/client11.PNG'
import client12 from './images/client12.PNG'

const AboutDiv7 = () => {
    return(
        <div className="container-fluid"  style={{ padding: "100px"}}>
            <p className="aboutusHeading1" style={{left: "50%", textAlign: "center"}}>Clients</p>
                <hr  className="aboutusDiv5-hr1"/>
            <div className="flex-container-client">
                    <div className="flex-item-client">
                        <img src={client1} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client2} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client3} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client4} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client5} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client6} alt="client" className="img-thumbnail"/>
                    </div>
                    <div className="flex-item-client">
                        <img src={client7} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client8} alt="client" className="img-thumbnail"/>
                    </div>
                    <div className="flex-item-client">
                        <img src={client9} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client10} alt="client" className="img-thumbnail"/>
                    </div>
                    
                    <div className="flex-item-client">
                        <img src={client11} alt="client" className="img-thumbnail"/>
                    </div>

                    <div className="flex-item-client">
                        <img src={client12} alt="client" className="img-thumbnail"/>
                    </div>
            </div>
        </div>
    );
}

export default AboutDiv7;