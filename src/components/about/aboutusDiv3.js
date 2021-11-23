
const AboutusDiv3 = () => {
    const style = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px"
    };
    return(
        <div className="container-fluid" style={{marginTop: "20px"}} >
              <p className="aboutusHeading1" style={{textAlign: "center", left: "50%"}}>Why People Love Us So Much</p>
                <p className="aboutusparagraphdiv3" style={{left: "50%", textAlign: "center"}}>
                    AKIJ Motors solely believes in total customer satisfaction with "Trust &amp; Mutual Benefit". With this particular view.
                    </p>

            <img src="images/div3About.png"  alt="image" style={style} className="img-fluid"/>
        </div>
    );
}

export default AboutusDiv3;