import React from "react";
import { useNavigate  } from 'react-router-dom'
import { useCart } from "./cartcontext";
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();
  const navigate=useNavigate();
  

  return (
    <div className="cart">
      <div className="my">
      <img src="bask.png" alt="Basket" className='bask'/>
      <p className='mb1'>My Basket</p>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
                <div className="pi">
                <p className="ip">
                ₹{item.price}
                </p>
              <p className="in">
                <button className="times">1x</button>{item.name} 
              </p>

              <p className="ex">
                {item.ex}
              </p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="delete"><img src='delete.png' /></button>
            </div>
          ))}
        </div>
      )}

      <div className="sub">
        <p className="subs"><p className="s">Subtotal:</p> <p className="amount">₹{total}</p></p>
        <p className="subs1"><p className="s">Discounts:</p> <p className="amount1">-₹3</p></p>
        <p className="subs2"><p className="s">Delivery Fee:</p> <p className="amount2">₹3</p></p>
      </div>

      <div className="cart-total">
        <p className="total">Total to pay: ₹{total}</p>
      </div>

      <div className="additional-features">
        <button className="choose-free-item-btn"><p className='ceo'>Choose your free item..</p><img src='dd1.png' className='dd'/></button>
        <button className="choose-free-item-btn1"><p className='ceo'>Apply Coupon Code here</p><img src='dd2.png' className='dd1'/></button>
      </div>
      <div className="delivery-collection">
        <button className="delivery-btn"><img src='sc1.png' className='sc1'/><p className='delivery'>Delivery</p> Starts at 17:50</button>
        <p className='line1'><img src='line1.png'/></p>
        <button className="collection-btn"><img src='sc2.png' className='sc1'/><p className='delivery'>Collection</p>Starts at 16:50</button>
      </div>

      <button disabled={cart.length === 0} onClick={()=>navigate('/Checkout')} className="checkout-btn">
        <img src="forward.png" className="for"/>
        <p className="check">Checkout!</p>
      </button>
    </div>
  );
};

export default Cart;
