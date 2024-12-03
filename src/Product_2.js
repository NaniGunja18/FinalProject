import React, { useState } from 'react';
import './Product_2.css';
import { useNavigate , useLocation } from 'react-router-dom'
import { useCart } from "./cartcontext";
import Leaflet from './Leaflet'
import Header1 from './Header1'
import Cart from './cart';

const ProductPage = () =>{
  const location = useLocation();
  const { resName } = location.state || {};
  const { name } = location.state || {};
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [copySuccess, setCopySuccess] = useState('');
  const filePath = '/cart';

  const fullFilePath = window.location.origin + filePath;


    const copyLink = () => {
      const currentUrl = window.location.href; 
      navigator.clipboard.writeText(fullFilePath).then(() => {
        setCopySuccess('Link copied to clipboard!');
        setTimeout(() => setCopySuccess(''),); 
      }).catch((error) => {
        console.error('Failed to copy: ', error);
      });
    };

    const popularRestaurants = [
      { id: 1, img: "/pr1.png"},
      { id: 2, img: "/pr2.png"},
      { id: 3, img: "/pr3.png"},
      { id: 4, img: "/pr4.png"},
      { id: 5, img: "/pr5.png"},
      { id: 5, img: "/pr6.png"},
    ];

    const items1 = [
      { id: 1, name: "Potato Veggies", price: 70, img: "/order-4.png" },
      { id: 2, name: "Potato Veggies", price: 70, img: "/order-5.png" },
      
      
    ];

    const items11=[
      { id: 3, name: "Potato Veggies", price: 70, img: "/order-5.png" },
      { id: 4, name: "Potato Veggies", price: 70, img: "/order-5.png" },
    ];
  
    const items2 = [
      { id: 1, name: "Coke Cola", price: 40, img: "/order-6.png" },
      { id: 2, name: "Coke Cola", price: 40, img: "/order-7.png" },
      
      
    ];

    const items22=[
      { id: 3, name: "Coke Cola", price: 40, img: "/order-8.png" },
      { id: 4, name: "Coke Cola", price: 40, img: "/order-9.png" },
    ];
  
    const items3 = [
      { id: 1, name: "Royal Cheese Burger", price: 120, img: "/cd1.png" },
      { id: 2, name: "Potato Veggies", price: 70, img: "/cd2.png" },
      
      
    ];

    const items33=[
      { id: 3, name: "Coke Cola", price: 40, img: "/cd3.png" },
      { id: 4, name: "Grilled Sandwich", price: 100, img: "/cd4.png" },
    ];
    

    return(
    <div className='Productpage-container'>
           <div>
            <Header1/>
           </div>   
        <div className='main-img'>
          
            <img src='bb.png' className='mcdon'/>
            


        </div>         
      <div className='offers'> 
        <span className='off'>All Offers from McDonald's East London</span>  
        <button className='input-bar'><img src='/sm.png'></img>Search from menu...</button>
      </div>

     <div>
      <nav className='navbar-main'>
        <button className='nav-10-btn'><span className='nav-10'>Offers</span></button>
        <span className='nav-2'>Burgers</span>
        <span className='nav-2'>Fries</span> 
        <span className='nav-2'>Snacks</span>
        <span className='nav-2'>Salads</span>
        <span className='nav-2'>Cold drinks</span>
        <span className='nav-2'>Happy Meal®</span>
        <span className='nav-2'>Desserts</span>
        <span className='nav-2'>Hot drinks</span>
        <span className='nav-2'>Sauces</span>
        <span className='nav-2'>Orbit®</span>
      </nav>
      </div>
    <div className='p-c'>
      <div className='left-side'>
      <div className='book-1'>
        <img src='order-1.png'/>
        <img src='order-2.png'/>
      </div>
      <div className='book-1'>
        <img src='order-3.png'/>
      </div>
      <div className='bg'>
        <span className='burgers'>Burgers</span>
      </div>
      
        
      <div className="items-container">
        {items1.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>

      <div className="items-container">
        {items11.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>

        <div className='fr'>
            <span className='fries'>Fries</span>
        </div>
        
        <div className="items-container">
        {items2.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>

      <div className="items-container">
        {items22.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>

        <div className='cd'>
             <span className='cool-drinks'>Cold Drinks</span>
        </div>

        <div className="items-container">
        {items3.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>

      <div className="items-container">
        {items33.map((item1) => (
          <div key={item1.id} className="item">
            <div className="item-image" onClick={() => addToCart(item1)}>
              <img src={item1.img} alt={item1.name} className="img-block"/> 
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='right-side'>
        <div className="link">
          <img src='share.png'/>
          <p className='share'>Share this cart with your friends</p>  
          <button className='copy' onClick={copyLink}>Copy Link</button>
          {copySuccess && <p>{copySuccess}</p>}
        </div>
         <Cart/>
      </div>

      </div>  


        <div className='delivary-details'>
            <dev className='d-left'>
                  <div className='left-con'>
                      <span><img src='Tracking.png'/><span className='del1'>Delivery information</span></span>
                      <span className='del3'><p className='days'>Monday:</p> <p>12:00 AM-3:00 AM, 8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Tuesday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Wednesday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Thursday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Friday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Saturday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Sunday:</p> <p>8:00 AM-12:00 AM</p></span>
                      <span className='del2'><p className='days'>Estimated time until delivery:</p> <p>20 min</p></span>
                  </div>
                  <div className='right-con'>
                      <span><img src='id.png'/><span className='del1'>Contact information</span></span>
                      <span className='del3'>if you have allergies or other dietary</span>
                      <span className='del2'>restrictions, please contact the restaurant. The </span>
                      <span className='del2'>restaurant will provide food-specific</span>
                      <span className='del2'>information upon request</span>
                      <span className='del2'>Phone number</span>
                      <span className='del2'>+934443-43</span>
                      <span className='del2'>Website</span>
                      <span className='del2'>http://mcdonalds.uk/</span>
                  </div>
            </dev>
            <dev className='d-right'>
                      <span><img src='cl.png'/><span className='del1'>Operational Times</span></span>
                      <span className='del3'><p className='days'>Monday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Tuesday:</p> <p>8:00 AM-3:00 AM</p> </span>
                      <span className='del2'><p className='days'>Wednesday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Thursday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Friday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Saturday:</p> <p>8:00 AM-3:00 AM</p></span>
                      <span className='del2'><p className='days'>Sunday:</p> <p>8:00 AM-3:00 AM</p></span>
            </dev>
        </div>

        <div className='leaflet'>
              <Leaflet/>             
        </div>

        <div className='comments'>
          <div className='cmt'>
            <p className='cmt1'>
            Customer Reviews
            </p>
            <img src='arrow-left.png' className='arr'/>
            <img src='arrow-right.png' className='arr'/>
          </div>
          <div className='cmt-img'>
              <img src='comment1.png'/>
              <img src='comment2.png'/>
              <img src='comment3.png'/>
          </div>
          <div className='rat'>
            <img src='rating.png'/>
          </div>
        </div>

        <section className="popular-restaurants">
        <h2>Similar Restaurants</h2>
        <div className="restaurant-logos">
          {popularRestaurants.map((restaurant) => (
            <button onClick={() => navigate("/Product")} className="re-logos">
            <img src={restaurant.img} alt={restaurant.alt} />
          </button>
            
          ))}
        </div>
      </section>
    </div>
    
    
    
    );
};
export default ProductPage;