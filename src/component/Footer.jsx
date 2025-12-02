import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-section">
          <h3>ABOUT DECATHLON</h3>
          <ul>
            <li>Who We Are</li>
            <li>Careers</li>
            <li>Decathlon App</li>
            <li>Store Locator</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>Order Tracking</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SPORTS</h3>
          <ul>
            <li>Running</li>
            <li>Football</li>
            <li>Cycling</li>
            <li>Fitness</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Decathlon India • All Rights Reserved
      </div>
    </footer>
  );
}
