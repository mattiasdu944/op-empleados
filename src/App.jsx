import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './Pages/Inicio.page';
import AñadirRegistro from './Pages/Añadirregistro.page';
import { Button } from 'react-bootstrap';
const App = () => {

  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='' element={<Inicio/>}/>
        <Route path='registros' element={<AñadirRegistro/>}/>
        <Route/>
      </Route>
    </Routes>
    </>
  )
}

export default App