import React, { useState } from "react";

function Item({ name, category }) {
  // Use more descriptive state variable name
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Use a more descriptive function name
  function handleToggleCart() {
    // Use functional form of setState for previous state dependency
    setIsAddedToCart((prevAdded) => !prevAdded);
  }

  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Use a more descriptive label for the button */}
      <button className="add" onClick={handleToggleCart}>
        {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

