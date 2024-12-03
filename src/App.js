import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';

const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Product2 = lazy(() => import('./Product_2'));
const Profile = lazy(() => import('./Profile'));
const Success = lazy(() => import('./Success'));
const Cart = lazy(() => import('./cart'));
const Header1 = lazy(()=> import('./Header1'));
const Checkout=lazy(()=>import('./Checkout'));
const Delivary=lazy(()=>import('./Delivary'));
const Payment =lazy(()=>import('./Payment'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-2" element={<Product2 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Header1" element={<Header1 />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/delivary" element={<Delivary />} />
            <Route path="/payment" element={<Payment/>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
