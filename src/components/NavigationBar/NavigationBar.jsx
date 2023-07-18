import React from 'react'
import { Container, Row, Col, Stack, Navbar, NavItem, Nav, Collapse} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BagIcon from '../BagIcon/BagIcon'
import "./navigationBar.css"

const NavigationBar = () => {
  return (
        <Navbar collapseOnSelect expand="lg" className="header" id="top">
                <LinkContainer to="/">
                    <Navbar.Brand className='mx-auto' id="main-logo">
                        {/* <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/> */}
                        <h1>Burger Bomb</h1>
                        {/* <span className="bomb-wrapper"><img src="/images/bomb.PNG" id="bomb-logo" alt="Bomb" /></span> */}
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-nav" className="custom-toggler"/>
                <Navbar.Collapse id="responsive-nav" className="header-links justify-content-end">
                    <LinkContainer to="/menu">
                        <Nav.Link>Menu</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/our-story">
                        <Nav.Link>Our Story</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/values">
                        <Nav.Link>Our Values</Nav.Link>
                    </LinkContainer>
                </Navbar.Collapse>
                <BagIcon className="header-bag"/>
                {/* <LinkContainer to="/bag">
                        <Nav.Link><BagFill id="bag-icon" size={32}/></Nav.Link>
                </LinkContainer> */}
        </Navbar>

  )
}

export default NavigationBar




