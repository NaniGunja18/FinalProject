import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './cartcontext';
import { AddressProvider } from './delcontext'; 
import { UserProvider } from './UserContext'; // Import UserProvider
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap the entire app with UserProvider */}
      <CartProvider>
        <AddressProvider> 
          <App />
        </AddressProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
