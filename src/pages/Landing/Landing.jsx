import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import "./landing.css"

const Landing = () => {
  return (
      <div className="landing-container">
        <div className="landing-hero">
          <img className="landing-img" src="./images/hamburger.jpg" alt="" />
          <div className="landing-text">
              <div><i>Custom-made burgers</i></div>
              <div><i>bursting with flavor..</i></div>
              <LinkContainer to="/menu">
                <Button className="landing-btn">Order Now</Button>
              </LinkContainer>
          </div>
        </div>
        <div className="landing-two">
          <div className="landing-left">
            <img src="./images/unused/veg-vert.png" alt="" />
          </div>
          <div className="landing-right">
            <img src="./images/unused/veg-hori.jpg" className="landing-mobile-veg" alt="" />
            <h2>Coriander açai spicy chili</h2>
            <p>pepper vine tomatoes lemon red lentil soup avocado dark and stormy crispy iceberg lettuce mocha chocolate black beans double dark chocolate chilies leek banh mi salad rolls coconut milk Thai sun.</p>
          </div>
        </div>
      </div>
  )
}

export default Landing;
