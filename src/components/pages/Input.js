import React, { useState } from "react";


const Input=()=>{

  const[name,setName]=useState([]);
  const[address,setAddress]=useState([]);
const url=""



  const HandleChange=(event)=>{
    console.log(event.target.value)
setName(event.target.value);
}


    return(
        <form>
            <h2>Name</h2>
            <input type="text" value={name} onChange={HandleChange}>

            </input>
        </form>
    )
}

export default Input;
