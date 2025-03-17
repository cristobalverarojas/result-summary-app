import React from 'react'
import Result from './result'
import Summary from './summary'

const Card = () => {
  return (
    <div className="card-container">
        <Result></Result>
        <Summary></Summary>
    </div>
  )
}

export default Card