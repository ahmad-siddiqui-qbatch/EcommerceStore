/**
 * App.js
 *
 * This file defines the main application component responsible for rendering
 * the entire website. It incorporates navigation, header, and other components
 * to create a complete web page.
 */
import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import data from '../../../data.json';


import './style.scss';



// --------------------
// Navbar Links
// --------------------
const NavBarLink = ({ text, href }) => (
  <NavLink to={href} className="nav-link" >
    {text}
  </NavLink>
);

// --------------------
// Navbar Dropdowns
// --------------------
const NavBarDropdown = ({ text, dropdownItems }) => (
  <NavDropdown title={text} id="basic-nav-dropdown">
    {dropdownItems.map((item, index) => (
      <NavDropdown.Item key={index} href={item.href}>
        {item.text}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

const App = () => {
  return (
    <div>

      <header>
        <Container>
          <div className="header-inner">

            <div className="header-left">
              <a href={`tel: ${data.header.phoneNumber}`}>
              <i className="fa-solid fa-phone-volume"></i>
                {data.header.phoneNumber}
              </a>
              <div className="divider"></div>
              <a href={`mailto: ${data.header.email}`}>
              <i className="fa-regular fa-envelope-open"></i>
                {data.header.email}
              </a>
            </div>

            <div className="header-right">
              <Form.Select aria-label="Default select example">
                {data.header.selectOptions.map((option, index) => (
                  <option key={index}>{option.text}</option>
                ))}
              </Form.Select>
              <div className="divider"></div>
              <Form.Select aria-label="Default select example">
                {data.header.languageOptions.map((option, index) => (
                  <option key={index}>{option.text}</option>
                ))}
              </Form.Select>
            </div>

          </div>
        </Container>
      </header>

      <Navbar sticky="top" expand="lg">
        <Container className="position-relative">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/" className="me-auto">
              {data.navbar.navLinks.map((link, index) => (
                link.dropdownItems ? (
                  <NavBarDropdown key={index} text={link.text} dropdownItems={link.dropdownItems} />
                ) : (
                  <NavBarLink key={index} text={link.text} href={link.href} />
                )
              ))}
            </Nav>

          </Navbar.Collapse>

          <Navbar.Brand href="#home" className="m-auto">
            {data.navbar.logoText}
          </Navbar.Brand>

          <Form className="form">
            <Row className="g-0">
              <Col xs="auto">
                <Button type="submit" className="icon-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="icon-button">
                  <i className="fa-solid fa-user"></i>
                </Button>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="icon-button">
                  <i className="fa-regular fa-heart"></i>
                  <div className='badge'>3</div>
                </Button>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="icon-button">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <div className='badge'>2</div>
                </Button>
              </Col>
            </Row>
          </Form>


        </Container>
      </Navbar>

    </div >
  );
};

export default App;
