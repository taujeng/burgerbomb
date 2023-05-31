import React from 'react'
import { Container, Row, Col, Stack, Navbar, NavItem, Nav, Collapse} from 'react-bootstrap'
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
        <Navbar collapseOnSelect expand="lg" className="justify-content-center">
            <Container className="">
                <Navbar.Brand href="https://burgerbomb.com" className='mx-auto'>
                    <img src="./images/logo.svg" alt="Burger Bomb" id="bomb"/>
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




