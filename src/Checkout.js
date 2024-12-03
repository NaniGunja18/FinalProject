import React from "react";
import { useCart } from "./cartcontext";
import { useAddress } from './delcontext'
import './Checkout.css';
import { useNavigate } from "react-router-dom";
import Header3 from './Header3';

const CheckoutPage = () => {
  const { cart, total } = useCart();
  const { selectedAddress } = useAddress(); 
  const navigate = useNavigate();

  const popularRestaurants = [
    { id: 1, img: "/pr1.png" },
    { id: 2, img: "/pr2.png" },
    { id: 3, img: "/pr3.png" },
    { id: 4, img: "/pr4.png" },
    { id: 5, img: "/pr5.png" },
    { id: 6, img: "/pr6.png" },
  ];

  return (
    <div className="checkout-page">
      <div>
        <Header3 />
      </div>

      <div className="order">
        <p className="s1">
          <img src="arr.png" className="arr" alt="Arrow" />
          <p className="mp">Your Order Details</p>
        </p>
      </div>

      <div className="Main">
        <button className="order-details">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="item-name">
                {item.name}
                <br />
                1x item
              </p>
              <p className="item-price">₹{item.price}</p>
              <p className="item-extra">{item.extra}</p>
            </div>
          ))}
          <div className="input">
            <p className="n">Notes</p>
            <button className="add-btn">
              <p className="a">Add order notes</p>
            </button>
          </div>
        </button>

        <div className="right">
          <div className="order-summary">
            <button className="deli" onClick={() => navigate("/delivary")}>
              <button className="l">
                <img src="loc.png" className="loc" />
              </button>
              <p className="d">Delivery Address</p>
              <img src="ar.png" className="ar" alt="Arrow" />
            </button>
            {selectedAddress ? (
              <div className="selected-address">
                <p className="address-name">{selectedAddress.name}</p>
                <p className="address-details">{selectedAddress.address}</p>
                <p className="address-phone">Phone: {selectedAddress.phone}</p>
              </div>
            ) : (
              <p className="no-address"></p>
            )}

            <img src="lin.png" className="lin" alt="Divider" />
            <p className="money">
              <strong className="cal1">Items Total</strong> ₹{total}
            </p>
            <p className="money">
              <strong className="cal2">Sales Tax</strong> ₹10
            </p>
            <img src="lin.png" className="lin" alt="Divider" />
            <p className="money">
              <strong className="cal3">Subtotal</strong>
              <p className="percent">₹{total + 10}</p>
            </p>
          </div>

          <button onClick={()=>navigate("/Payment",{ state: { amount: total + 10 } })} className="payment-btn">
            <p>Choose Payment Method</p>
          </button>
        </div>
      </div>

      <section className="popular-restaurants">
        <h2>Similar Restaurants</h2>
        <div className="restaurant-logos">
          {popularRestaurants.map((restaurant) => (
            <button
              key={restaurant.id}
              onClick={() => navigate("/Product")}
              className="re-logos"
            >
              <img src={restaurant.img} alt={`Restaurant ${restaurant.id}`} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
