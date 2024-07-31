import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  const [category, setCategory] = useState("all");

  const [products, setProducts] = useState([]);

  useMemo(async () => {
    try {
      axios
        .get(
          `https://inshortsapi.vercel.app/news?category=${category.toLowerCase()}`
        )
        .then((response) => {
          setProducts(response["data"]["data"]);
        });
    } catch (error) {
      console.log(`Something is wrong try again ${error}`);
    }
  }, [category]);

  return (
    <>
      <Header
        category={category}
        setCategory={setCategory}
        products={products}
        setProducts={setProducts}
      />
      <Home products={products} setProducts={setProducts} />
      <Footer />
    </>
  );
}

export default App;
