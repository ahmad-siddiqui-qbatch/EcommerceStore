import React from 'react';
import { Col, Container, FormControl, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='footer'>
      <footer>
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className='heading'>CONTACT US</h5>
              <ul>
                <li><h5>Add:</h5>4 Copley Place, 7th Floor, Boston,MA 6</li>
                <li><h5>Tell:</h5><a href='tel: 8664534748'></a>866.453.4748</li>
                <li><h5>HR Fax:</h5>810.222.5439</li>
                <li><h5>Email</h5><a href='mailto: sales@demati.com'>sales@demati.com</a></li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5 className='heading'>CATEGORIES</h5>
              <ul>
                <li><Link to='/'>Tops</Link></li>
                <li><Link to='/'>Basics</Link></li>
                <li><Link to='/'>Shirts</Link></li>
                <li><Link to='/'>Pents</Link></li>
                <li><Link to='/'>Blazers & Vests</Link></li>
                <li><Link to='/'>Shorts</Link></li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <h5 className='heading'>Services</h5>
              <ul>
                <li><Link to='/'>Sale</Link></li>
                <li><Link to='/'>Quick Ship</Link></li>
                <li><Link to='/'>New Designs</Link></li>
                <li><Link to='/'>Accidental Fabric Protection</Link></li>
                <li><Link to='/'>Furniture Care</Link></li>
                <li><Link to='/'>Gift Cards</Link></li>
              </ul>
            </Col>
            <Col lg={3}>
              <h5 className='heading'>JOIN US</h5>
              <p>New subscribers receive 10% off their first purchase</p>
              <div className='d-flex'>
                <FormControl placeholder='Your Email' type='text'></FormControl>
                <button className='btn btn-secondary ms-1'>Add</button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default index;