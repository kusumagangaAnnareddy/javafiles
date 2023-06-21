import React from "react";
const Map1=()=>{
    const mydata=[
        {name:"Akshaya",cname:"Chaitanya",rnum:"1"},
        {name:"Maha",cname:"Mother India",rnum:"4"},
        {name:"Rohith",cname:"Ravindra",rnum:"13"}
    ]
    return(
        <div>
            {
                mydata.map((k)=>{
                    return <h3>{k.name}{k.cname}{k.rnum}</h3>
                })
            }
            <h1>{mydata[0].name}</h1>
        </div>
    )
    
}
export default Map1;