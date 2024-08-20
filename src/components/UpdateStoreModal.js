import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

function UpdateStoreModal(props) {
  const[sName, setStoreName]= useState();
  const[address, setAddress]= useState();
  const[id, setId] = useState();
  async function Update(){
    const body = {
      name:sName,
      address:address
    }
    var data = await fetch(`https://localhost:44311/api/Store/updateStore/${id}`,
     {
      method:'Put',
      headers:{
           'Accept':'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Credentials':true
      },
        body:JSON.stringify(body)
     })
     var res = await data.json()
     console.log(res);
     props.fetch();
  }
  useEffect(()=>{
    setId(props.object.storeId)
    setStoreName(props.object.name);
    setAddress(props.object.address);
  },[props.object])
  return (
    <div>
      <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.onClose()}
      >
        <Modal.Header>Update Store</Modal.Header>
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
            Update();
            props.fetch();
            props.close()
          }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default UpdateStoreModal