import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ElderlyCare</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/volunteers">Volunteers</Link></li>
        <li><Link to="/notices">Notices</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>  
  );
}

export default Navbar;
