import React, { useState } from 'react';
import { json } from 'react-router-dom';
import { Form, Button} from 'semantic-ui-react';

const Registration = () => {
    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    async function submitData(e){
      e.preventDefault();
      var body = {
        Email : formData.email,
        Password : formData.password,
        confirmPassword : formData.confirmPassword
      }
      var data = await fetch('https://localhost:44311/api/Account/Register',{
        method: 'Post',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials' : true
        },
        body:JSON.stringify(body)
      }) 
      const res = await data.json();
      console.log(res);
    }
  return (
    <div className='registerLayout'>
        <h2>Registration</h2>
        <Form onSubmit={submitData}>
            {/* <Form.Input
            label = 'First Name'
            placeholder = 'Enter First Name'
            value = {formData.firstName}
            name = 'firstname'
            required
            />
            <Form.Input
            label = 'Last Name'
            placeholder = 'Enter Last Name'
            value = {formData.lastName}
            name = 'lastname'
            required
            /> */}
            <Form.Input
            label = 'Email'
            placeholder = 'Enter Email'
            value = {formData.email}
            name = 'email'
            onChange={(e)=> setFormData({...formData, email:e.target.value})}
            required
            />
            <Form.Input
            label = 'Password'
            placeholder = 'Enter Password'
            value = {formData.password}
            type='password'
            name = 'password'
            onChange={(e) => setFormData({...formData, password:e.target.value})}
            required
            />
            <Form.Input
            label = 'Confirm Password'
            placeholder = 'Enter Confirm Password'
            value = {formData.confirmPassword}
            type='password'
            name = 'confirmPassword'
            onChange={(e) => setFormData({...formData, confirmPassword:e.target.value})}
            required
            />
            <Button primary>Registration</Button>
        </Form>
       
    </div>
  )
}

export default Registration