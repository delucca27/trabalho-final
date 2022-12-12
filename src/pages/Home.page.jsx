import React from 'react'

export default function Homepage() {
  return (
   <>
   <div className="homepage">
      <div className={ "lighting-effect pink" }></div>
      <div className={ "lighting-effect blue" }></div>
      <div className="glass-wrapper">
         <div className="content">

            <center>
               <h1>O melhor em um só lugar</h1>
            </center>

            <div className="cards-container">
               <div className="link-card">
                  <center>
                  <h2>Faça seu cadastro</h2>
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>

               <div className="link-card">
                  <center>
                  <h2>Procure seus jogos</h2>
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>

               <div className="link-card">
                  <center>
                  <h2>Sobre nós</h2>
                  </center>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>

         </div>

      </div>
   </div>
   </>
  )
}
