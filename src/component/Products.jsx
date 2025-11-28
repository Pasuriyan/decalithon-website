// import React from 'react'
// import img from '../assets/img.avif'
// export default function Products() {
//   return (
//     <div>
//       <img src={img}  />
//     </div>
//   )
// }
import React from "react";
import "./Home.css";
import img from '../assets/img.avif'
export default function ProductCards() {
  
  const products = [
    {
      id: 1,
      name: "RIVERSIDE",
      desc: "Hybrid Riverside 500 Gear Cycle With Lightweight Frame",
      price: 19999,
      oldPrice: 39999,
      rating: 3.7,
      discount: "50% Off",
      img: "https://contents.mediadecathlon.com/p2276548/3e11d5d3831ff2a343a7433acfe8b88d/p2276548.jpg?format=auto&quality=70&f=2520x0",
    },
    {
      id: 2,
      name: "ROCKRIDER",
      desc: "Unisex Mountain Bike Rockrider ST30 With Low Standover",
      price: 9499,
      oldPrice: 13999,
      rating: 4.1,
      discount: "32% Off",
      img: "https://contents.mediadecathlon.com/p2277243/fec2153f697f6975eb0a65cf22d487b8/p2277243.jpg?format=auto&quality=70&f=2520x0",
    },
    {
      id: 3,
      name: "BTWIN",
      desc: "Road Bike Triban RC120 - Disc Brakes, Carbon Fork",
      price: 36999,
      oldPrice: 59999,
      rating: 3.7,
      discount: "38% Off",
      img: "https://contents.mediadecathlon.com/p2563201/8ef26012c7fe024e92e8a6d8c75e1271/p2563201.jpg?format=auto&quality=70&f=2520x0",
    },
    {
      id: 4,
      name: "BTWIN",
      desc: "Mountain Bike Rockrider ST20 With High Steel Frame",
      price: 7499,
      oldPrice: 11999,
      rating: 4.1,
      discount: "37% Off",
      img: "https://contents.mediadecathlon.com/p2275904/59a4ac09fed51215dec2c09f220317a6/p2275904.jpg?format=auto&quality=70&f=320x0",
    },
  ];

  return (
    
    <div className="products-container">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <div className="price-drop">Price drop</div>

          <img src={p.img} alt={p.name} className="product-img" />
       
          <div className="rating-box">
            <span>★ {p.rating}</span>
          </div>

          <h3 className="product-name">{p.name}</h3>
          <p className="product-desc">{p.desc}</p>

          <div className="price-section">
            <span className="price">₹ {p.price}</span>
            <span className="old-price">₹ {p.oldPrice}</span>
            <span className="discount">{p.discount}</span>
          </div>

          <button className="add-btn">ADD TO CART</button>
        </div>
    
      ))}


      


    </div>
  );
}