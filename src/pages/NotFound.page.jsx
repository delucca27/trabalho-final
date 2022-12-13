import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
   return (
   <>
   <div className="not-found">
      <h1>Oops!</h1> <br />
      <h2>Essa página ainda não existe...</h2>
      <Link to="/">
      <button className="cta-normal">Take me hoooooome ♫</button>
      </Link>
   </div>
   </>
   )
}
