import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

function CreateProductModal(props) {
    const[productName, setProductname]= useState();
    const[price, setPrice]= useState();
    
    async function Create(){
        var body = {Name:productName,
            Price: price
        }
        var data = await fetch('https://localhost:44311/api/Product/CreateProduct',
        {
         method : "Post",
         headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
         },
         body:JSON.stringify(body)
        }) 
        const res = await data.json();
        props.fetch();
        console.log(res)        
    }
  return (
    <div>
        <Modal
        size={props.size}
        open={props.open}
        onClose={()=>props.onClose()}
      >
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Content>
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'productName' label = 'Product'
          placeholder='Product Name' value = {productName} onChange = {(event)=>setProductname(event.target.value)}  />
          <Form.Input style = {{marginBottom: '1rem'}} fluid name = 'price' label = 'Price'
          placeholder='Price' value = {price} onChange = {(event)=>setPrice(event.target.value)}  />
          
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=> props.close()}>
            No
          </Button>
          <Button positive onClick={()=> {
            Create();
            props.close()
          }}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default CreateProductModal