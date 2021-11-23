import { Switch, Route, Redirect} from 'react-router-dom'
import About from './about/About';
import CategoryClick from './categoryClick';
import Home from './home/Home'

const Main = () => {
    return (
    <div>
        <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/aboutus" exact component={About} />
            <Route path= "/navbarclick" component={CategoryClick}/>
        </Switch>
    </div>
    )
}

export default Main;
