import React from 'react';
import './Header.css';

const Header = () => {
   return (
      <div>
         <nav className='menu'>
            <a href="/home">Home</a>
            <a href="/countries">Countries</a>
            <a href="/about">About Us</a>
            
         </nav>
         <p className='subtitle'>visit us</p>
      </div>
   );
};

export default Header;