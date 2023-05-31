import React from 'react'
import { Button } from 'react-bootstrap'
import "./hero.css"

const Hero = () => {
  return (
      <div className="hero-container">
        <div className="hero-text">
            <div><i>Bursting with flavor..</i></div>
            <Button>Order Now</Button>
        </div>
      </div>
  )
}

export default Hero
