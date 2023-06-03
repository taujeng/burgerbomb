import React from 'react'
import "./menu.css"

const Menu = () => {
  return (
    <div className="menu-container">
        <div className="menu-item">
            <div className="item-body">
              <img src="./images/menu/burger4.png" alt="a juicy burger" className="menu-image" />
              <b>Burger</b>
            </div>
            <div className="menu-hover-text">Order now -</div>
        </div>
        <div className="menu-item">
            <div className="item-body">
              <img src="./images/menu/sides1.png" alt="hot sides" className="menu-image" />
              <b>Sides</b>
            </div>
            <div className="menu-hover-text">Order now -</div>
        </div>
        <div className="menu-item">
            <div className="item-body">
              <img src="./images/menu/drink.png" alt="a cold drink" className="menu-image" />
              <b>Drinks</b>
            </div>
            <div className="menu-hover-text">Order now -</div>
        </div>
    </div>
  )
}

export default Menu
