import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductDescription({ products }) {
  const { id } = useParams();
  const product = products[parseInt(id) - 1];
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  if (!product) return <div>Product not found</div>;
  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="description-page">
      <style>{`
        .description-page {
          font-family: Arial, sans-serif;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          background-color: white;
          color: black;
        }

        .description-header {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .description-content {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .product-image {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .product-info {
          flex: 1;
        }

        .product-name {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-price {
          font-size: 1.4rem;
          color: #222;
          color:2e2714;
          margin-bottom: 1rem;
        }

        .product-description {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .product-details {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .separator {
          border-top: 1px solid #ccc;
          margin: 1rem 0;
        }

        .quantity-add-cart {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-button {
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          border: 1px solid #000;
          background: transparent;
          cursor: pointer;
        }

        .add-to-cart {
          padding: 0.5rem 1rem;
          background: black;
          color: white;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cart-logo {
          font-size: 1.5rem;
          cursor: pointer;
          margin-left:99%;
        }
      `}</style>

      <div className="description-header">Description</div>

      <div className="products-header">
        
        <div className="cart-logo" onClick={() => navigate('/checkout')}>
          <FaShoppingCart className="icon" />
        </div>
      </div>

      <div className="description-content">
        <img src={product.image} alt={product.name} className="product-image" />

        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-price">$ {product.price}</div>
          <div className="product-description">
            This is a high quality baby product suitable for your little one.
          </div>
          <div className="product-details">
            Availability: In Stock<br />
            Brand: Mama and Kids<br />
            Suitable for Age: {product.age} months
          </div>

          <div className="separator"></div>

          <div className="quantity-add-cart">
            <div className="quantity-selector">
              <button className="quantity-button" onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => alert('Product added to cart')}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
