import React from 'react'
import StoreItem from '../components/StoreItem.component'

export default function StorePage() {
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
