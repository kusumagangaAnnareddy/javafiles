import React from "react";

const Hoc=(OriginalCompo)=>{
    const Updatecar=()=>{
        return(
            <div>
                <OriginalCompo/>
                <hr></hr>
                <h3 style={{backgroundColor:"gray",height:"3cm",width:"3cm"}}></h3>
            </div>

        )
    }
    return Updatecar;
}
export default Hoc;