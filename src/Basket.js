import React from 'react';
import { useState } from 'react';
import './Basket.css';

export const useCart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const clearCart = () => {
    setItems([]);
  };

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

const Basket = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 3; 
  const deliveryFee = 3;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="basket-container">
      <div className="basket-header">
        <img src="bask.png" alt="Basket" className='bask'/>
        <p className='mb1'>My Basket</p>
      </div>

      {items.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <div className="basket-items">
          {items.map((item, index) => (
            <div className="basket-item" key={index}>
              <span className="item-quantity">{item.quantity}1x</span>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-description">{item.description}</p>
              </div>
              <p className="item-price">₹{item.price * item.quantity}</p>
              <button
                className="remove-btn"
                onClick={() => {
                  if (typeof item.onRemove === 'function') item.onRemove(item.name);
                }}
              >
                <img src='delete.png'/>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="basket-summary">
        <p className='it1'>Sub Total: ₹{subtotal.toFixed(2)}</p>
        <p className='it2'>Discounts: -₹{discount.toFixed(2)}</p>
        <p className='it3'>Delivery Fee: ₹{deliveryFee.toFixed(2)}</p>
      </div>
        <p className='it4'>
          <p className='st'>Total to pay:  ₹{total.toFixed(2)}</p>
        </p>
      

      <div className="additional-features">
        <button className="choose-free-item-btn"><p className='ceo'>Choose your free item..</p><img src='dd1.png' className='dd'/></button>
        <button className="choose-free-item-btn1"><p className='ceo'>Apply Coupon Code here</p><img src='dd2.png' className='dd'/></button>
      </div>

      <div className="delivery-collection">
        <button className="delivery-btn"><img src='sc1.png' className='sc1'/><p className='delivery'>Delivery</p> Starts at 17:50</button>
        <p className='line1'><img src='line1.png'/></p>
        <button className="collection-btn"><img src='sc2.png' className='sc1'/><p className='delivery'>Collection</p>Starts at 16:50</button>
      </div>

      <button className="checkout-btn" disabled={items.length === 0}> 
        <img src='forward.png' className='forward'/>
        <p className='check'>Checkout!</p>
      </button>
    </div>
  );
};

export default Basket;
