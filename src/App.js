import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom'
import { Navigation } from 'swiper';


function App() {
  return (  
      <BrowserRouter>
        <Main />
      </BrowserRouter>
   

  );
}

export default App;
