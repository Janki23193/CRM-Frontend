import react, { useEffect, useState } from 'react';

const Customer = () =>{
    useEffect(()=>{
        getCust();
    },[]);
    const[cust, setCustomer] = useState([]);
    const url = 'https://localhost:44311/api/Customer/GetAllCustomers';

  const getCust = () =>{
    fetch(url,{
        method : 'GET'
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      })
  }
    return(
        <div>
            <div>
                <table>
                    <thead>
                      <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cust.map((item,index) => (
                      <tr key={index}>
                      <td>{item.customerId}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
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
export default Customer;