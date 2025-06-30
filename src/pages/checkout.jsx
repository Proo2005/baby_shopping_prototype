import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/productData";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cartProduct = products[0];

  const productTotal = cartProduct.price;
  const deliveryFee = 50;
  const discount = 50;
  const totalPrice = productTotal + deliveryFee - discount;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // 🛑 Replace with your Razorpay Key ID
      amount: totalPrice * 100, // in paise
      currency: "INR",
      name: "My E-Commerce Site",
      description: "Test Transaction",
      image: cartProduct.image,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate("/payment-success"); // Optional: redirect on success
      },
      prefill: {
        name: "Prodipta Chakraborty",
        email: "user@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "E-commerce Checkout"
      },
      theme: {
        color: "#000000"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout-page">
      {/* (same styles and layout as before) */}
      <style>{`
  .checkout-page {
    padding: 2rem;
    background-color: #f8f8f8;
    color: #111;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 900px;
    margin: auto;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .checkout-header {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #222;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
  }

  .cart-section {
    display: flex;
    gap: 2rem;
    align-items: center;
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .checkout-image {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  .checkout-info {
    flex: 1;
  }

  .checkout-info h3 {
    margin: 0;
    font-size: 1.8rem;
    color: #333;
  }

  .checkout-info p {
    font-size: 1rem;
    margin: 0.4rem 0;
    color: #666;
  }

  .summary {
    margin-top: 2.5rem;
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    font-size: 1rem;
    line-height: 1.6;
  }

  .total {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 1rem;
    color: #000;
  }

  .payment-btn {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: #111;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1rem;
    transition: background 0.3s ease;
  }

  .payment-btn:hover {
    background: #333;
  }
`}</style>


      <div className="checkout-header">Check Out</div>
      <div className="cart-section">
        <img src={cartProduct.image} alt={cartProduct.name} className="checkout-image" />
        <div className="checkout-info">
          <h3>{cartProduct.name}</h3>
          <p>High quality baby product suitable for your little one.</p>
          <p>Price: $ {cartProduct.price}</p>
          <p>Quantity: 1</p>
        </div>
      </div>

      <div className="summary">
        Amount: $ {productTotal.toFixed(2)} <br />
        Delivery Fees: $ {deliveryFee.toFixed(2)} <br />
        Discount: -$ {discount.toFixed(2)} <br />
        <div className="total">Total Price: $ {totalPrice.toFixed(2)}</div>
      </div>

      <button className="payment-btn" onClick={handlePayment}>Pay with Razorpay</button>
    </div>
  );
}
