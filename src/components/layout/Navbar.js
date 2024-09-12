import React from "react";
import { Menu } from 'semantic-ui-react'
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
      <Menu.Item
      as = {Link}
      to = '/Registration'
      name = 'Registration'/>
      <Menu.Item
      as = {Link}
      to = '/Login'
      name = 'Login'/>
     
    </Menu>

    )
}
export default Navbar;