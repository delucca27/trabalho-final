import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faUserGroup, faHeart, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

const heartIcon = <FontAwesomeIcon icon={faHeart} />
const userGroupIcon = <FontAwesomeIcon icon={faUserGroup} />
const compassIcon = <FontAwesomeIcon icon={faCompass} />
const earthIcon = <FontAwesomeIcon icon={faEarthAmericas} />

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
                     { earthIcon }
                  </span>
                  </center>

                  <div className="card-content">
                     <p style={{textAlign: "center"}}>
                     TwoDots™ é a maior comunidade de games e conta com o melhor acervo de jogos mundo afora. Junte-se agora e faça parte de mais de 3 usuários!
                     </p>

                     <Link to="*">
                     <button className='cta-card'>Inicie sua jornada</button>
                     </Link>
                  </div>
               </div>

               <div className="link-card card-anim-2">
                  <center>
                  <h2>Descubra</h2>
                  <span className="card-icon">
                     { compassIcon }
                  </span>
                  </center>
                  <div className="card-content">
                     <p style={{textAlign: "center"}}>
                     Conheça novos jogos e possibilidades através do TwoDots™ e veja informações relevantes, avaliações da crítica e reviews da nossa comunidade.
                     </p>

                     <Link to="*">
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
                     <p style={{textAlign: "center"}}>
                     A comunidade TwoDots™ pode oferecer o melhor, e você também! Contribua com suas publicações e explore todas as possibilidades!
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
