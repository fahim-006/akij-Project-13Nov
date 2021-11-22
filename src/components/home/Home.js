import Layout from '../Layout';
import Footer from '../Footer/Footer';
import HomeCover from './homeCover';
import SelectType from './selectType';
import UnderSelectType from './underSelectType';
import AboutusDiv3 from '../about/aboutusDiv3';
import AboutUsDiv4 from '../about/aboutusDiv4';
import AboutDiv8 from '../about/aboutDiv8/aboutDiv8';
import Servicing from './servicing';
import Largest from './selectLargect';
import Navigation from '../Navigation';
import { useCallback, useState } from 'react';
import CategoryClick from '../categoryClick';

const Home = () => {
    const [show, setShow] = useState(true)
    const handleToggle = useCallback(()=> setShow(prevShow => !prevShow), []);
    return (
        <Layout title="Akij Motors | Home">
                      
            {show && <div>
                <Navigation onToggle = {handleToggle}/>
                <HomeCover/>
                <SelectType/>
                <UnderSelectType/>
                <Servicing/>
                <Largest/>
                <AboutusDiv3/>
                <AboutUsDiv4/>
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
export default Home;
