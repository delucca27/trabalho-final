import React from "react"
import { Link } from "react-router-dom"

export default function Menu() {
   return (
      <>
      <button className="menu">
         <div className="menu-icon"></div>
         <div className="menu-content">
            <h4>Menu</h4>
            <div className="small-bar"></div>

            <div className="options-column">
               <Link to="/">
                  <span className="menu-link">Ver loja</span>
               </Link>
               <Link to="/new">
                  <span className="menu-link">Criar novo</span>
               </Link>
               <Link to="/">
                  <span className="menu-link">Novo por aqui?</span>
               </Link>
               <Link to="/">
                  <span className="menu-link">Login</span>
               </Link>
            </div>
         </div>
      </button>
      </>
   )
}
