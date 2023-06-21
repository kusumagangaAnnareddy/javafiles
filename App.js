import React from "react";
import Hello from "./kusuma";
import Safron from "./flag";
import Form from "./form";
import Propss from "./props";
import State from "./state";
import Order from "./alert";
import Map1 from "./map";
import Path from "./path";
import Pro from "./Carpri";



let student={ reg1:'401',name1:'Akshaya',branch1:'ECE'}
var student1={reg2:'402',name2:'maha',branch2:'CSE'}
function App(){
return(
    <div>
      <Hello/>
      <Safron/>
      <Form/>
      <Propss sl='1' name='Bhuvana'/>
      <Propss {...student} {...student1}/>
      <State/>
      <Order/>
      <Map1/>
      <Path/>
      <Pro/>
      
      
      
      
      
    </div>
  )
}
export default App;