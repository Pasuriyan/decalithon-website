import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="all-sports">ALL SPORTS</span>
        <div className="image"></div>
        <h2 className="logo">DECATHLON</h2>
      </div>

      <div className="search-box">
        <input type="text" placeholder='Search for "football"' />
      </div>

      <div className="nav-right">
         <div className="item">
          <Link to="/">Home</Link>
        </div>

        <div className="item">
          <Link to="/Signin">Sign In</Link>
        </div>

        <div className="item">
          <Link to="/Mystore">My Store</Link>
        </div>

        <div className="item">
          <Link to="/Products">Products</Link>
        </div>

        <div className="item">
          <Link to="/Cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
