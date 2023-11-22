import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id='home'>
            <Home/>
          </div>

          <div id='about'>
            <About/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
