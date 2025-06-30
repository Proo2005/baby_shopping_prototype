import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Replace these with your own image URLs or local image imports
const logoImage = "https://cdn-icons-png.flaticon.com/512/306/306473.png"; // small baby face icon
const heroImage = "./baby1.png"; // baby product image

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #fffaf0; /* Cream */
          font-family: 'Segoe UI', sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #fff;
          border-bottom: 1px solid #eee;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .logo-img {
          width: 40px;
          height: 40px;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: #111;
        }

        .cart {
          position: relative;
          font-size: 1.5rem;
          color: #111;
          cursor: pointer;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background-color: #000;
          color: #fff;
          border-radius: 50%;
          font-size: 0.7rem;
          padding: 2px 6px;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 1.1rem;
          color: #333;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #000;
        }

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 3rem 2rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .hero-text {
          max-width: 550px;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          color: #111;
          margin-bottom: 1rem;
        }

        .hero-text p {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .shop-btn {
          padding: 0.8rem 1.8rem;
          font-size: 1rem;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .shop-btn:hover {
          background-color: #333;
        }

        .hero-image {
          max-width: 450px;
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
          }

          .nav-links {
            flex-wrap: wrap;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header">
        <div className="logo-area">
          <img src={logoImage} alt="logo" className="logo-img" />
          <div className="logo">Boo-Boo</div>
        </div>
        <div className="cart">
          <FaShoppingCart />
          <div className="cart-count">0</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/home">Product</Link>
        <Link to="/checkout">Shopping</Link>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>High quality product for your little ones</h1>
          <p>
            Quality products imported from Japan, Europe, USA for baby boys and girls and also for mummy.
          </p>
          <button className="shop-btn"onClick={() => navigate("/home")}>Shop Now</button>
        </div>
        <img src={heroImage} alt="baby products" className="hero-image" />
      </div>
    </div>
  );
}
