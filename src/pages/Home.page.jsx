import React, { useState } from 'react'

export default function Homepage() {
  return (
   <>
   <div className="homepage">
      <div className={ "lighting-effect color1" }></div>
      <div className={ "lighting-effect color2" }></div>
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
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>

               <div className="link-card card-anim-2">
                  <center>
                  <h2>Procure</h2>
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>

               <div className="link-card card-anim-3">
                  <center>
                  <h2>Contribua</h2>
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>
            </div>

         </div>

      </div>
   </div>
   </>
  )
}
