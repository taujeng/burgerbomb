import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Landing from './pages/Landing/Landing.jsx'
import Footer from './components/Footer/Footer.jsx'
import Menu from './pages/Menu/Menu.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
