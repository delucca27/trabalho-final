import React from 'react'
import Register from '../components/NewGame.component'

export default function NewGamePage() {
  return (
   <>
   <div className="searchpage">
      <div className={ "lighting-effect color2" }></div>

      <div className="glass-wrapper">
        <div className="content">
          <center>
          <h1>Quer registrar um jogo novo?</h1>
          </center>

          <Register /> 
          <center>
          <span className="link">
            Ou clique aqui para ver o nosso catálogo
          </span>
          </center> 
        </div>
      </div>
   </div>
   </>
  )
}
