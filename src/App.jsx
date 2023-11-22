import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Menu from './pages/Menu'
import CrearLote from './pages/CrearLote'
import ListarLote from './pages/ListarLote'
import EditarLote from './pages/EditarLote'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Menu/>}>
        <Route path="/" element={<Inicio/>} />
        <Route path="crear" element={<CrearLote/>} />
        <Route path="listar" element={<ListarLote/>} />
        <Route path="editar/:id" element={<EditarLote/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
