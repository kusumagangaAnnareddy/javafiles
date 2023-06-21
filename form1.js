import React from "react";


let Login=()=>{
    return(
        <div>
            <h1>Create Form</h1>
            Name:<input type="text"></input><br></br><br></br>
            MobileNo:<input type="text"></input><br></br><br></br>
            Email Id:<input type="email"></input><br></br><br></br>
            Password:<input type="password"></input><br></br><br></br>
            <button onClick={Login}>Submit</button>
        </div>
    )
}
export default Login;