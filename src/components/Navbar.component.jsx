import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className="navbar">
      <nav>

         <div className="logo">
            <span className="logo-title">
            TwoDots <span>GamingStore</span>
            </span>
         </div>

         <div className="user-nav-options">
            <div className="search-container">
               <input type="text" placeholder="Pesquise algo..." />
            </div>
            <div className="login-btn"></div>
         </div>
         
      </nav>
   </div>
   </>
  )
}
