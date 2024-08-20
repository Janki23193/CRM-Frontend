import React,{ Component } from "react";
import {NavLink, Router} from "react-router-dom";
import { Input, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return(
      
      <Menu inverted>
      <Menu.Item
      as={Link}
      to= '/customer'
      name = 'customer'
        
      />
      <Menu.Item
       as={Link}
       to = '/product'
        name='product'
      />
      <Menu.Item
        as={Link}
        to = '/store'
        name='Store'
      />
       <Menu.Item
        as={Link}
        to = '/sales'
        name='Sales'
      />
     
    </Menu>

    )
}
export default Navbar;

{/* <div>
    <NavLink  to = "/">React User</NavLink>
    <button >
      <span >Create Customer</span>
    </button> 
    <div  >
      <ul >
      <li >
          <NavLink   to = "/">Home</NavLink>
        </li>
        <li>
          <NavLink   to ="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to ="/sales">Sales</NavLink>
        </li>
        <li>
          <NavLink to ="/customer">Customer</NavLink>
        </li>
        <li>
          <NavLink  to ="/store">Store</NavLink>
        </li>
      </ul>
    </div>
  </div>   */}