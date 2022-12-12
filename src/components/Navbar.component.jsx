import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className="navbar">
      <nav>
         <div className="menu">Menu</div>
         <div className="logo">Logo</div>
         <div className="search-container">
            <input type="text" />
         </div>
      </nav>
   </div>
   </>
  )
}
