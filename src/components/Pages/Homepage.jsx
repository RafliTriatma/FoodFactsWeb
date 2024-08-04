import React from 'react';
import './Homepage.css'
import { FaBagShopping, FaBars } from "react-icons/fa6";
import ProductList from './ProductList';

const Homepage = () => {
  return (
    <>
      <header className="header">
        <a href="/"><FaBars className='iconsidebar'/></a>
        <a href="/" className="logo">FoodFactsWeb</a>

        <nav className="navbar">
          <a href="/"> <FaBagShopping className='iconkeranjang' /></a>
          
        </nav>
      </header>
    
      <div className="homepage-content">
                <ProductList />
            </div>
    </>
  );
};

export default Homepage;