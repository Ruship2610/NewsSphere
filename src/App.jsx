import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css'
import Home from "./Components/Home/Home";



function App() {

  const[category,setCategory] = useState("all");
 
  return (
    <>
        <Header category={category} setCategory={setCategory}/>
        <Home category={category} setCategory={setCategory}/>
        <Footer/>
    </>
    
   
  )
}

export default App
