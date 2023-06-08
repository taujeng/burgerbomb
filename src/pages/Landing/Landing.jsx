import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import "./landing.css"

const Landing = () => {
  return (
      <div className="landing-container">
        <div className="landing-text">
            <div><i>Bursting with flavor..</i></div>
            <LinkContainer to="/menu">
              <Button className="landing-btn">Order Now</Button>
            </LinkContainer>
        </div>
      </div>
  )
}

export default Landing;
