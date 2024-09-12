import React, { useState } from 'react';
import { Form, Button} from 'semantic-ui-react';

const Registration = () => {
    const[formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const submitData = (e)=> {
      e.preventDefault()
    }
  return (
    <div style={{width: '400px', margin: '0 auto', padding: '2rem'}}>
        <h2>Registration</h2>
        <Form onSubmit={submitData}>
            <Form.Input
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
            />
            <Form.Input
            label = 'Email'
            placeholder = 'Enter Email'
            value = {formData.email}
            name = 'email'
            required
            />
            <Form.Input
            label = 'Password'
            placeholder = 'Enter Password'
            value = {formData.password}
            name = 'password'
            required
            />
            <Form.Input
            label = 'Confirm Password'
            placeholder = 'Enter Confirm Password'
            value = {formData.confirmPassword}
            name = 'confirmPassword'
            required
            />
            <Button primary>Registration</Button>
        </Form>
       
    </div>
  )
}

export default Registration