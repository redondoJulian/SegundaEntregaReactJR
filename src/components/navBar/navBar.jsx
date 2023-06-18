import React from 'react'
import './navBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <div className='logo'>
        <Link to="/"><h1>Julishop</h1></Link>
        <div className='carrito flex-conteiner'>
          <ShoppingCartIcon/>
          <span>0</span>
        </div>
      </div>
        <nav>
            <ul>
                <Link to="/" className='li'>Inicio</Link>
                <Link to="/category/remeras" className='li'>Remeras</Link>
                <Link to="/category/buzos" className='li'>Buzos</Link>
                <Link to="/category/pantalones" className='li'>Pantalones</Link>
                <p className='Coder'>CODERHOUSE</p>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar