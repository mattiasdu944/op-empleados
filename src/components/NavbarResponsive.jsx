import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarResponsive = () => {

  const enlaces = [
    {
      name: "Inicio",
      path: ''
    },
    {
      name: "Añadir Registro",
      path: 'registros'
    }
  ]
  return (
    <Navbar bg="#e3f212" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto gap-5 ">
            {enlaces.map((enlace,index) => 
              <NavLink to={enlace.path} key={index}>
                {enlace.name}
              </NavLink>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarResponsive