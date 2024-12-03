import React from "react";
import "./Home.css";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const HomePage = () => {
  const location = useLocation();
  const {name }= location.state || {}; 

  const navigate = useNavigate();

  const exclusiveDeals = [
    { id: 1, img: "/img1.png"},
    { id: 2, img: "/img2.png"},
    { id: 3, img: "/img3.png"},
  ];

  const pupularCategories = [
    {id: 1, img : "/pc1.png"},
    {id: 2, img : "/pc2.png"},
    {id: 3, img : "/pc3.png"},
    {id: 4, img : "/pc4.png"},
    {id: 5, img : "/pc5.png"},
    {id: 6, img : "/pc6.png"},
  ];

  const popularRestaurants = [
    { id: 1, img: "/pr1.png",name:"McDonald's East London "},
    { id: 2, img: "/pr2.png",name:"Papa Johns"},
    { id: 3, img: "/pr3.png",name:"KFC West London"},
    { id: 4, img: "/pr4.png",name:"Texas Chicken"},
    { id: 5, img: "/pr5.png",name:"Burger King"},
    { id: 5, img: "/pr6.png",name:"Shaurma 1"},
  ];


  const stats = [
    { id: 1, value: "546+", label: "Registered Restaurants" },
    { id: 2, value: "789,900+", label: "Orders Delivered" },
    { id: 3, value: "690+", label: "Active Partners" },
    { id: 4, value: "17,457+", label: "Food Items Available" },
  ];

  return (
    <div className="homepage-container">
      <div>
        <Header/>
      </div>
      <section className="banner">
        <div className="banner-content">
          <span>Order now and enjoy your delicious meals at lightning-fast speeds.</span>
          <h1>
            Feast Your Senses, <br /> <span className="con">Fast and Fresh</span>
          </h1>
          <p>Enter a postcode to see what we deliver</p>
          <div className="search-container">
            <input className='inp-btn' type="text" placeholder="e.g. EC4R 3TE" />
            <button className="search-btn">Search</button>
          </div>
        </div>
        <div className="banner-image">
          <img src="/g13.png" alt="Delicious Food" />
        </div>
      </section>

      <section className="exclusive-deals">
        <nav className="ex-nav">
        <span className="nav-1">Up to -40% 🎊 Order.uk exclusive deals</span>
        <span className="nav-2">Vegan</span>
        <span className="nav-2">Sushi</span>
        <span className="nav-3"><button className="nav-4">Pizza & Fast food</button></span>
        <span className="nav-2">others</span>
        </nav>
        <div className="deal-items">
          {exclusiveDeals.map((deal) => (
            <div key={deal.id} className="deal-card">
              <img src={deal.img} alt={deal.title} ></img>
              <p>{deal.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-categories">
        <h2>Order.uk Popular Categories 🤩</h2>
        <div className="category-grid">
          {pupularCategories.map((pop)=>(
            <div key={pop.id} className="extra-items">
              <img src={pop.img} alt={pop.title} />
            </div>
          ))}
        </div>
      </section>

      <section className="popular-restaurants">
        <h2>Popular Restaurants</h2>
        <div className="restaurant-logos">
          {popularRestaurants.map((restaurant) => (
            <button onClick={() => navigate("/Product",{ state: { resName:restaurant.name } })} type="submit" className="re-logos">
            <img src={restaurant.img} alt={restaurant.alt} />
          </button>
            
          ))}
        </div>
      </section>

      <div className="bottom-img">
        <img src="/bottom-img.png"/>
      </div>

      <div className="chefs">
        <img src="chef1.png"/>
        <img src="chef2.png"/>
      </div>
      
      <div className="know-more">
           <nav className="km-nav">
            <span className="km-2">Know more about us!</span>
            <span className="km-1"><button className="km-3">Frequent Questions</button></span>
            <span className="km-1">Who we are?</span>
            <span className="km-1">Partner Program</span>
            <span className="km-1">Help & Support</span>
           </nav>
           <div className="inside-km">
             <div className="inside">
              <div className="sub-inside-1">
                 <span className="how"><button className="sub-in">How does Order.UK work?</button></span>
                 <span className="in">What payment methods are accepted?</span>
                 <span className="in">Can I track my order in real-time?</span>
                 <span className="in">Are there any special discounts or<br/>promotions available?</span>
                 <span className="in">Is Order.UK available in my area?</span>
              </div>
              <div className="sub-inside-2">
                 <button className="img-in"><p className="para">Place an Order!</p><img src="b1.png" /><p>Place order through our website or Mobile app</p></button>
                 <button className="img-in-1"><p className="para">Track Progress</p><img src="b2.png" /><p>Your can track your order status with delivery time</p></button>
                 <button className="img-in"><p className="para">Get your Order!</p><img src="b3.png" /><p>Receive your order at a lighting fast speed!</p></button>
                 <p className="sol">Order.UK simplifies the food ordering process. Browse through our diverse menu, <br></br>select your favorite dishes, and proceed to checkout. Your delicious meal will be<br></br> <p className="sol-2">on its way to your doorstep in no time!</p></p>
              </div>

             </div>
           </div>
      </div>
      
      <div className="count">
        <span className="c1"><p className="cnt-con">546+ </p><p className="in-con-1">Registered Riders</p></span>
        <img src="line.png" className="c1"/>
        <span className="c1"><p className="cnt-con">789,900+</p><p className="in-con-2">Orders Delivered</p></span>
        <img src="line.png" className="c1"/>
        <span className="c1"><p className="cnt-con">690+</p><p className="in-con-3">Restaurants Partnered</p></span>
        <img src="line.png" className="c1"/>
        <span className="c1"><p className="cnt-con">17,457+</p><p className="in-con-4">Food items</p></span>
      </div>
    
    </div>
  );
};

export default HomePage;
