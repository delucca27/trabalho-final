import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'

import Menu from './Menu.component'

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
const userIcon = <FontAwesomeIcon icon={faUser} />


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
               <span className="icon">
                  {searchIcon}
               </span>
               <input type="text" placeholder="Pesquise algo..." />
            </div>
            <div className="login-btn">
               <span className="icon">
                  {userIcon}
               </span>
            </div>
         </div>

      </nav>
   </div>

   <Menu />
   </>
  )
}
