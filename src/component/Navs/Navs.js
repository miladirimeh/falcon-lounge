import React from 'react';
import { Navbar , Nav , Container} from 'react-bootstrap';
import './Navs.css';
import logo from './../../assets/logo4.PNG';

const Navs = () =>{
    return(
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <img src={logo} title="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about-us"> About Us </Nav.Link>
                    <Nav.Link href="#service"> Service </Nav.Link>
                    <Nav.Link href="#explore-food"> Explore Food </Nav.Link>
                    <Nav.Link href="#emplacement"> Emplacement </Nav.Link>

                  </Nav>
                  <Nav>
            <Nav.Link id="lastnav" href='#emplacement'>Contact
            </Nav.Link>
          </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
     
export default Navs;