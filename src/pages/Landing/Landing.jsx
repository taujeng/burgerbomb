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
            <h2>The freshest ingredients..</h2>
            <p>At Burger Bomb, we take pride in our commitment to using only the freshest ingredients. We work closely with local farms to ensure every burger is made with premium organic ingredients. From their farm to our kitchen directly, no freezer involved.</p>
          </div>
        </div>
      </div>
  )
}

export default Landing;
