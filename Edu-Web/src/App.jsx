import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Courses from './Components/Courses'
import Reviews from './Components/Reviews'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

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

          <div id='courses'>
            <Courses/>
          </div>

          <div className='reviews'>
            <Reviews/>
          </div>

          <div className='contact'>
            <Contact/>
          </div>
          
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
