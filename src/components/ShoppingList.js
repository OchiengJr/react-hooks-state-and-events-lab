import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Use meaningful names for state variables
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter items based on selected category
  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Use onChange event handler directly */}
        <select
          name="filter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {/* Use meaningful default text for the filter */}
          <option value="All">All Categories</option>
          {/* Map over item categories to create filter options */}
          {Array.from(new Set(items.map(item => item.category))).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <ul className="Items">
        {/* Render filtered items */}
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
