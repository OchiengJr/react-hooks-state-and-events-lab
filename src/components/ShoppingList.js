import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedchoice, setSelectedChoice] = useState("All")

  const filterCategory = selectedchoice === "All" ?
    items :
    items.filter((item) => item.category === selectedchoice)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedchoice} onChange={(e) => setSelectedChoice(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
