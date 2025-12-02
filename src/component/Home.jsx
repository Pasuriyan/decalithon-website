import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* ---------- BANNER SECTION ---------- */}
      <div className="banner">
        <div className="banner-text"> <br />j <br />
          <img
            src="https://contents.mediadecathlon.com/s1347236/k$c6bb49c8d52d8d17ec6853b047822ad8/defaut.jpg?format=auto&quality=70&f=2520x0"
            className="img1"
          />
           
          <Link to="/Product" className="btn btnt">
            Shop Now
          </Link>
        </div>
      </div>
      {/* ---------- CATEGORY SECTION ---------- */}
      <div className="category-section">
        <h2>Shop by Category</h2> <br />

        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://media.istockphoto.com/id/1150952747/photo/close-up-of-legs-and-feet-of-football-player-in-blue-socks-and-shoes-running-and-dribbling.jpg?s=2048x2048&w=is&k=20&c=ZExHDcDERHr-6lbrAjL9L3-xGMi8uzq_zpspM_0ca9Y="
              alt="Football"
            />
            <p>Football</p>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Cricket"
            />
            <p>Cricket</p>
          </div>

          <div className="category-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1685207267343-1c8852b45575?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Cycling"
            />
            <p>Cycling</p>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1470376619031-a6791e534bf0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3aW1taW5nfGVufDB8fDB8fHww"
              alt="Swimming"
            />
            <p>Swimming</p>
          </div>
        </div>
      </div>

      {/* ---------- OFFER SECTION ---------- */}
      <div className="offer-section">
        <h2 >Exclusive Offers</h2> <br /> 
        <div className="offer-card">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.znOyVV-idFX5QGrCL4wx8AHaEB?pid=Api&P=0&h=180"
            alt=""
          />
          <h3>Get 30% OFF on Sports Essentials</h3>
          <p>Limited time offer – hurry up!</p>
          <br />
          <br />
          <Link to="/Product" className="btn">
            Explore Offers
          </Link>
        </div>
      </div>
    </div>
  );
}
