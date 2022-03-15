import React from "react";
import "./App.css"
import {Routes,Route} from "react-router-dom"
import Login from "./Login";
import Sign from "./Sign";
import Home from "./Home"


function App() {

  
  return (
    
    <>
  <Routes>
    <Route path="*" element={<Login/>}></Route>
    <Route path="/signup" element={<Sign/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
  </Routes>

    </>
  );
}

export default App;
