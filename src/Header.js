import React from "react";
import './Header.css';
import { useNavigate, useLocation } from "react-router-dom";

const HeaderPage=()=>{
  // const location = useLocation();
  // const {name }= location.state || {};
  const navigate=useNavigate();
  const name = localStorage.getItem("name");


return(
    <div className="header">
        <header className="top-navbar">
      <span className="naming">🌟 Get 5% Off your first order,<span className="cl">Promo: ORDER5</span></span>
        <div className="location-container">
          <img src="/g8.png" alt="Location Icon" />
          <span>
            Regent Street, A4, A4201, London <span className="color-change">change location</span>
          </span> 
        </div>
        <button className="cart-btn">
          <img src="/g9.png" alt="Cart" />
          My Cart
        </button>
      </header>
      
      <header className="main-navbar">
        <div className="logo-container">
          <img src="/g2.png" alt="Order.uk Logo" />
        </div>
        <nav className="nav-links">
          <button onClick={()=> navigate("/Home") } className="letter1"><span className="letter">Home</span></button>
          <span className="letter">Browse Menu</span>
          <span className="letter">Special Offers</span>
          <span className="letter" onClick={()=> navigate("/Product") } >Restaurants</span>
          <span className="letter">Track Order</span>
        </nav>
        <button onClick={() => navigate("/Profile")} className="sign-btn">
          <img src="/g10.png" alt="Login Icon" />
          Hey,{name}
        </button>
      </header>  
    </div>
);
};
export default HeaderPage;