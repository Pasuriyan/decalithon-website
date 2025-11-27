import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";
import Signin from "./component/Signin";
import Mystore from "./component/Mystore";
import Products from "./component/Products";
import Home from "./component/Home";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Signin" element={<Signin />} />
          <Route path="/Mystore" element={<Mystore />} />
          <Route path="/Products" element={<Products />} />
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
