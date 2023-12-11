import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState(false);

  const appClass = dark ? "App dark" : "App light";

  function handleDarkMode() {
    setDark((darkMode) => !darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Dynamically label the dark mode toggle button */}
        <button onClick={handleDarkMode}>
          {dark ? "White Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

