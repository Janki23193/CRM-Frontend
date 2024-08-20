import React from 'react'
import { Dropdown, Label, Modal, ModalContent, Button } from 'semantic-ui-react'

function UpdateSales(props) {
  return (
    <div>
     <Modal
      open ={props.open}
      size = {'small'}
      onclose = {props.close}>
        <Modal.Header>
            Update Sale
        </Modal.Header>
        <Modal.Content>
          <Label>Datesold</Label>
        </Modal.Content>
        <Modal.Content>
          <Label>Customer</Label>
         <Dropdown>
          
         </Dropdown>
        </Modal.Content>
        <Modal.Content>
          <Label>Store</Label>
          <Dropdown>

          </Dropdown>
        </Modal.Content>
        <Modal.Content>
          <Label>Product</Label>
          <Dropdown>

          </Dropdown>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=>props.close()}>
            No
          </Button>
          <Button positive onClick={()=>props.close()}>
           Yes
          </Button>
        </Modal.Actions>
     </Modal>
    </div>
  )
}

export default UpdateSales