import React, { useState } from 'react'
import {Modal, Button} from 'semantic-ui-react'

function DeleteStoreModal(props) {
const[id, setId] = useState();
async function Delete(){
      var data = await fetch(`https://localhost:44311/api/Store/DeleteStore/${id}`,
       {
        method:'Delete',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
       }) 
          var res = await data.json();
          props.fetch();
          console.log(res)
}
useState(()=>{
    setId(props.object.storeId)
},[props.object.storeId])

  return (
    <div>
    <Modal
    size={props.size}
    open={props.open}
    onClose={() => props.close()}
  >
    <Modal.Header>Delete Your Account</Modal.Header>
    <Modal.Content>
      <p>Are you sure you want to delete your account ${props.object.name}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={() => props.close()}>
        No
      </Button>
      <Button positive onClick={() =>
        { 
            Delete()
            props.close()
        }}>
        Yes
      </Button>
    </Modal.Actions>
  </Modal>
</div>
  )
}

export default DeleteStoreModal