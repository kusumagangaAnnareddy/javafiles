import { useState } from "react";

function State(){
    let[name,set]=useState("Order for food")
    function Change(){
        set("preparing")
    }
    function delivered(){
        set("delivered food to eat:)")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={Change} onDoubleClick={delivered}>click to Change</button>
        </div>
    )

    
}
export default State;