'use client'
import React from 'react'
import Link from 'next/link';


const Header = () => {
  return (
    
     
      <nav>
       <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/register">Register</a></li>
        {/* Add more navigation items as needed */}
       </ul>
      </nav>
    
  )
}

export default Header
