import React, { useState } from "react";

// Example product data
const products = [
  { name: "Pencil", price: 10, category: "Stationery" },
  { name: "Notebook", price: 25, category: "Stationery" },
  { name: "Backpack", price: 150, category: "Bags" },
  { name: "Headphones", price: 500, category: "Electronics" },
  { name: "Calculator", price: 120, category: "Electronics" },
];

const categories = ["All", "Stationery", "Bags", "Electronics"];

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products according to selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h2>Product List</h2>

      {/* Category dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Display filtered product list */}
      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>
            {product.name} - {product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
