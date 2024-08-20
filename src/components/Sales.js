import React, { useEffect, useState } from 'react'
import {Button, Icon} from 'semantic-ui-react'
import CreateSaleModal from './CreateSaleModal';
import DeleteSalesModal from './DeleteSalesModal';
import UpdateSales from './UpdateSales';

function Sales() {
const[sale, setSales] = useState([]);
const[EditSale, setEditSale] = useState([]);
const[modal, setModal] = useState(false);
const[DelModal, setDelModal]= useState(false);
const[EditModal, setEditModal]= useState(false);

function showModal(){
  setModal(true);
}

async function fetchDataSale(){
 
    const data = await fetch('https://localhost:44311/api/Sales/GetAllSales',
    {
      method : 'Get',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
    })
    const res = await data.json();
    setSales(res);
    console.log(res);
}
async function editSales(id){
 
   const data = await fetch(`https://localhost:44311/api/Sales/GetSalesById/${id}`,{
    method: 'get',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Crendentials': true
    }
   })
   console.log(id)
   const res = await data.json();
   //setEditSale(res.map((item)=>{  
   //return(
    //item.salesId
    //)
//}));
setEditSale(res.map(e=>{
  return(e.salesId)
}))
   
}

console.log(EditSale)
useEffect(()=>{
  fetchDataSale();
}, []);

  return (
    <div className='ui container'>
      <Button onClick={showModal} primary>Create Sale</Button>
      <table className='ui celled table'>
       <thead>
           <th>Date</th>
           <th>Customer</th>
           <th>Product</th>
           <th>Store</th>
           <th>Actions</th>
           <th>Actions</th>
       </thead>
       <tbody>
        {
          sale.map((item)=>
            {
              return(
                <tr key={item.salesId}>
                   <td>{item.dateSold}</td>
                   <td>{item.customerName}</td>
                   <td>{item.productName}</td>
                   <td>{item.storeName}</td>
                   <td><Button color='yellow' onClick={()=>{
                    setEditModal(true);
                   }}><Icon name='edit'></Icon>Edit</Button></td>
                   <td><Button negative onClick={()=>
                  {
                    editSales(item.salesId)
                    setDelModal(true)
                  }}><Icon name='trash alternate'></Icon>Delete</Button></td>
                </tr>
              )})
        }
       </tbody>
      </table>
      <CreateSaleModal
      fetch={fetchDataSale}
      open={modal}
      size = {'small'}
      close = {()=>setModal(false)}/>

      <UpdateSales
       open ={EditModal}
       close = {()=>setEditModal(false)}
      />
      
      <DeleteSalesModal
      fetch={fetchDataSale}
      object = {EditSale}
      open = {DelModal}
      size = {'small'}
      close = {()=> setDelModal(false)}
      />
  
    </div>
  )
}

export default Sales