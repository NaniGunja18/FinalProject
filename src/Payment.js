import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header3 from './Header3'
import './Payment.css'

const ProductPage = () =>{ 
    const navigate = useNavigate();
    
    const location = useLocation();

    const amountToBePaid = location.state?.amount || 0;

    

return(
    <div className='Productpage-container'>
           <div>
            <Header3/>
           </div>   
           <div className="app-container">
      <div className="header">Choose and Pay</div>
      <div className="payment-methods-container">
        <div className="payment-methods-list">
          <div className="payment-option">
            <div className="option-text">
              <span className="option-name">Wallet</span>
              <span className="available-balance">Available balance: ₹300</span>
            </div>
            <input type="radio" name="payment" className="radio-button" />
          </div>

          <div className="payment-option">
            <div className="option-text">
              <span className="option-name"><button className='s'>M</button><p>MaestroCard</p></span>
            </div>
            <input type="radio" name="payment" className="radio-button" />
          </div>

          <div className="payment-option">
            <div className="option-text">
              <span className="option-name"><button className='s'>P</button><p>Paypal</p></span>
            </div>
            <input type="radio" name="payment" className="radio-button" />
          </div>

          <div className="payment-option">
            <div className="option-text">
              <span className="option-name"><button className='s'>S</button><p>Stripe</p></span>
            </div>
            <input type="radio" name="payment" className="radio-button" />
          </div>

          <div className="payment-option">
            <div className="option-text">
              <span className="option-name"><p className='plus'>+</p><p>Add Debit Card</p></span>
            </div>
          </div>
        </div>

        <div className="payment-summary">
          <div className="amount-text">Amount to be paid:<strong>₹{amountToBePaid}</strong> </div>
          <button onClick={()=>navigate('/Success')} className="payment-button">Proceed Payment</button>
        </div>
      </div>
    </div>
    </div>
    
    );
};
export default ProductPage;