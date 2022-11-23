import React from 'react'
import './ItemListContainer.css'

function ItemListContainer (props)  {
  return (
    <div className='estiloItem'>
        <div className='estiloGretting'> {props.greeting}</div>
        <div className='estiloFoto'>{props.foto}</div>
        <div className='estiloPieFoto'>{props.pieFoto}</div>
        </div>
  )
}

export default ItemListContainer