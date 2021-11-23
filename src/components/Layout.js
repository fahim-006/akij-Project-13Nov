import {useEffect} from 'react';
import Menu from './Menu';

const Layout = ({title = 'Title', className, children}) => {

    useEffect(() => {
        // other code      
        document.title = title;
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) 

    return (
        <>
        
                <Menu/>
         
            <div className={className}>{children}</div>
        </>
    )
}

export default Layout;
