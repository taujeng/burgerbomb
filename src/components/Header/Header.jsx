import React from 'react'
import { Container, Row, Col, Stack, Navbar, NavItem, Nav, Collapse} from 'react-bootstrap'
import "./header.css"

const Header = () => {
  return (
        <Navbar collapseOnSelect expand="lg" className="justify-content-center">
            <Container className="">
                <Navbar.Brand href="https://burgerbomb.com" className='mx-auto'>
                    {/* <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/> */}
                    <h1>Burger Bomb</h1>
                    <span><img src="/images/bomb.PNG" id="bomb-logo" alt="Bomb" /></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-control="responsive-nav" />
                <Navbar.Collapse id="responsive-nav" className="justify-content-end">
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  )
}

export default Header




