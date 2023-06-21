import  React, { Component } from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <h1>Google Form</h1>
                Name:<input type="text"id="input"></input><br></br><br></br>
                Phoneno:<input type="text"id="input1"></input><br></br><br></br>
                Email:<input type="text"id="input2"></input><br></br><br></br>
                Password:<input type="password"id="password"></input><br></br><br></br>
                <button>Submit</button>
                <button>Reset</button>

                <table id="table" border={{}}>
                    <tr>
                        <th>sl.no</th>
                        <th>Name</th>
                        <th>Mobileno</th>
                    </tr>
                    <tr>
                    <th>1</th>
                    <th>Bhuvana</th>
                    <th>7777766666</th>
                    </tr>
                </table>
                
            </div>
        )
    }
}
export default Form;
