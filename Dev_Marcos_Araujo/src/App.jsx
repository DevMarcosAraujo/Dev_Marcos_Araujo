import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

import Home from "./Pages/Home"
import About from "./Pages/About"   // Make sure to import About
import Portfolio from "./Pages/Portfolio" // Make sure to import Portfolio
import Contact from "./Pages/Contact" // Make sure to import Contact

import ScrollToTop from "./Ultils/ScrollTop"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="About" element={ <About />}></Route>
          <Route path="Portfolio" element={ <Portfolio />}></Route>
          <Route path="Contact" element={ <Contact />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
