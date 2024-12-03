import React from "react";
import { useCart } from "../context/CartContext";

const ItemList = () => {
  const { addToCart } = useCart();
 
  const items = [
    { id: 1, price: 120, name: "Royal Cheese Burger", extra:"With extra fries" },
    { id: 2, price: 70 , name: "Potato Veggies", extra:"No Mushrooms + green peppers"},
    { id: 3, price: 40, name: "Coke Coca Cola" },
  ];

  

  return (
    <div className="items">
      <h2>Items List</h2>
      {items.map((item) => (
        <div key={item.id} className="item">
          <p>₹{item.price}</p>
          <p>{item.name}</p>
          <p>{item.extra}</p>
          
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
