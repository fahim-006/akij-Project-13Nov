import Layout from '../Layout';
import AboutDiv1 from './aboutDiv1';
import AboutusDiv2 from './aboutUsDiv2';
import AboutusDiv3 from './aboutusDiv3';
import AboutDiv5 from './aboutDiv5';
import AboutusDiv4 from './aboutusDiv4';
import AboutCover from './cover';
import AboutDiv6 from './aboutDiv6';
import AboutDiv7 from './aboutDiv7';
import AboutDiv8 from './aboutDiv8/aboutDiv8';
import Footer from '../Footer/Footer';
import { useCallback, useState } from 'react';
import CategoryClick from '../categoryClick';
import Navigation from '../Navigation';


const About = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <Layout title="Akij Motors | About us">
             {show && 
                <div>
                    <Navigation onToggle = {handleToggle}/>
                    <AboutCover/>
                    <AboutDiv1/>
                    <AboutusDiv2/>
                    <AboutusDiv3/>
                    <AboutusDiv4/>
                    <AboutDiv5/>
                    <AboutDiv6/>
                    <AboutDiv7/>
                    <AboutDiv8/>
                    <Footer/>
                </div>
            }

            {!show && <div>
                <Navigation onToggle = {handleToggle}/>
                <CategoryClick/>
                </div>
                }       
        </Layout>
    )
}
export default About;
