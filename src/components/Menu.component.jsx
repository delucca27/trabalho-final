import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const menuIcon = <FontAwesomeIcon icon={ faCaretDown } />

export default function Menu() {
   return (
      <>
      <button className="menu">
         <div className="menu-icon">
            { menuIcon }
         </div>
         <div className="menu-content">
            <h4>Menu</h4>
            <div className="small-bar"></div>

            <div className="options-column">
               <Link to="/home">
                  <span className="menu-link">Home</span>
               </Link>
               <Link to="/store">
                  <span className="menu-link">Ver loja</span>
               </Link>
               <Link to="/new">
                  <span className="menu-link">Criar novo</span>
               </Link>

               <div className="small-bar"></div>

               <Link to="/*">
                  <span className="menu-link">Entrar</span>
               </Link>
               <Link to="*">
                  <span className="menu-link">Blog</span>
               </Link>
            </div>
         </div>
      </button>
      </>
   )
}
