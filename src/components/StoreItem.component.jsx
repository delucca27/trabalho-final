import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const notFoundIcon = <FontAwesomeIcon icon={faBan} />

export default function StoreItem() {
   return (
   <>
   <div className="store-item">
      <div className="item-image">
         <span className="not-found-icon">{notFoundIcon}</span>
         <span className="not-found-description">Sem imagem do produto</span>
      </div>

      <span className="item-category">Gênero</span>
      <h1 className="item-name">Nome do jogo</h1>
      <span className="item-price">100,00</span>
   </div>
   </>
   )
}
