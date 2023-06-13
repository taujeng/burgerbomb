import React from 'react'
import "./menu.css"
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {


  return (
    <div className="menu-container">
      <div className="menu-row">
        <LinkContainer to='/menu/burgers'>
          <div className="menu-item">
            <div className="wrapper">
              <img src="./images/menu/burger4.png" alt="a juicy burger" className="menu-image" />
            </div>
            <div className="item-text">
              <b>Burger</b>
              <div className="menu-hover-text">Order now -</div>
            </div>
          </div>
        </LinkContainer>

        <div className="menu-item">
          <div className="wrapper">
            <img src="./images/menu/sides1.png" alt="hot sides" className="menu-image" />
          </div>
          <div className="item-text">
            <b>Sides</b>
            <div className="menu-hover-text">Order now -</div>
          </div>
        </div>
      </div>
      <div className="menu-row">
        <div className="menu-item">
          <div className="wrapper">
            <img src="./images/menu/salad.png" alt="a fresh salad" className="menu-image" />
          </div>
          <div className="item-text">
            <b>Salads</b>
          </div>
          <div className="menu-hover-text">Order now -</div>
        </div>
        <div className="menu-item">
              <div className="wrapper">
                <img src="./images/menu/drink1.png" alt="a cold drink" className="menu-image" />

              </div>
              <div className="item-text">
                <b>Drinks</b>
                <div className="menu-hover-text">Order now -</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
