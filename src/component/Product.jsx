import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function ProductPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const products = [
    {
      id: 1,
      name: "Sports Shoes",
      description: "Comfortable running shoes",
      price: 1200,
      rating: 4.5,
      reviews: 120,
      image:
        "https://contents.mediadecathlon.com/p2380403/f78f429439290884509eb038c0ad7a82/p2380403.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: 2,
      name: "Football",
      description: "Professional leather football",
      price: 899,
      rating: 4.7,
      reviews: 75,
      image:
        "https://contents.mediadecathlon.com/p2727377/e6f042b756e425db73ab961069f36cbc/p2727377.jpg",
    },
      // --- Gym & Workout ---
  {
    id: 6,
    name: "Yoga Mat",
    description: "Non-slip eco-friendly yoga mat",
    price: 599,
    rating: 4.8,
    reviews: 80,
    image:
      "https://contents.mediadecathlon.com/p2939959/d73a665033ba97a374e9aab79391ceb0/yoga-mat-5mm-thick-185-x-61-cm-lightweight-with-carry-strap-navy-blue.jpg",
  },
  {
    id: 7,
    name: "Skipping Rope",
    description: "Adjustable lightweight rope",
    price: 299,
    rating: 4.3,
    reviews: 50,
    image:
      "https://contents.mediadecathlon.com/p2352889/be8fea07e080c59e410b0bc57232f194/p2352889.jpg",
  },
  {
    id: 8,
    name: "Dumbbells 5kg Pair",
    description: "Rubber coated solid dumbbells",
    price: 1499,
    rating: 4.9,
    reviews: 110,
    image:
      "https://contents.mediadecathlon.com/p2468152/6c5ca9015ae049631b7d831bdb9fee9c/p2468152.jpg",
  },

  // --- Rackets & Bats ---
  {
    id: 9,
    name: "Tennis Racket",
    description: "Lightweight and durable",
    price: 1500,
    rating: 4.3,
    reviews: 50,
    image:
      "https://contents.mediadecathlon.com/p2791231/591b723c3a2fa8b5d2b010b9336c454d/p2791231.jpg",
  },
  {
    id: 10,
    name: "Badminton Racket",
    description: "Flexible and durable frame",
    price: 699,
    rating: 4.5,
    reviews: 70,
    image:
      "https://contents.mediadecathlon.com/p2451220/8bda820ee974c64c1185d11e2d85ed0c/p2451220.jpg",
  },
  {
    id: 11,
    name: "Cricket Bat",
    description: "Professional grade cricket bat",
    price: 2200,
    rating: 4.6,
    reviews: 40,
    image:
      "https://contents.mediadecathlon.com/p2407268/537f8ea9e1a32604000ce7568a73e9d5/p2407268.jpg",
  },
  
  // --- Outdoor ---
  {
    id: 19,
    name: "Camping Tent",
    description: "2-person waterproof tent",
    price: 2999,
    rating: 4.6,
    reviews: 70,
    image:
      "https://contents.mediadecathlon.com/p2635801/858d726fef44dbb040ce2fb913b3c55c/p2635801.jpg",
  },
  {
    id: 20,
    name: "Hiking Backpack 40L",
    description: "Large capacity trekking bag",
    price: 2499,
    rating: 4.8,
    reviews: 90,
    image:
      "https://contents.mediadecathlon.com/p2363818/25e84a5f5c461bb1b1bd1f1c7b08f3fe/p2363818.jpg",
  },
  ];

  return (
    <div className="product-page">

      {/* Cart Button */}
      <Link to="/cart" state={{ cart }} className="cart-header">
        🛒 View Cart ({cart.length})
      </Link>

      <h1 className="page-title">Decathlon Products</h1>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">₹{product.price}</p>
            <div className="product-rating">
              ⭐ {product.rating} ({product.reviews} reviews)
            </div>

            <button
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
