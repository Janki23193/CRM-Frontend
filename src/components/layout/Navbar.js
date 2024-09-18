import React from "react";
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const Navbar = ({isLoggedIn, usrName}) =>{
    return( 
    
    <Menu inverted>
      { isLoggedIn ? (
     <>
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
      <Menu.Item>
           Hello, {usrName}
       </Menu.Item>
       <Menu.Item
        as={Link}
        to = '/Login'
        name='Log out'
      />
     </>
     ):(
      <Menu.Menu position="right">
      <Menu.Item
        as = {Link}
        to = '/Registration'
        name = 'Registration'/>
      <Menu.Item
        as = {Link}
        to = '/Login'
        name = 'Login'/>
      </Menu.Menu>
       )}; 
    </Menu>
    )
}
export default Navbar;