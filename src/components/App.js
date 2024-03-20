import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Use a more descriptive state variable name
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  function toggleDarkMode() {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  }

  // Dynamically determine class name based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Use a more descriptive label for the dark mode toggle button */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      {/* Pass item data to ShoppingList component */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
