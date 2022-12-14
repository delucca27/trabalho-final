import React, { useEffect, useState } from 'react'
import StoreItem from '../components/StoreItem.component'


export default function StorePage() {
   const [backendData, setBackendData] = useState([{}])

   useEffect(() => {
      fetch("/read")
         .then(
            response => response.json()
         )
         .then(
            data => setBackendData(data)
         )
   }, [])

   return (
      <>
      <div className="storepage">
         <div className={"lighting-effect color3"}></div>
         <div className="glass-wrapper">
            <div className={"content store-specific"}>
               <center className="store-specific">
                  <h1>TwoDots™ Community Store</h1>
               </center>

               <div className="items-grid">
               {(backendData && backendData.posts) ? backendData.posts.map((v, i) => <StoreItem
               key={i}
               itemTitle="Hearts of Iron IV"
               itemCategory = "Estratégia"
               itemPrice = "R$130,00"
               />) : "LOADING"}
               </div>


            </div>
         </div>
      </div>
      </>
   )
}
