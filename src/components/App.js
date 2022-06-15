import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [isOn, setIsOn] = useState(false);
   
   function handleClick() {
    setIsOn((isOn) => !isOn);
   }

  const appClassDark = isOn ? "App light" : "App dark";
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App light" : "App dark";
                          //App dark     //App light
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button className={appClassDark} onClick={handleClick}>{isOn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
