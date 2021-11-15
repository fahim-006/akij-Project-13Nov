import FooterMain from './images/Footer.PNG'
import Facebook from './images/fb.PNG'
import Instagram from './images/instagram.PNG'
import Twitter from './images/twitter.PNG'
import Youtube from './images/youtube.PNG'
import Map from './images/footerMap.PNG'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <img  src={FooterMain} alt="Logo" width="100%" className="FooterImage"/>
                            <div className="flex-container-card">
                                <div className="flex-item-card">
                                    <img src={Facebook} style={{borderRadius: "50%"}} width="50%"/>
                                </div>

                                <div className="flex-item-card">
                                <img src={Instagram}  style={{borderRadius: "50%"}} width="50%"/>
                                </div>

                                <div className="flex-item-card">
                                <img src={Twitter}  style={{borderRadius: "50%"}} width="50%"/>
                                </div>

                                <div className="flex-item-card">
                                    <img src={Youtube}  style={{borderRadius: "50%"}} width="50%"/>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <div class="flex-container-footer-link">
                            <div class="flex-item-footer-link" style={{fontWeight: "bold"}}>
                                SUPPORT
                            </div>

                            <div class="flex-item-footer-link">
                                Blog
                            </div>

                            <div class="flex-item-footer-link">
                                FAQ
                            </div>

                            <div class="flex-item-footer-link">
                                Calculator
                            </div>

                            <div class="flex-item-footer-link">
                                Powerpoint(PPTX)
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <div class="flex-container-footer-link">
                                <div class="flex-item-footer-link" style={{fontWeight: "bold"}}>
                                    Delearship
                                </div>

                                <div class="flex-item-footer-link">
                                    Apply
                                </div>

                                <div class="flex-item-footer-link">
                                    Required Document
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <div class="flex-container-footer-link">
                                <div class="flex-item-footer-link" style={{fontWeight: "bold"}}>
                                    LINKS
                                </div>
                                <div class="flex-item-footer-link">
                                    Terms &amp; Conditions
                                </div>

                                <div class="flex-item-footer-link">
                                    Privacy &amp; Policy
                                </div>

                                <div class="flex-item-footer-link">
                                    Dealer
                                </div>

                                <div class="flex-item-footer-link">
                                    Career
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <div class="flex-container-footer-link">
                                <div class="flex-item-footer-link" style={{fontWeight: "bold"}}>
                                    Location
                                </div>
                                <div class="flex-item-footer-link">
                                    <img  src={Map} alt="Map" width="150%" className="FooterImage"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
         </div>
    );
}

export default Footer;