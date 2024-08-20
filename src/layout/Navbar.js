import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <Menu inverted>
        <Menu.Item
        as={Link}
        to= '/customer'
        name = 'customer'
          
        />
        <Menu.Item
         as={Link}
         to = '/product'
          name='Product'
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