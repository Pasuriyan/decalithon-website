import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./Product.css";


// Simple Cart Context to share cart across pages
const CartContext = createContext();

export default function Product() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart_v1")) || [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  const updateQty = (productId, qty) => {
    setCart((prev) => prev.map((p) => (p.id === productId ? { ...p, qty } : p)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      <BrowserRouter>
        <div className="app-root">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <header className="navbar">
      {/* <div className="nav-left"> */}
        {/* <button className="hamburger">☰</button>
        <div className="brand">DECATHLON</div>
      </div>
      <div className="search">
        <input placeholder='Search for "Yoga Mats" |' />
      </div> */}
      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          🛒<span className="cart-count">{cart.reduce((s, p) => s + p.qty, 0)}</span>
        </Link>
      </div>
    </header>
  );
}

function Home() {
  // Sample product data, replace image URLs with your own assets if you want.
  const products = [
    {
      id: "elliptical-1",
      title: "Elliptical With 6kg Flywheel, Smart, Self-Powered",
      brand: "DOMYOS",
      price: 32999,
      oldPrice: 59999,
      rating: 4.5,
      badge: "FREE",
      image: "https://contents.mediadecathlon.com/p2688742/a4c634ccc217a1df1efca26f505d5793/p2688742.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "treadmill-1",
      title: "Treadmill Upto 18 Kmph, Smart, Foldable",
      brand: "DOMYOS",
      price: 74999,
      oldPrice: 99999,
      rating: 2.3,
      badge: "Price drop",
      image: "https://contents.mediadecathlon.com/p2688754/72b7b794b6197ce93421378752e0857a/p2688754.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "bike-1",
      title: "Exercise Bike With 3kg Flywheel",
      brand: "DOMYOS",
      price: 9999,
      oldPrice: 24999,
      rating: 4.5,
      badge: "Price drop",
      image: "https://contents.mediadecathlon.com/p2688754/72b7b794b6197ce93421378752e0857a/p2688754.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "elliptical-2",
      title: "Elliptical With 9kg Flywheel, Smart",
      brand: "DOMYOS",
      price: 39999,
      oldPrice: 69999,
      rating: 4.6,
      badge: "FREE",
      image: "https://contents.mediadecathlon.com/p2688745/03ad42fc0c2969814a85ba56a33c752c/p2688745.jpg?format=auto&quality=70&f=320x0",
    },
    // second row (clothing)
    {
      id: "trousers-1",
      title: "Men Cargo Trousers Pants SG-300 - Black",
      brand: "SOLOGNAC",
      price: 799,
      oldPrice: 1499,
      rating: 4.6,
      badge: "Price drop",
      image: "https://contents.mediadecathlon.com/p1628209/0867b68edad7279ad552c225ae2e5afa/p1628209.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "gilet-1",
      title: "Men Horse Riding Sleeveless Gilet 100 - Black",
      brand: "CAPERLAN",
      price: 799,
      oldPrice: 1299,
      rating: 5.0,
      badge: "Price drop",
      image: "https://contents.mediadecathlon.com/p3003119/3c1548f304f9943c390964e7f731796e/p3003119.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "tshirt-530",
      title: "T-SHIRT 530 JR",
      brand: "PERFLY",
      price: 399,
      oldPrice: 649,
      rating: 4.8,
      badge: "Sale",
      image: "https://contents.mediadecathlon.com/p3006003/817a045bb5af3d3ea3deab13b7b5c33c/p3006003.jpg?format=auto&quality=70&f=320x0",
    },
    {
      id: "racket-1",
      title: "Pickleball Racket React - Purple",
      brand: "KUIKMA",
      price: 2999,
      oldPrice: 5199,
      rating: 4.6,
      badge: "Price drop",
      image: "https://contents.mediadecathlon.com/p2826047/bc12ea88fbe31216c3276913834ca444/p2826047.jpg?format=auto&quality=70&f=320x0",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-grid">
        <div className="left-rail">
          <div className="small-text">Best of</div>
          <h2>HOME FITNESS EQUIPMENT!</h2>
        </div>
        <div className="products-grid">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="hero-grid second">
        <div className="left-rail">
          <div className="small-text">Best of</div>
          <h2>ADVENTURE READY GEAR!</h2>
        </div>
        <div className="products-grid">
          {products.slice(4, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="hero-grid third">
        <div className="left-rail">
          <div className="small-text">Serving up</div>
          <h2>SOME FUN!</h2>
        </div>
        <div className="products-grid">
          {products.slice(4, 8).map((p) => (
            <ProductCard key={p.id + "b"} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [wish, setWish] = useState(false);
  const navigate = useNavigate();

  const onAdd = () => {
    addToCart(product);
    // navigate to cart page after adding
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <div className="image-wrap">
        {product.badge && <div className="badge">{product.badge}</div>}
        <img src={product.image} alt={product.title} />
        <div className="rating">★ {product.rating}</div>
        <button className="wishlist" onClick={() => setWish((w) => !w)}>
          {wish ? "♥" : "♡"}
        </button>
      </div>
      <div className="thumbs">{/* small thumbnails strip */}</div>
      <div className="meta">
        <div className="brand">{product.brand}</div>
        <div className="title">{product.title}</div>
        <div className="price-row">
          <div className="price">₹ {product.price.toLocaleString()}</div>
          {product.oldPrice && <div className="old">₹ {product.oldPrice.toLocaleString()}</div>}
          {product.oldPrice && (
            <div className="discount">{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off</div>
          )}
        </div>
        <div className="cta-row">
          <button className="add-btn" onClick={onAdd}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPage() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((s, p) => s + p.price * p.qty, 0);

  if (cart.length === 0)
    return (
      <div className="cart-page empty">
        <h2>Your cart is empty</h2>
        <Link to="/" className="continue">
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((p) => (
          <div key={p.id} className="cart-item">
            <img src={p.image} alt={p.title} />
            <div className="ci-meta">
              <div className="ci-title">{p.title}</div>
              <div className="ci-price">₹ {p.price.toLocaleString()}</div>
              <div className="qty-row">
                <button onClick={() => updateQty(p.id, Math.max(1, p.qty - 1))}>-</button>
                <span>{p.qty}</span>
                <button onClick={() => updateQty(p.id, p.qty + 1)}>+</button>
              </div>
              <button className="remove" onClick={() => removeFromCart(p.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div>Total: ₹ {total.toLocaleString()}</div>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
}

