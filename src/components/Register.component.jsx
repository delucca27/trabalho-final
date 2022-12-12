import React from 'react'

export default function Register() {
  return (
   <>
   <div className="register-container">
      <center>
      <h2>Preencha as informações</h2>
      <div className="input-container">
         <input
            type="text"
            name="name"
            placeholder="Nome"
            className="register-input"
         />
      </div>
      <div className="input-container">
         <input
            type="text"
            name="cost"
            placeholder="Preço"
            className="register-input"
         />
      </div>
      <div className="input-container">
         <input
            type="text"
            name="category"
            placeholder="Categoria"
            className="register-input"
         />
      </div>

      <button className="send">Pronto</button>
      </center>
            
   </div>
   </>
  )
}
