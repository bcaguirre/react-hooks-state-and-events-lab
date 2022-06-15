import React, { useState } from "react";

function Item({ name, category }) {
  const add = "Add to Cart";
  const remove = "Remove from Cart";
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(inCart ? false : true);
  }

  const liClassName = "Cart" + (inCart ? " in-cart" : "");
  
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={() => handleClick()}>{inCart ? remove : add}</button>
    </li>
  );
}

export default Item;
