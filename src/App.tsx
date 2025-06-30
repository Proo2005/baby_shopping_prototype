import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/landing';
import ProductDescription from './pages/description'; // adjust path if needed
import ShopPage from './pages/home';
import './App.css';

import products from "./data/productData";
import CheckoutPage from './pages/checkout';

// import ShippingPage from './pages/shipping';
// import ProductsPage from './pages/products';
// import { products } from 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<ShopPage />} />
        <Route path="/description/:id" element={<ProductDescription products={products} />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Future routes can be added here */}
        {/* <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/products" element={<ProductsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
