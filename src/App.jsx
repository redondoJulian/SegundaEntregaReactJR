import './App.css'
import React from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import HomePage from './pages/HomePage'
import RemeraPage from './pages/RemeraPage'
import BuzosPage from './pages/BuzosPage'
import PantalonesPage from './pages/PantalonesPage'
import NavBar from './components/navBar/navBar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/category/remeras" element={<RemeraPage />}/>
          <Route path="/category/buzos" element={<BuzosPage />}/>
          <Route path="/category/pantalones" element={<PantalonesPage />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
