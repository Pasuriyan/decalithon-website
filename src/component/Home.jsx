

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      {/* ---------- BANNER SECTION ---------- */}
      <div className="banner">
        <div className="banner-text">
          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnR8ZW58MHx8MHx8fDA%3D" className="img1" />
             
          {/* <h1>Welcome to Decathlon</h1> */}
          {/* <p>Everything for Sports, Fitness & Adventure</p> */}
          <Link to="/Products" className="btn btn1">Shop Now</Link>
        </div>
      </div>
      {/* ---------- CATEGORY SECTION ---------- */}
      <div className="category-section">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="/sports/football.jpg" alt="Football" />
            <p>Football</p>
          </div>

          <div className="category-card">
            <img src="/sports/cricket.jpg" alt="Cricket" />
            <p>Cricket</p>
          </div>

          <div className="category-card">
            <img src="/sports/cycling.jpg" alt="Cycling" />
            <p>Cycling</p>
          </div>

          <div className="category-card">
            <img src="/sports/swimming.jpg" alt="Swimming" />
            <p>Swimming</p>
          </div>
        </div>
      </div>

      {/* ---------- OFFER SECTION ---------- */}
      <div className="offer-section">
        <h2>Exclusive Offers</h2>

        <div className="offer-card">
          <h3>Get 30% OFF on Sports Essentials</h3>
          <p>Limited time offer – hurry up!</p>
          <Link to="/Products" className="btn">Explore Offers</Link>
        </div>
      </div>

    </div>
  );
}

