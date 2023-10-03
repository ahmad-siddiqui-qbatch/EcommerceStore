import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const index = () => {
  return (
    <div className='banner'>
      <Container>
      <Row>
        <Col lg={12}>
        <span className='banner-heading'>
        Luxury Redefined <span className='golden-heading'>Your Gateway to Prestige.</span>
        </span>
        </Col>
      </Row>
      </Container>
     
    </div>
  );
};

export default index;