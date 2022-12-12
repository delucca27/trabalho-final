import React from 'react'
import Register from '../components/Register.component'

export default function SearchPage() {
  return (
   <>
   <div className="searchpage">
      <div className={ "lighting-effect pink" }></div>
      <div className={ "lighting-effect blue" }></div>

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
