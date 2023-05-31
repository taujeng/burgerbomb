import React from 'react'
import { Container, Row, Col, Stack, Navbar, NavItem, Nav} from 'react-bootstrap'
import "./header.css"

const Header = () => {
  return (
        // <Container fluid>
        //     <Navbar sticky="top" >
        //             <Row className="nav-row">
        //                 <Col className="nav-left col-4">
        //                     <Navbar.Text className="nav-text">Menu</Navbar.Text>
        //                     <Navbar.Text className="nav-text">Locations</Navbar.Text>
        //                     <Navbar.Text className="nav-text">Careers</Navbar.Text>
        //                 </Col>
        //                 <Col className="">
        //                     <Navbar.Brand href="https://burgerbomb.com">
        //                         <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/>
        //                     </Navbar.Brand>
        //                 </Col>
        //                 <Col className="nav-right col-4">
        //                     <Navbar.Text className="nav-text">Gift Cards</Navbar.Text>
        //                     <Navbar.Text className="nav-text">Order Now</Navbar.Text>
        //                 </Col>
        //             </Row>

        //     </Navbar>
        // </Container>
        <Navbar className="">
            <Container className="">
                <Nav className="" >
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                </Nav>
                <Navbar.Brand href="https://burgerbomb.com">
                    <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/>
                </Navbar.Brand>
                <Nav className="" >
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                    <Nav.Link href="">menu</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

  )
}

export default Header




