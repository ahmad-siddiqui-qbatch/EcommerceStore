/**
 * App.js
 *
 * This file defines the main application component responsible for rendering
 * the entire website. It incorporates navigation, header, and other components
 * to create a complete web page.
 */
import React, { useState } from 'react';
import { Button, Form, Row, Col, Modal, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../components/GlobalContext';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logout from '../../components/Logout';


import data from '../../data.json';

import ProductSearchBar from '../../components/ProductsSearch';
import Cart from '../../components/Cart/Cart';



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
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { totalProducts, clearCart, cart } = useGlobalContext();
  const badgeContent = totalProducts >= 9 ? '9+' : totalProducts;

  const handleDeleteButtonClick = (e) => {
    if (e.target.classList.contains('delete-button')) {
      e.stopPropagation();
    }
  };


  // --------------------
  // WishList
  // --------------------
  const { wishlist } = useGlobalContext();
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

      {/* Search Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductSearchBar />
        </Modal.Body>
      </Modal>

      <Navbar expand="lg">
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
                <Button className="icon-button" onClick={handleShow}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Col>
              <Col xs="auto">
                <Link to="/wishlist" className="icon-button d-block">
                  <i className="fa-regular fa-heart"></i>
                  <div className='badge'>{wishlist.length}</div>
                </Link>
              </Col>
              <Col xs="auto">
                <Dropdown className='cart-dropdown-wrapper'>
                  <Dropdown.Toggle className="icon-button" variant="success" id="dropdown-basic">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <div className='badge'>{badgeContent}</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end cart-dropdown">
                    <Cart />
                    {cart.length > 0 ? (
                      <div>
                        <button className='btn btn-secondary w-100' onClick={clearCart}>Clear Cart</button>
                        <Link to="/cart" className='btn btn-primary w-100 mt-2'>View Cart</Link>
                      </div>
                    ) : null}
                  </Dropdown.Menu>
                </Dropdown>

              </Col>

              <Col xs="auto">
                {isLoggedIn && (
                  <Logout onLogout={() => setIsLoggedIn(false)} />
                )}
              </Col>
            </Row>
          </Form>


        </Container>
      </Navbar>

    </div >
  );
};

export default App;
