import React, { useState } from 'react';
import {Form, Button} from 'semantic-ui-react';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email : '',
    password : ''
  });
  async function submitLoginData(e){
      e.preventDefault();
      var body = {
        email: loginDetails.email,
        password: loginDetails.password
      }
      var data = await fetch('https://localhost:44311/api/Account/Login',{
        method:'post',
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : true
        },
        body:JSON.stringify.JSON(body)
      })
      const res = await data.json();
      console.log(res)
  }
  return (
    <div className='loginLayout'>
      <h2>Login</h2>
      <Form>
        <Form.Input
         label = 'Email'
         name = 'email'
         value = {loginDetails.email}
         placeholder = 'Please Enter Email'
         onChange = {(e)=>setLoginDetails({...loginDetails,email:e.target.value})}
         required
        />
        <Form.Input
         label = 'Password'
         name = 'password'
         value = {loginDetails.password}
         type='password'
         placeholder = 'Please enter password'
         onChange = {(e)=>setLoginDetails({...loginDetails, password:e.target.value})}
         required
        />
        <Button primary>Login</Button>
      </Form>        
    </div>
  )
}

export default Login