import React from 'react'
import { Container } from 'react-bootstrap'
import ListadoEmpleados from '../components/ListadoEmpleados'

const Inicio = () => {
  return (
    <section>
        <Container>
            <h1>Listado de tus registros</h1>
            <ListadoEmpleados/>
        </Container>
    </section>

  )
}

export default Inicio