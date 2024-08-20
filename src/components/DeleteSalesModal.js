import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function DeleteSalesModal(props) {
    const[id, setId] = useState();

async function DeleteSales(){
    const data = await fetch(`https://localhost:44311/api/Sales/DeleteSales/${id}`,{
        method:'Delete',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    })
    const res = await data.json();
    props.fetch();
    console.log(res)
}
useEffect(()=>{
    setId(props.object)
},[props.object])
console.log(props.object)

  return (
    <div>
        <Modal
            size = {props.size}
            open = {props.open}
            onClose = {()=>props.close()}
            >
        <Modal.Header>Delete your account</Modal.Header>
        <Modal.Content>
            <p>Are you sure you want to delete your account ${props.object}</p>
        </Modal.Content>
        <Modal.Actions>
            <Button negative onClick={()=> props.close()}>
                No
            </Button>
            <Button positive onClick={()=> {
               DeleteSales()
               props.close()
            }}>
                Yes
            </Button>
        </Modal.Actions>
        </Modal>
    </div>
  )
}

export default DeleteSalesModal