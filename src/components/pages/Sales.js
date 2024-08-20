import React, { useEffect, useState } from "react";

const Sales = () =>{
  useEffect(()=>{
    GetSales();
  },[])
 const[sal, setSales] = useState([])
 const url = 'https://localhost:44311/api/Sales/GetAllSales';

const GetSales= () =>{
  fetch(url, {
    method: "GET"
  }).then(res => res.json())
  .then(data=>{
    console.log(data);
    setSales(data);
  })
}
    return(
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Sales Id</td>
                  <td>DateSold</td>
                  <td>storeId</td>
                </tr>
              </thead>
              <tbody>
                {sal.map((item, index)=>(
                 <tr key={index}>
                 <td>{item.salesId}</td>
                 <td>{item.dateSold}</td>
                 <td>{item.storeId}</td>
                 <td><button>Update</button></td>
                 <td><button>Delete</button></td>
               </tr>
                ))}               
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default Sales;