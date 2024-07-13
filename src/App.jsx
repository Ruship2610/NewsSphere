import React, { useState,useMemo } from "react";
import axios from 'axios';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import './App.css'
import Home from "./Components/Home/Home";




function App() {

  
  const [input,setInput] = useState("all");
  const [products,setProducts] = useState([]);
  
 
  const handleApi = ( async() => {
    try{
        axios.get(`https://inshortsapi.vercel.app/news?category=${input.toLocaleLowerCase()}`)
        .then((response) => {
          setProducts(response["data"]["data"]);
        })
    }catch(error){
     console.log(`Something is wrong try again ${error}`)
    }
  });
  
  useMemo(() => {
    handleApi();
  },[]);
 
  return (
    <>
   
        <Header  input={input} setInput={setInput}  products={products} setProducts={setProducts} handleApi={handleApi}/>
        <Home  input={input} setInput={setInput} products={products} setProducts={setProducts} />
        <Footer/>
    </>
    
   
  )
}

export default App
