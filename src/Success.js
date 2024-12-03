import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Header3 from './Header3'
import './Success.css'

const ProductPage = () =>{ 
    const navigate = useNavigate();

    

return(
    <div className='Productpage-container'>
           <div>
            <Header3/>
           </div>   
           <div className='f1'>
              <img src='success.png' className='succ-img'/>
              <p className='order'>Order Placed Successfully</p>
              <p className='order2'>Your order is confirmed and on its way. Get set to</p>
              <p className='order3'>savor your chosen delights!</p>
              <button className='items'>
                <div className='item'>
                   <p className='i'>Royal Cheese Burger</p>
                   <p className='i'>Potato Veggies</p>
                   <p className='i'>Coke Coca Cola</p>
                 <button onClick={()=>navigate('/Home')} className='btn'>Back to Home</button>
                </div>
              </button>
           </div>
    </div>
    
    );
};
export default ProductPage;