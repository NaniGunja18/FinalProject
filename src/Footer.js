import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src='/g2.png'/>
          <img src='/g3.png'/>
          <p>Company # 400325-465, Registered with House of Companies.</p>
        </div>
        <div className="footer-subscribe">
          <h4>Get Exclusive Deals in Your Inbox</h4>
          <form>
            <p className="hello-footer">
            <input 
              type="email"
              placeholder="youremail@gmail.com"
              className="subscribe-input"
              required
            />
            <button type="submit">Subscribe</button>
            </p>
            <h6>we wont spam, read our<span>email policy</span></h6>
          </form>
          <img src='/g4.png'/>
          <img src='/g5.png'/>
          <img src='/g6.png'/>
          <img src='/g7.png'/>
        </div>      
        <div className="footer-links">
          <h4>Legal Pages</h4>
          <ul>
            <li><h5>Terms and Conditions</h5></li>
            <li><h5>Privacy</h5></li>
            <li><h5>Cookie</h5></li>
            <li><h5>Modern Slavery </h5></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><h5>Get help</h5></li>
            <li><h5>Add your restaurent</h5></li>
            <li><h5>Sign up to deliver</h5></li>
            <li><h5>Create a business account</h5></li>
          </ul>
        </div>
        
      </div>
      <div className='foot'>
      <div className='nani'>
        <div><span id="sp">Order.uk Copyright 2024, All Rights Reserved.</span></div>
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Pricing</p>
        <p>Do not share or sell my personal information</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
