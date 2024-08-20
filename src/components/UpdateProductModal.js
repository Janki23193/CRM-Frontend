import React, { useEffect, useState } from 'react'
import {Button, Modal, Form} from 'semantic-ui-react'

function UpdateProductModal(props) {
 const[pName, setProductName] = useState();
 const[price, setPrice] = useState();
 const[id, setId] = useState();
 
 async function Update(){
    const body = {
        name:pName,
        price:price
    }
      var data = await fetch(`https://localhost:44311/api/Product/updateProduct/${id}`,
      {
        method: 'Put',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
        },
        body:JSON.stringify(body)
      }) 
       await data.json();
       props.fetch();
 }

 useEffect(()=>{
    setId(props.object.productId)
    setProductName(props.object.name)
    setPrice(props.object.price)
 },[props.object])
  return (
     <div>
    <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.close()}
      >
        <Modal.Header>Update Product</Modal.Header>
        <Modal.Content>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'ProductName' label = 'Product Name'
          placeholder='ProductName' value = {pName} onChange = {(event)=>setProductName(event.target.value)} />
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'Price' label = 'Price'
          placeholder='Price' value = {price} onChange = {(event)=>setPrice(event.target.value)}  />
          
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

export default UpdateProductModal