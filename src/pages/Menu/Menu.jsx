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
              <img src="./images/menu/burgers/burger.png" alt="a juicy burger" className="menu-image" />
            </div>
            <div className="item-text">
              <b>Burgers</b>
              
            </div>
          </div>
        </LinkContainer>
        <LinkContainer to='/menu/sides'>
          <div className="menu-item">
            <div className="wrapper">
              <img src="./images/menu/sides/sides.png" alt="hot sides" className="menu-image" />
            </div>
            <div className="item-text">
              <b>Sides</b>
              
            </div>
          </div>
        </LinkContainer>

      </div>
      <div className="menu-row">
        <LinkContainer to='/menu/salads'>
          <div className="menu-item">
            <div className="wrapper">
              <img src="./images/menu/salads/greeksalad.png" alt="a fresh salad" className="menu-image" />
            </div>
            <div className="item-text">
              <b>Salads</b>
            </div>
          </div>
        </LinkContainer>
        <LinkContainer to='/menu/drinks'>
          <div className="menu-item">
                <div className="wrapper">
                  <img src="./images/menu/drinks/lemonade.png" alt="a cold drink" className="menu-image" />

                </div>
                <div className="item-text">
                  <b>Drinks</b>
                  
                </div>
          </div>
        </LinkContainer>

      </div>
    </div>
  )
}

export default Menu
