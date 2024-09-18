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
import { useState } from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[usrName, setUserName] = useState('');
  return (
    <Scontext>
      <Router>
        <div className="App">
            <Navbar isLoggedIn = {isLoggedIn} usrName={usrName}/>
            <Routes>
              <Route exact path='/' element = {<Home/>}/>
              <Route exact path='/Customer' element = {isLoggedIn ? <Customer/>: <Login/>}/>
              <Route exact path='/Store' element ={isLoggedIn ? <Store/>: <Login/>} />
              <Route exact path = '/Sales' element = {isLoggedIn ? <Sales/> : <Login/>} />
              <Route exact path = '/Product' element = {isLoggedIn ? <Product/> : <Login/>} />
              <Route exact path = '/Registration' element = {<Registration/>} />
              <Route exact path='/Login' element = { isLoggedIn ? 'Log out' : <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>} />
            </Routes>    
          </div>
      </Router>
    </Scontext>  
  );
}



export default App;
