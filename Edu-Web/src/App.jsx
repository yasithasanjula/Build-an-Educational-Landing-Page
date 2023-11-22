import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <div id='home'>
            <Home/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
