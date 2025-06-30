import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTh, FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedSearch, setSelectedSearch] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const navigate = useNavigate();
  const products = [
    // Clothing (10)
    { name: "Cotton Romper", price: 25, image: "/cloth/cloth_1.png", age: 3, category: "Clothing", gender: "Boy" },
    { name: "Denim Overalls", price: 35, image: "/cloth/cloth_2.png", age: 6, category: "Clothing", gender: "Boy" },
    { name: "Winter Jumpsuit", price: 40, image: "/cloth/cloth_3.png", age: 9, category: "Clothing", gender: "Girl" },
    { name: "Summer Frock", price: 30, image: "/cloth/cloth_4.png", age: 12, category: "Clothing", gender: "Girl" },
    { name: "Striped Onesie", price: 20, image: "/cloth/cloth_5.png", age: 3, category: "Clothing", gender: "All" },
    { name: "Baby Pajamas", price: 22, image: "/cloth/cloth_6.png", age: 18, category: "Clothing", gender: "All" },
    { name: "Printed Shirt", price: 28, image: "/cloth/cloth_7.png", age: 15, category: "Clothing", gender: "Boy" },
    { name: "Knit Sweater", price: 32, image: "/cloth/cloth_8.png", age: 21, category: "Clothing", gender: "Girl" },
    { name: "Velvet Dungarees", price: 38, image: "/cloth/cloth_9.png", age: 12, category: "Clothing", gender: "Boy" },
    { name: "Floral Dress", price: 34, image: "/cloth/cloth_10.png", age: 6, category: "Clothing", gender: "Girl" },

    // Accessories (10)
    { name: "Stylish Hat", price: 15, image: "/acc/acc_1.png", age: 6, category: "Accessories", gender: "Girl" },
    { name: "Cute Sunglasses", price: 18, image: "/acc/acc_2.png", age: 9, category: "Accessories", gender: "Girl" },
    { name: "Woolen Cap", price: 12, image: "/acc/acc_3.png", age: 3, category: "Accessories", gender: "Boy" },
    { name: "Bunny Ears Headband", price: 14, image: "/acc/acc_4.png", age: 6, category: "Accessories", gender: "Girl" },
    { name: "Baby Mittens", price: 10, image: "/acc/acc_5.png", age: 3, category: "Accessories", gender: "All" },
    { name: "Warm Scarf", price: 13, image: "/acc/acc_6.png", age: 18, category: "Accessories", gender: "All" },
    { name: "Sun Hat", price: 16, image: "/acc/acc_7.png", age: 12, category: "Accessories", gender: "Boy" },
    { name: "Knitted Booties", price: 19, image: "/acc/acc_8.png", age: 9, category: "Accessories", gender: "Girl" },
    { name: "Pacifier Clip", price: 11, image: "/acc/acc_9.png", age: 6, category: "Accessories", gender: "All" },
    { name: "Leather Moccasins", price: 24, image: "/acc/acc_10.png", age: 15, category: "Accessories", gender: "Boy" },

    // Food (10)
    { name: "Baby Food Set", price: 30, image: "/food/food_1.png", age: 12, category: "Food", gender: "All" },
    { name: "Organic Cereal", price: 28, image: "/food/food_2.png", age: 6, category: "Food", gender: "All" },
    { name: "Fruit Puree", price: 22, image: "/food/food_3.png", age: 3, category: "Food", gender: "All" },
    { name: "Rice Crackers", price: 20, image: "/food/food_4.png", age: 6, category: "Food", gender: "All" },
    { name: "Milk Powder", price: 35, image: "/food/food_5.png", age: 9, category: "Food", gender: "All" },
    { name: "Baby Juice Pack", price: 18, image: "/food/food_6.png", age: 15, category: "Food", gender: "All" },
    { name: "Baby Snack Box", price: 25, image: "/food/food_7.png", age: 12, category: "Food", gender: "All" },
    { name: "Apple Puree", price: 17, image: "/food/food_8.png", age: 6, category: "Food", gender: "All" },
    { name: "Banana Mash", price: 19, image: "/food/food_9.png", age: 3, category: "Food", gender: "All" },
    { name: "Vegetable Blend", price: 21, image: "/food/food_10.png", age: 9, category: "Food", gender: "All" },

    // Toys (10)
    { name: "Plush Teddy", price: 20, image: "/toy/toy_1.png", age: 9, category: "Toy", gender: "All" },
    { name: "Building Blocks", price: 22, image: "/toy/toy_2.png", age: 12, category: "Toy", gender: "All" },
    { name: "Rattle Set", price: 15, image: "/toy/toy_3.png", age: 3, category: "Toy", gender: "All" },
    { name: "Colorful Teether", price: 10, image: "/toy/toy_4.png", age: 6, category: "Toy", gender: "All" },
    { name: "Stacking Rings", price: 18, image: "/toy/toy_5.png", age: 9, category: "Toy", gender: "All" },
    { name: "Baby Piano", price: 35, image: "/toy/toy_6.png", age: 18, category: "Toy", gender: "All" },
    { name: "Push Car", price: 40, image: "/toy/toy_7.png", age: 24, category: "Toy", gender: "Boy" },
    { name: "Soft Blocks", price: 26, image: "/toy/toy_8.png", age: 21, category: "Toy", gender: "Girl" },
    { name: "Tummy Time Mat", price: 33, image: "/toy/toy_9.png", age: 6, category: "Toy", gender: "All" },
    { name: "Rolling Drum", price: 29, image: "/toy/toy_10.png", age: 15, category: "Toy", gender: "All" }
  ];


  const handleAgeToggle = (ageRange) => {
    setSelectedAges((prev) =>
      prev.includes(ageRange)
        ? prev.filter((age) => age !== ageRange)
        : [...prev, ageRange]
    );
  };

  const filteredProducts = products
    .filter((product) => product.price <= priceRange)
    .filter((product) => {
      if (selectedSearch === "all") return true;
      return product.category.toLowerCase() === selectedSearch;
    })
    .filter((product) => {
      if (selectedCategory === "All") return true;
      return product.category === selectedCategory;
    })
    .filter((product) => {
      if (selectedGender === "All") return true;
      return product.gender === selectedGender;
    })
    .filter((product) => {
      if (selectedAges.length === 0) return true;
      return selectedAges.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return product.age >= min && product.age <= max;
      });
    })
    .sort((a, b) => {
      if (sortBy === "Name (A-Z)") return a.name.localeCompare(b.name);
      if (sortBy === "Name (Z-A)") return b.name.localeCompare(a.name);
      if (sortBy === "Price Range") return a.price - b.price;
      return 0;
    });

  return (
    <div className="shop-page">
      <style>{`
         .cart-logo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: black;
          font-size: 1.8rem;
          transition: transform 0.2s ease;
        }

        .cart-logo:hover {
          transform: scale(1.1);
        }

        .icon {
          font-size: 1.8rem;
        }

        .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: black;
          color: white;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 999px;
        }

        .shop-page {
          display: flex;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background-color: white;
          color: black;
        }

        .sidebar {
          width: 250px;
          background: #fff;
          padding: 1rem;
          border-right: 1px solid #ccc;
        }

        .sidebar h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .sidebar h3 {
          margin-top: 1.5rem;
          font-size: 1rem;
        }

        .sidebar select,
        .sidebar input[type="range"] {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.4rem;
        }

        .sidebar label {
          display: flex;
          align-items: center;
          margin: 0.3rem 0;
        }

        .sidebar input[type="radio"],
        .sidebar input[type="checkbox"] {
          margin-right: 0.5rem;
        }

        .sidebar button {
          margin-top: 1.5rem;
          width: 100%;
          background: black;
          color: white;
          border: none;
          padding: 0.5rem;
          border-radius: 5px;
          cursor: pointer;
        }

        .products-section {
          flex: 1;
          padding: 2rem;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .view-toggle button {
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .products-grid.list-view {
          display: block;
        }

        .product-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          background: white;
          text-decoration: none;
          color: black;
          display: block;
          margin-bottom: 1rem;
        }

        .products-grid:not(.list-view) .product-card {
          display: block;
        }

        .product-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .product-details {
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      {/* Sidebar Filters */}
      <div className="sidebar">
        <h2>Filters</h2>

        <h3>Search by</h3>
        <select value={selectedSearch} onChange={(e) => setSelectedSearch(e.target.value)}>
          <option value="all">All</option>
          <option value="clothing">👕 Cloth</option>
          <option value="accessories">🎩 Accessories</option>
          <option value="toy">🧸 Toy</option>
          <option value="food">🍽️ Food</option>
        </select>

        <h3>Category</h3>
        <div>
          {['All', 'Clothing', 'Accessories', 'Toy', 'Food'].map((cat) => (
            <label key={cat}>
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={(e) => setSelectedCategory(e.target.value)}
              /> {cat}
            </label>
          ))}
        </div>

        <h3>Product For?</h3>
        <div>
          {['All', 'Boy', 'Girl'].map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                checked={selectedGender === g}
                onChange={(e) => setSelectedGender(e.target.value)}
              /> {g}
            </label>
          ))}
        </div>

        <h3>Price Range: $0 - ${priceRange}</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />

        <h3>Age</h3>
        {[...Array(8)].map((_, i) => {
          const range = `${i * 3}-${(i + 1) * 3}`;
          return (
            <label key={range}>
              <input
                type="checkbox"
                checked={selectedAges.includes(range)}
                onChange={() => handleAgeToggle(range)}
              />
              {range} months
            </label>
          );
        })}

        <button onClick={() => {
          setSortBy("");
          setPriceRange(1000);
          setSelectedAges([]);
          setSelectedSearch("all");
          setSelectedCategory("All");
          setSelectedGender("All");
        }}>Clear Filters</button>
      </div>

      {/* Product Display */}
      <div className="products-section">
        <div className="products-header">
          <div className="view-toggle">
            <button onClick={() => setView("grid")}><FaTh /></button>
            <button onClick={() => setView("list")}><FaBars /></button>
          </div>
          <div>
            <span>{filteredProducts.length} products found</span>
            <select
              style={{ marginLeft: "1rem" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Sort by</option>
              <option value="Price Range">Price Range</option>
              <option value="Name (A-Z)">Name (A-Z)</option>
              <option value="Name (Z-A)">Name (Z-A)</option>
            </select>

          </div>
          <div className="cart-logo">
            <Link to="/checkout">
              <FaShoppingCart className="icon" />
            </Link>
          </div>
        </div>

        <div className={`products-grid ${view === "list" ? "list-view" : ""}`}>
          {filteredProducts.map((product, id) => (
            <Link
              to={`/description/${id + 1}`} // ✅ Proper dynamic path
              className="product-card"
              key={id}
              style={view === 'list' ? { display: 'flex', alignItems: 'center' } : {}}
            >
              <img
                src={product.image}
                alt={product.name}
                style={view === 'list' ? { width: '150px', height: '150px', marginRight: '1rem' } : {}}
              />
              <div className="product-details">
                <span>{product.name}</span>
                <span>$ {product.price}</span>
              </div>
            </Link>


          ))}
        </div>
      </div>
    </div>
  );
}