import './App.css';
import Product from "./components/Product";
import Store from "./components/Store";
import Sales from "./components/pages/Sales";
import Customer from "./components/Customer";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer1 from './components/pages/Footer1';
import Input from './components/pages/Input';
import 'semantic-ui-css/semantic.min.css'
import { Scontext } from './components/CustomerContext';

function App() {
  return (
    <Scontext>
      <Router>
        <div className="App">
            <Navbar/>
            <Routes>
            <Route exact path='/' element = {<Home/>}/>
              <Route exact path='/Customer' element = {<Customer/>}/>
              <Route exact path='/Store' element ={<Store/>} />
              <Route exact path = '/Sales' element = {<Sales/>} />
              <Route exact path = '/Product' element = {<Product/>} />
            </Routes>    
          </div>
      </Router>
    </Scontext>
    
   
  );
}



export default App;
