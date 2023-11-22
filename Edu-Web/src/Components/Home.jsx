import React from 'react'
import  Button  from '../layout/Button'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div>
        <div>
            <h2>Knowledge with 
                <span>eStudy</span>
            </h2>
            <p>
            eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
            </p>

            <Link to='contact' spy={true} smooth={true} duration={500}>
                <Button/>
            </Link>
        </div>
    </div>
  )
}

export default Home