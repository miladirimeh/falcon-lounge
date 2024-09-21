import { Fragment } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';
import Footer from './component/footer/Footer';
function App() {
  return (
    <Fragment>
    <Navs/>
    <Home/>  
    <Footer/>
    </Fragment>);

}

export default App;
