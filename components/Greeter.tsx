import React from 'react'
import FlightSearch from './FlightSearch'
import Filter from './Filter'

const Greeter = () => {
  return (
    <div className="greeter-container">
      <div className="greeter-l">
      <FlightSearch/>
      <div className="placeholder"></div>
      </div>
      <div className="greeter-r">
        <Filter/>
      </div>
      


    </div>
  )
}

export default Greeter