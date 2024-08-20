import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

function UpdateCustomer(props) {
 const[customerName, setCustomerName] = useState();
 const[address, setAddress] = useState();
 const[id, setId]= useState();

 async function Update(){
    const body={
        name:customerName,
        address:address
    }
        var data = await fetch(`https://localhost:44311/api/Customer/updateCustomer/${id}`,{
            method: 'Put',
            headers:{
                 'Accept': 'application/json',
                 'Content-Type':'application/json',
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Credentials': true
               },
               body:JSON.stringify(body)
        })
         await data.json();
         props.fetch();

 }
 useEffect(()=>{
    setId(props.object.customerId);
    setCustomerName(props.object.name);
    setAddress(props.object.address);
 },[props.object])

 return (
    <div>
    <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.close()}
      >
        <Modal.Header>Update Customer</Modal.Header>
        <Modal.Content>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'customerName' label = 'Customer'
          placeholder='customerName' value={customerName} onChange = {(event)=>setCustomerName(event.target.value)}/>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'address' label = 'Address'
          placeholder='Address' value = {address} onChange = {(event)=>setAddress(event.target.value)}  />
          
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=> props.close()}>
            No
          </Button>
          <Button positive onClick={()=> {
            Update();
            props.close()
          }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default UpdateCustomer