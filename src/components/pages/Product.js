import React, { useEffect, useState } from "react";

const Product = () =>{
  const[arr, setarr] = useState(false);

  const click = () =>{
    setarr(true);
  }
  
   
    useEffect(()=>{
        getProduct();
    },[]);
    
    const[pro, setProduct] = useState([]);
    const url = 'https://localhost:44311/api/Product/GetAllProducts';

    const getProduct = () =>{
      fetch(url,{
        method: 'GET'
      }).then(res => res.json())
       .then(data =>{
         console.log(data);
         setProduct(data);
       })        
    }   
    return(
        <div>
        <div>
         <table>
        <thead>
         <tr>
         <th>Product id</th>
         <th>Product Name</th>
         <th>Product Price</th>
         </tr>
         </thead> 
         <tbody>
            {pro.map((item, index) =>(
          <tr key={index}>
            <td>{item.productId}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button onClick={click}>Update</button></td>
            <td><button>Delete</button></td>
            </tr>                      
            ))}         
         </tbody>
         </table>
        </div>
        </div>
    )
}
export default Product;