import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './../views/Home'
import About from './../views/About'

export default function index() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index path='/' element={ <Home />}></Route>
              <Route path='about' element={ <About/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}
