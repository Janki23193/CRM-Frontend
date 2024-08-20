import React, { useContext, useState} from 'react'
import { Button, Dropdown, Icon, Pagination } from 'semantic-ui-react';
import CreateStoreModal from './CreateStoreModal';
import { MyContext } from './CustomerContext';
import DeleteStoreModal from './DeleteStoreModal';
import UpdateStoreModal from './UpdateStoreModal';
function Store() {

  const[modal, setModal] = useState(false);
  const[mod, setMod] = useState(false);
  const[modDel, setModDel] = useState(false);
  const[object, setObject] = useState('');
  const[currentPage, setCurrentPage] = useState(1);
  
  const {getStoredata} = useContext(MyContext);
  console.log(getStoredata);

  //const[st, setStore] = useState([]);

  function showModal(){
  setModal(true);
  }

  /*async function fetchDataStore(){
    const data = await fetch("https://localhost:44311/api/Store/GetAllStore",
    {
      method :'get',
      Headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
      }
    })
     const res = await data.json();
     setStore(res); 
     console.log(res);    
  }*/
  let ItemperPage = 5;
  let LastIndex = ItemperPage * currentPage; // lastindex = 5, 10, 15...
  console.log(LastIndex);

  let FirstIndex = LastIndex - ItemperPage; // firstindex = 0, 5, 10...
  console.log(FirstIndex)

  let currentPageData = getStoredata.slice(FirstIndex, LastIndex);
  console.log(currentPageData)

  let totalitemperpage = Math.ceil(getStoredata.length/ItemperPage);
  console.log(totalitemperpage)

  const storedropdown = [];

  for(let i=1; i<=Math.ceil(getStoredata.length/ItemperPage); i++){
    console.log(i);
    storedropdown.push(i);
  }
  
  async function editStore(id){
   const data = await fetch(`https://localhost:44311/api/Store/GetStoreById/${id}`,
   {
    method: 'get',
    headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':true
    }
   })
   const res = await data.json();
   setObject(res);
  }
  

  return (
    <div className='ui container'>
      <Button primary onClick={showModal}> Create Store</Button>
      <table className='ui celled table'>
        <thead>
          <th>Store</th>
          <th>Address</th>
          <th>Actions</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            currentPageData.map((item)=>{
             return(
              <tr key={item.storeId}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td><Button color='yellow' onClick=
                     {()=>{
                      editStore(item.storeId)
                      setMod(true)
                     }}>
                      <Icon name='edit'></Icon>Edit</Button></td>
              <td><Button negative onClick={
                ()=>{
                     editStore(item.storeId)
                     setModDel(true);
                }}>
                <Icon name = "trash alternate"></Icon>Delete</Button></td>
            </tr>
             )
            })}         
        </tbody>
      </table> 
      <CreateStoreModal
      //fetch = {getStore}
      open = {modal}
      size = {'small'}
      close = {()=>setModal(false)}
      />    

      <UpdateStoreModal
      object = {object}
      //fetch={getStoredata}
      open ={mod}
      size={'small'}
      close = {()=>setMod(false)}
      />   
      <DeleteStoreModal
      object = {object}
      //fetch = {getStoredata}
      open = {modDel}
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
          storedropdown.map((event)=>{
            return(
              <Dropdown.Item onClick={(event)=>setCurrentPage(event.target.textContent)}>
               {event}
              </Dropdown.Item>
            )})
        }
      </Dropdown.Menu>
      </Dropdown>
      <Button style = {{display:'flex',alignContent:'space-between'}}primary>{currentPage}</Button>
    </div>
  )
}

export default Store;