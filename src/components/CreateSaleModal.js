import React, {useContext, useState}from 'react'
import { Dropdown, Modal, Button, Label } from 'semantic-ui-react';
import { MyContext } from './CustomerContext';



function CreateSaleModal(props) {
  const[customerId, setcustomerId] = useState([]);
  const[productId, setproductId] = useState([]);
  const[storeId, setstoreId] = useState([]);
  const {getCusdata} = useContext(MyContext);
  console.log(getCusdata);

  const {getProddata} = useContext(MyContext);
  console.log(getProddata);

  const {getStoredata} = useContext(MyContext);
  console.log(getStoredata)

  const customerOption = getCusdata.map(e=>({
    key:e.customerId,value:e.customerId, text:e.name
  }))

  const productOptions = getProddata.map(e=>({
    key:e.productId, value:e.productId, text:e.name
  }))

  const storeOptions = getStoredata.map(e=>({
    key:e.storeId, value:e.storeId, text:e.name
  }))

const currentdate = new Date();
console.log(currentdate)
const Datesold = currentdate.toJSON();

function customerdrop(e, {value}){
 setcustomerId(value);
 console.log(value);
}
function storedrop(e,{value}){
  setstoreId(value);
  console.log(value);
}
function productdrop(e,{value}){
  setproductId(value);
  console.log(value);
}

async function postSale(){
  const body = { Datesold, customerId, 
    storeId, productId}
  const data =  await fetch('https://localhost:44311/api/Sales/CreateSales',{
    method: 'post',
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials': true

    },
    body:JSON.stringify(body)
  })
  await data.json();
  props.fetch();
  
}
  return (
    <div>
    <Modal
        size={"small"}
        open={props.open}
        onClose={()=>props.close()}
      >
        <Modal.Header>Create Sale</Modal.Header>
        <Modal.Content>
          <Label>Date Sold</Label><br/>
          <selection>{Datesold}</selection>     
        </Modal.Content>
        <Modal.Content>
          <Label>Customer</Label><br/>
          <Dropdown
          onChange={customerdrop}
          selection
          options ={customerOption}
          />
            {/* <Dropdown.Menu>          
           {
            getCusdata.map((item)=>{
              return(
              
                <Dropdown.Item>
                <option key={item.customerId}>{item.name}</option>
                </Dropdown.Item>
               
              )
             
            })
           }
           </Dropdown.Menu> */}
          {/* </Dropdown>          */}
        </Modal.Content>
        <Modal.Content>
          <Label>Store</Label><br/>
          <Dropdown
          onChange={storedrop}
          selection
          options={storeOptions}
          />                 
        </Modal.Content>
        <Modal.Content>
          <Label>Product</Label><br/>
          <Dropdown
          onChange={productdrop}
          selection
          options={productOptions}/>   
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=>props.close()}>
            No
          </Button>
          <Button positive onClick={()=>{
            postSale();
            props.close()}
            }>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default CreateSaleModal