import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, Icon, Pagination } from 'semantic-ui-react'
import CreateModal from './CreateModal';
import { MyContext } from './CustomerContext'
import DeleteCustomerModal from './DeleteCustomerModal';
import UpdateCustomer from './UpdateCustomer';

function Customer() {

  const {getCusdata} = useContext(MyContext)
  console.log(getCusdata)
  const[modal, setModal] = useState(false);
  const[mod, setmod]= useState(false);
  const[moddel, setModDel] = useState(false);
  const[cust, setCustomer]= useState([]);
  const[object, setObject]= useState('');

  const[currentPage, setCurrentPage] = useState(1);
   
  

  // async function fetchDataCustomer(){
  //   const data = await fetch("https://localhost:44311/api/Customer/GetAllCustomers",
  //   {
  //     method: 'get',
  //     Headers:{
  //           'Accept': 'application/json',
  //           'Content-Type':'application/json',
  //           'Access-Control-Allow-Origin':'*',
  //           'Access-Control-Allow-Credentials':true
  //     }
  //   })
  //    const res = await data.json();
  //    setCustomer(res);
  //    console.log(res);
  // }
  let ItemperPage = 5;
  let LastIndex = currentPage * ItemperPage;
  console.log(LastIndex)

  let FirstIndex = LastIndex - ItemperPage;
  console.log(FirstIndex);

  let currentPageData = getCusdata.slice(FirstIndex, LastIndex)
   console.log(currentPageData);

   let totalitemperpage = Math.ceil(cust.length/ItemperPage);
   console.log(totalitemperpage);

   const CustomerDropdown = [];

   for(var i=1; i<= cust.length/ItemperPage; i++){
    console.log(i);
    CustomerDropdown.push(i);
   }


  async function edit(id){
      var data = await fetch(`https://localhost:44311/api/Customer/GetCustomerById/${id}`,{
        method:'Get',
        headers:{
             'Accept':'application/json',
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin':'*',
             'Access-Control-Allow-Credentials': true
        }
      })
      const res = await data.json();
      setObject(res);
      console.log(res)
  }

  //  useEffect(()=>{
  //   fetchDataCustomer();
  //  },[])

function showModal(){
  setModal(true);
}
  return (
    <div className='ui container'>
    <Button primary onClick={showModal}>Create Customer</Button>  
    <table className="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Actions</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        currentPageData.map((item) =>{
        return(
        <tr key={item.customerId}>

        <td>{item.name}</td>
        <td>{item.address}</td>
        <td><Button color='yellow' onClick=
              {()=>{
                  edit(item.customerId)
                  setmod(true)
              }}>
          <Icon name='edit'></Icon>Edit</Button></td>
        <td><Button negative onClick=
                  {()=>{
                    edit(item.customerId)
                    setModDel(true)
                  }}>
                <Icon name='trash alternate'></Icon>Delete</Button></td>
      </tr>
            )}) 
      }
    </tbody>
  </table>
  <CreateModal
        fetch = {getCusdata}
        open = {modal}
        size = {'small'}
        close = {()=> setModal(false)}
       />
   <UpdateCustomer
     object = {object}
    fetch = {getCusdata}
    open = {mod}
    size = {'small'}
    close = {()=> setmod(false)}
   />
   <DeleteCustomerModal
   object = {object}
   fetch = {getCusdata}
   open = {moddel}
   size = {'small'}
   close = {()=> setModDel(false)}
   />
   <Pagination
   firstItem = {null}
   lastItem = {null}
   prevItem = {null}
   nextItem = {null}
  totalPages = {totalitemperpage}
 onPageChange = {(event)=> setCurrentPage(event.target.textContent)}
   />
   <Dropdown placeholder={currentPage}>
    <Dropdown.Menu>

      {
        CustomerDropdown.map((event)=>
        {
          return(
            <Dropdown.Item onClick={(event)=>setCurrentPage(event.target.textContent)}>
              {event}
            </Dropdown.Item>
          )
        })
      }     
    </Dropdown.Menu>
   </Dropdown>
   <Button primary>{currentPage}</Button>
  </div>
  
  )
}

export default Customer