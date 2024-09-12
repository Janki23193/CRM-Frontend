import './App.css';
import Product from "./components/Product";
import Store from "./components/Store";
import Sales from "./components/Sales";
import Customer from "./components/Customer";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
              <Route exact path = '/Registration' element = {<Registration/>} />
              <Route exact path='/Login' element = {<Login/>} />
            </Routes>    
          </div>
      </Router>
    </Scontext>
    
   
  );
}



export default App;
