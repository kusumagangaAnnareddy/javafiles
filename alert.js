import {React,useState} from "react";
const Order=()=>{
    const [name,setName]=useState("")
    
    const Change=()=>{
        if(name==""){
    }
    alert(name)
    }
return(
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}></input><br></br><br></br>
        <button onClick={Change}>Change </button>
    </div>
)
}

export default Order;