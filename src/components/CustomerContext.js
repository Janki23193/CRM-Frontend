import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
export const Scontext=({children})=>{
    const[getCusdata, setgetCusdata]= useState([]);
    const[getProddata, setgetProddata] = useState([]);
    const[getStoredata, setgetStoredata] = useState([]);
    const[getSalesData, setgetSalesdata] = useState([]);
 async function getCustomer(){
    const data = await fetch("https://localhost:44311/api/Customer/GetAllCustomers",
    {
      method: 'get',
      headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'     
      }
    })
     const res = await data.json();
     setgetCusdata(res);
  }
// get all product

async function getProduct(){
    const data = await fetch('https://localhost:44311/api/Product/GetAllProducts',
    {
      methos: 'get',
      headers :{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })
    const res = await data.json();
    setgetProddata(res);
}

// get all store
  async function getStore(){
           var data = await fetch("https://localhost:44311/api/Store/GetAllStore",
           {
            method : 'Get',
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
           })
           const res = await data.json();
           setgetStoredata(res);
  }
  // get all sales
    async function getSales() {
      var data = await fetch("https://localhost:44311/api/Sales/GetAllSales",
        {
          method : 'Get',
          headers : {
            'Accept': 'apllication/json',
            'Content-Type': 'application/json'
          }
        })
        const res = await data.json();
        setgetSalesdata(res);
      
    }

  useEffect(()=>{
    getCustomer();
    getProduct();
    getStore();
    getSales();
  },[])
  return  <MyContext.Provider value={{getCusdata, getProddata, getStoredata, getSalesData}}>{children}</MyContext.Provider> 
}