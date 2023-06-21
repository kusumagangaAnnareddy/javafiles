import React from "react";
import Bcar from "./bascar";
import Hoc from "./bHoc";
const NewUpdate=Hoc(Bcar)
const Pro=()=>{
    return(
        <div>
            <Bcar/>
            <h1>after update</h1>
            <NewUpdate/>
        </div>
    )
}
export default Pro;