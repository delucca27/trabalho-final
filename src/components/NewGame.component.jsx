import React, { useState, useEffect } from 'react'

export default function NewGame() {
   const [backendData, setBackendData] = useState([{}])

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

   useEffect(() => {
      fetch("/api").then(
         response => response.json
      ).then(
         data => {
            setBackendData(data)
         }
      )
   }, [])

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
