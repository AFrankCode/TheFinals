import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
     <nav >
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <form  role="search">
        <input  type="search" placeholder="Search" aria-label="Search"/>
        <button  type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
