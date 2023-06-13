import React from 'react'
import { Container, Row, Col, Stack, Navbar, NavItem, Nav, Collapse} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./header.css"

const Header = () => {
  return (
        <Navbar collapseOnSelect expand="lg" className="header justify-content-center">
            <Container className="">
                <LinkContainer to="/">
                    <Navbar.Brand className='mx-auto' id="main-logo">
                        {/* <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/> */}
                        <h1>Burger Bomb</h1>
                        <span className="bomb-wrapper"><img src="/images/bomb.PNG" id="bomb-logo" alt="Bomb" /></span>
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-nav" />
                <Navbar.Collapse id="responsive-nav" className="justify-content-end">
                    <LinkContainer to="/menu">
                        <Nav.Link>Menu</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/menu">
                        <Nav.Link>Rewards</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/menu">
                        <Nav.Link>Our Values</Nav.Link>
                    </LinkContainer>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  )
}

export default Header




