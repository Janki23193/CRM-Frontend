import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
function CreateModal(props) {

  const [name, setName] = useState('');
  const[address, setAddress] = useState('');
  async function create(){
   var body = {Name:name,
    Address:address 
   }

  var data = await fetch('https://localhost:44311/api/Customer/CreateCustomer',{
         method: 'Post',
         headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Credentials':true
         },
         body:JSON.stringify(body)
      })
      const res = data.json();
      props.fetch();
      console.log(res);
  }
  return (
    <div>  
   <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.onClose()}
      >
        <Modal.Header>Create Customer</Modal.Header>
        <Modal.Content>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'name' label = 'Name'
          placeholder='Name' value = {name} onChange = {(event)=>setName(event.target.value)} />
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'address' label = 'Address'
          placeholder='Address' value = {address} onChange = {(event) => setAddress(event.target.value)}  />
          
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=> props.close()}>
            No
          </Button>
          <Button positive onClick={()=> {
            create();
            props.close()
          }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )

  }



export default CreateModal