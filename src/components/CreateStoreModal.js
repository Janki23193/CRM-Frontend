import React, { useContext, useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { MyContext } from './CustomerContext';

function CreateStoreModal(props) {
  const {getStore} = useContext(MyContext);
  const[sName, setStoreName]= useState();
  const[address, setAddress]= useState();
  async function create(){
    const body = {
      name:sName,
      address:address
    }
    var data = await fetch('https://localhost:44311/api/Store/CreateStore',
     {
      method:'Post',
      headers:{
           'Accept':'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Credentials':true
      }, 
        body:JSON.stringify(body)
     })
     var res = await data.json()
     getStore();
     console.log(res);
  }
  return (
    <div>
      <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.close()}
      >
        <Modal.Header>Create Store</Modal.Header>
        <Modal.Content>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'storeName' label = 'Store'
          placeholder='Store' value={sName} onChange = {(event)=>setStoreName(event.target.value)}/>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'address' label = 'Address'
          placeholder='Address' value = {address} onChange = {(event)=>setAddress(event.target.value)}  />
          
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

export default CreateStoreModal