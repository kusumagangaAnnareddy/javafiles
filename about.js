import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
let About1=()=>{
    let n=useNavigate()

    let Gohome=()=>{
        n('/')
    }
    let Goabout=()=>{
        n('/About')
    }
    
    let GoContact=()=>{
        n('/contact')
    }
    let Gologin=()=>{
        n('/Login')
    }
    return(
        <div id="div1">
            <header>
                <nav>
                    <ul>
                        <li onClick={Gohome}>HOME</li>
                        <li onClick={Goabout}>ABOUT</li>
                        <li onDoubleClick={GoContact}>CONTACT</li>
                        <li onClick={Gologin}>Login</li>
                    </ul>
                </nav>
            </header>
            <section>
                <h2>u r in about page</h2>
            </section>
            
        </div>
    )
}
export default About1;