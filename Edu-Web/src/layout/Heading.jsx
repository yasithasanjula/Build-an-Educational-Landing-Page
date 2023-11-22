import React from 'react'

const Heading = (props) => {
  return (
    <div>
        <h3 className='text-4xl font-semibold'>{props.title1}</h3>
        <span className='text-4xl font-semibold text-brightGreen'>{props.title2}</span>
    </div>
  )
}

export default Heading