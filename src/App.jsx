import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/about'

import Products from './component/produit'
function App() {
 

  return (
    <div className="App">
       <Navbar/>
       <BrowserRouter>
          <Routes>
           <Route  path="/" element={<About/>} />
           <Route  path="/prod" element={<Products/>} />
           </Routes>
       
       </BrowserRouter>

    </div>
  )
}

export default App
