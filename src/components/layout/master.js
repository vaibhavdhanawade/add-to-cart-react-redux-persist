import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './footer'
import Header from './header'



function Master() {

  return (
    <>
        <Header />
          <Outlet/>
        <Footer />
    </>
  )
}

export default Master