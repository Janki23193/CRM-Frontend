import React, { useEffect, useState } from "react";

const Store =() =>{

  useEffect(()=>{
    getStore();
  },[]);

const[st, setStore] = useState([]);

const url = "https://localhost:44311/api/Store/GetAllStore"

const DelStor=(Id)=>{
  const urldel=(`https://localhost:44311/api/Store/DeleteStore/${Id}`)
fetch(urldel,{
  method:'DELETE'
}).then(res=>res.json())
  .then(res=>{
    console.log(res);
  })
}

const getStore =() =>{
    fetch(url,{
           method:'GET'
           
    }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        setStore(data)
      })
}
    return(
        <div>
            <div>
             <table>
                <thead>
                  <tr>
                    <th>Store Id</th>
                    <th>Store Name</th>
                    <th>Store Address</th>
                    </tr>
                </thead>
                 <tbody>
                    {st.map((item, index) =>(
                      <tr key ={index}>
                        <td>{item.storeId}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td><button>Update</button></td>
                        <td><button onClick={()=>(DelStor(item.storeId))}> Delete</button></td>
                      </tr>                   
                   ))}
                   </tbody>                
             </table>
            </div>
        </div>
    )
}
export default Store;