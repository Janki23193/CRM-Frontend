import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, Icon, Pagination } from 'semantic-ui-react';
import CreateProductModal from './CreateProductModal';
import { MyContext } from './CustomerContext';
import DeleteProductModal from './DeleteProductModal';
import UpdateProductModal from './UpdateProductModal';

function Product() {
  const [modal, setModal] = useState(false);
  const[mod, setMod] = useState(false);
  const[modDel, setModDel] = useState(false);
  const[product, setProduct] = useState([]);
  const[object, setObject] = useState('');
  const[currentPage, setCurrentPage] = useState(1);

const {getdata}=useContext(MyContext)
console.log(getdata)

  function showModal(){
    setModal(true);
  }
  async function fetchDataProduct(){
     var data = await fetch("https://localhost:44311/api/Product/GetAllProducts",
     {
      method : 'Get',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      }
     })
     const res = await data.json();
     setProduct(res);
     console.log(res);
  }
   let ItemperPage = 5;
  let LastIndex = ItemperPage * currentPage;
  console.log(LastIndex)

  let FirstIndex = LastIndex - ItemperPage;
  console.log(FirstIndex);

  let currentPageData = product.slice(FirstIndex, LastIndex);
  console.log(currentPageData);

  let totalitemperpage = Math.ceil(product.length/ItemperPage);
  console.log(totalitemperpage);
 
  const abcd = [];

  for(let i = 1; i<=Math.ceil(product.length/ItemperPage); i++){
    console.log(i);
    abcd.push(i);
  }

  async function edit(id){
      var data = await fetch(`https://localhost:44311/api/Product/GetProductById/${id}`,
      {
        method: 'Get',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Credentials':true
        }
      }) 
       var res = await data.json();
       setObject(res);       
  }
  useEffect(()=>
  {
    fetchDataProduct();
  },[]);
  return (
    <div className='ui container'>
      <Button primary onClick={showModal}> Create Product</Button>
       <table className='ui celled table'>
        <thead>
          <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Actions</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            currentPageData.map((item)=>{
             return(
              <tr key={item.productId}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><Button color='yellow'
                       onClick={()=>
                      {
                        edit(item.productId)
                        setMod(true)
                      }}>
              <Icon name='edit'></Icon>Edit</Button></td>
              <td><Button negative onClick={()=>
              {
               edit(item.productId)
               setModDel(true)
              }}>
                <Icon name = 'trash alternate'></Icon>Delete</Button></td>
            </tr>
             )
            })}
          
        </tbody>
       </table>
      <CreateProductModal
      fetch = {fetchDataProduct}
      open = {modal}
      size = {'small'}
      close = {()=> setModal(false)}
/>
   <UpdateProductModal
   fetch = {fetchDataProduct}
   object = {object}
   open = {mod}
   size= {'small'}
   close = {()=>setMod(false)}
   />
   <DeleteProductModal
   open = {modDel}
   size = {'small'}
   object = {object}
   fetch = {fetchDataProduct}
   close = {()=> setModDel(false)}
   />
    <Pagination
    /*firstItem = {null}
    lastItem = {null}
    prevItem = {null}
    nextItem = {null}
    totalPages = {totalitemperpage}
    onPageChange = {(event)=> setCurrentPage(event.target.textContent)} */
   />
   <Dropdown placeholder = {currentPage}>
    <Dropdown.Menu>
     {
       abcd.map((e)=>{
        return(
        <Dropdown.Item onClick = {(e)=>setCurrentPage(e.target.textContent)}>
          {e}
        </Dropdown.Item>
        )})
        } 
    </Dropdown.Menu>
   </Dropdown>
   <Button primary>{currentPage}</Button>
    </div>
  )
}


export default Product