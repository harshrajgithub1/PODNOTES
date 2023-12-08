// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
     <div class="footer">
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <p>&copy; 2023 Your Company Name</p>
      </div>
      </div>
  );
};

export default Footer;
