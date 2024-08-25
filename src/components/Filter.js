// src/components/Filter.js
import React from "react";

function Filter({ onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleChange}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
        <option value="grains">Grains</option>
        <option value="seafood">Seafood</option>
        <option value="baked-goods">Baked Goods</option>
      </select>
    </div>
  );
}

export default Filter;
