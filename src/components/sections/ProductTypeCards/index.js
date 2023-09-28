import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

const index = () => {
  return (
    <div className='product-type-cards'>
      <Row className='g-0'>
        <Col lg={3} className='card'>
          <Link to='/shop/Clothing'>
            <img className='background-image' src='https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80' />
            <div className='card-inner'>
              <div>
                <span className='subtitle'>Crafted for the Modern Gentleman</span>
                <h3 className='golden-heading'>Savoir Attire</h3>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} className='card'>
          <Link to='/shop/Watch'>
            <img className='background-image' src='https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80' />
            <div className='card-inner'>
              <div>
              <span className='subtitle'>Timeless Elegance, Precision Refined</span>
              <h3 className='golden-heading'>Horizon Timepieces</h3>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} className='card'>
          <Link to='/shop/Shoes'>
            <img className='background-image' src='https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3879&q=80' />
            <div className='card-inner'>
              <div>
              <span className='subtitle'>Where Comfort Meets Opulence</span>
              <h3 className='golden-heading'>AristoStep Footwear</h3>
              </div>
            </div>
          </Link>
        </Col>
        <Col lg={3} className='card'>
          <Link to='/shop/all'>
            <img className='background-image' src='https://images.unsplash.com/photo-1530432999454-016a47c78af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2998&q=80' />
            <div className='card-inner'>
              <div>
              <span className='subtitle'>Framing Your World in Luxury</span>
              <h3 className='golden-heading'>Oculuxe Optics</h3>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default index;