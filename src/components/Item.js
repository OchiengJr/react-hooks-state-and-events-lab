import React, { useState } from "react";

function Item({ name, category }) {
  const [addedInCart, setAddedInCart] = useState(false);

  function handleAddingToCart() {
    setAddedInCart((added) => !added);
  }

  return (
    <li className={addedInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddingToCart}>
        {addedInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
