import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarResponsive from './NavbarResponsive'

const Layout = () => {
  return (
    <>
        <NavbarResponsive/>
        <Outlet/>
    </>
  )
}

export default Layout