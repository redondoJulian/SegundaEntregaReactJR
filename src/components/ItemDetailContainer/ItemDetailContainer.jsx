import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import productos from '../ItemList/productos'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
  
    let { id } = useParams();
  
    useEffect(() => {
      const productoFiltrado = productos.find((item) => item.id === id);
      setProducto(productoFiltrado);
    }, [id]);
  
    console.log(producto);

    return (
        <div className='detail'>
          <h1>{producto.nombre}</h1>
          <img src={producto.img} alt="" />
          <h2>{producto.descripcion}</h2>
          <h3>Precio: <span>${producto.precio}</span></h3>
        </div>
      );
    };

export default ItemDetailContainer