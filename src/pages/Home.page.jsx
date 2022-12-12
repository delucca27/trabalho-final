import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faUserGroup, faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

const heartIcon = <FontAwesomeIcon icon={faHeart} />
const userGroupIcon = <FontAwesomeIcon icon={faUserGroup} />
const compassIcon = <FontAwesomeIcon icon={faCompass} />

export default function Homepage() {
  return (
   <>
   <div className="homepage">
      <div className={ "lighting-effect color1" }></div>
      <div className="glass-wrapper">
         <div className="content">

            <center>
               <div className="title-wrapper">
                  <h1>Seus favoritos em um só lugar</h1>
               </div>
            </center>

            <div className="cards-container">
               <div className="link-card card-anim-1">
                  <center>
                  <h2>Cadastre-se</h2>
                  <span className="card-icon">
                     { userGroupIcon }
                  </span>
                  </center>

                  <div className="card-content">
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>

                     <Link to="/">
                     <button className='cta-card'>Inicie sua jornada</button>
                     </Link>
                  </div>
               </div>

               <div className="link-card card-anim-2">
                  <center>
                  <h2>Procure</h2>
                  <span className="card-icon">
                     { compassIcon }
                  </span>
                  </center>
                  <div className="card-content">
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>

                     <Link to="/">
                     <button className='cta-card'>Busque o que quiser</button>
                     </Link>
                  </div>
               </div>

               <div className="link-card card-anim-3">
                  <center>
                  <h2>Contribua</h2>
                  <span className="card-icon">
                     { heartIcon }
                  </span>
                  </center>
                  <div className="card-content">
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>

                     <Link to="/new">
                     <button className='cta-card'>Comece hoje!</button>
                     </Link>
                  </div>
               </div>
            </div>

         </div>

      </div>
   </div>
   </>
  )
}
