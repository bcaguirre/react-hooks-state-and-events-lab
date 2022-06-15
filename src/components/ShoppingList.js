import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");  
  
  function handleLiClick(id) {
  const newFoodArray = items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
      };
    } else {
      return item;
    }
  });
  setSelectedCategory(newFoodArray);
  }
  const foodsToDisplay = items.filter((category) => {
    if (selectedCategory === "All") {
      return true;
    }else {
      return category.id === selectedCategory;
    }
  });

  const foodList = foodsToDisplay.map((item) => (
    <li key={item.id} onClick={() => handleLiClick(item.id)}>
      {item.name} | {item.category}
    </li>
  ));

  function handleSelect(event) {
   setSelectedCategory(event.target.value);
   return foodList;
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
