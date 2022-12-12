import React, { useState } from 'react'

export default function NewGame() {
   const [values, setValues] = useState()
   console.log(values);

   const handleChangeValues = (value) => {
      setValues(prevValue => ({
         ...prevValue,
         [value.target.name]: value.target.value,
      }))
   }

   const handleSendButton = () => {
      console.log(values)
   }

   return (
   <>
   <div className="register-container">
      <div className="register-content">
         <center>

         <h2>Preencha as informações</h2>
         <div className="input-container">
            <input
               type="text"
               name="name"
               placeholder="Nome"
               className="register-input"
               onChange={handleChangeValues}
            />
         </div>
         <div className="input-container">
            <input
               type="text"
               name="cost"
               placeholder="Preço"
               className="register-input"
               onChange={handleChangeValues}
            />
         </div>
         <div className="input-container">
            <input
               type="text"
               name="category"
               placeholder="Categoria"
               className="register-input"
               onChange={handleChangeValues}
            />
         </div>

         <button className="send" onClick={ () => handleSendButton() }>Pronto</button>
         
         </center>
      </div>
   </div>
   </>
  )
}
