import React from 'react'
import productos from './productos.js'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './ItemList.css'

function ItemList() {
    return(
        <div className='conteiner'>
            <div className='gridConteiner'>
                {
                productos.map((producto)=>{
                    return(
                        <div key={producto.id}>
                        <ItemListContainer productos={producto}/>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ItemList;