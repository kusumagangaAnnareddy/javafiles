import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About1 from "./about";
import Login from "./form1";

var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About1/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>

    )
}
export default Path;