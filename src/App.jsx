import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import Signin from "./component/Signin";
import Mystore from "./component/Mystore";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
 import Product from "./component/Product";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mystore" element={<Mystore />} />
        <Route path="/Product" element={<Product />} />
       <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    
      <Footer/>
    </>
  );
}

export default App;
