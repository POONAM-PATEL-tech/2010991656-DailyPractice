import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';

import Footer from  '../components/Footer.jsx';
import {useNavigate} from 'react-router-dom';



 const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
            <Navbar />
            <div className="container">
            <h2>Wel come Home</h2>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                   <button onClick={()=>navigate('OrderSummary')}>Place order</button>
            </div>
            <Footer />
            </div>
  )
}
export default Home;