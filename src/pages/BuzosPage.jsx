import React from 'react'
import productos from '../components/ItemList/productos'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import '../components/ItemList/ItemList.css'

const BuzosPage = () => {
    let filtro = productos.filter((filtrado) => filtrado.categoria.nombre === "buzos")
    console.log(filtro)

  return (
    <div className='conteiner'>
    <div className='gridConteiner'>
        {
        
        filtro.map((producto)=>{
            return(
                <div key={producto.id}>
                <ItemListContainer productos={producto}/>
                </div>
            )
        }
        )
        }
    </div>
</div>
  )
}

export default BuzosPage