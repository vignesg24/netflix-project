import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NetflixShow from './pages/NetflixShow'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='/netflix-show' Component={NetflixShow} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
