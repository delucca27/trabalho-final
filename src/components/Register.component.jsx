import React from 'react'

export default function Register() {
  return (
   <>
   <div className="ui-container">
      <h2>Novo Registro</h2>
      <input
         type="text"
         name="name"
         placeholder="Nome"
         className="register-input"
      />
      <input
         type="text"
         name="cost"
         placeholder="Preço"
         className="register-input"
      />
      <input
         type="text"
         name="category"
         placeholder="Categoria"
         className="register-input"
      />
            
   </div>
   </>
  )
}
