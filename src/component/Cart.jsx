import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function CartPage() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="cart-box">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} — ₹{item.price}
            </li>
          ))}
        </ul>
      )}

      <Link to="/Product" className="back-btn"> Back to Products</Link>
      {/* <Link to='./Product'>hii</Link> */}
    </div>
  );
}

