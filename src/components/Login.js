import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'semantic-ui-react';

const Login = ({setIsLoggedIn, setUserName}) => {
  const[error, setError] = useState('');
  const [loginDetails, setLoginDetails] = useState({
    email : '',
    password : ''
  });

  const navigate = useNavigate();
  async function submitLoginData(e){
      e.preventDefault();
      var body = {
        email: loginDetails.email,
        password: loginDetails.password
      }
      try{
        var data = await fetch('https://localhost:44311/api/Account/Login',{
          method:'post',
          headers:{
              'Accept' : 'application/json',
              'Content-Type' : 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Credentials' : true
          },
          body:JSON.stringify(body)
        });
        if(data.ok){
         const res = await data.json();
         //console.log(res);   
         setIsLoggedIn(true);
         if(res){
           setUserName(res.userName);
         }
         else{
          console.error("UserName is not found in the response", res); 
         }
        
         navigate('/home');
         console.log('successfull login');
        } else{
          const errorMessage = await data.text();
          setError('Login failed: ' + errorMessage);
        }
      } catch{
        setError("Error Occured! Please try again later");
        console.error('Error', error);
      }
      
     
  }
  return (
    <div className='loginLayout'>
      <h2>Login</h2>
      <Form onSubmit={submitLoginData}>
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