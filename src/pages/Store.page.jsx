import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StoreItem from '../components/StoreItem.component'


export default function StorePage() {
   // const [backendData, setBackendData] = useState([{}])

   // useEffect(() => {
   //    fetch("/api").then(
   //       response => response.json
   //    ).then(
   //       data => {
   //          setBackendData(data)
   //       }
   //    )
   // }, [])

   return (
   <>

   <div className="storepage">
      <div className={"lighting-effect color3"}></div>
      <div className="glass-wrapper">
         <div className={"content store-specific"}>
            <center className="store-specific">
               <h1>TwoDots™ Community Store</h1>
            </center>
            
            {/* <center>
            {(typeof backendData.posts === 'undefined') ? (
                  <p>Loading...</p>
               ) : (backendData.posts.map((post, i) => {
                     <p key={i}>{post}</p>
                  })
               )
            }
            </center> */}

            <div className="items-grid">
               <StoreItem />
               <StoreItem />
               <StoreItem />
               <StoreItem />
            </div>
            

         </div>
      </div>
   </div>
   </>
   )
}
