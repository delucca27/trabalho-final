import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu.component'

export default function Navbar() {
  return (
   <>
   <div className="navbar">
      <nav>
         <Link to="/">
            <div className="logo">
               <div className="title-wrapper">
                  <span className="logo-title">
                  TwoDots
                  <div className="title-wrapper">
                     <span>GamingStore</span>
                  </div>
                  </span>
               </div>
            </div>
         </Link>

         <div className="user-nav-options">
            <div className="search-container">
               <input type="text" placeholder="Pesquise algo..." />
            </div>
            <div className="login-btn"></div>
         </div>

      </nav>
   </div>

   <Menu />
   </>
  )
}
