import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className="navbar">
      <nav>
         {/* <div className="menu">Menu</div> */}
         <div className="user-nav-options">
            <div className="search-container">
               <input type="text" />
            </div>
            <div className="login-btn"></div>
         </div>
      </nav>
   </div>
   </>
  )
}
