import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './ItemListContainer.css'

const ItemListContainer = ({productos}) => {

  const [cantidad,setCantidad] = useState(0);
  console.log(productos)
  return (
    <div className='cardConteiner'>
      <p className='cardTitle'>{productos.nombre}</p>
        <Link to={`/item/${productos.id}`}>
          <img src={productos.img} alt="" />
        </Link>
      <div className='cardFunciones'>
        <div className='cardCantidad'>
          <p>Precio <span>${productos.precio}</span></p>
          <button onClick={()=>{setCantidad(cantidad-1)}}>-</button>
          <p>Cantidad: <span>{cantidad}</span></p>
          <button onClick={()=>{setCantidad(cantidad+1)}}>+</button>
        </div>
        <div className='cardComprar'>
        <button>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;