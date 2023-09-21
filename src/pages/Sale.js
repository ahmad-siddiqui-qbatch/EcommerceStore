import React from 'react';
import Products from '../components/commonComponents/Products';
import Categories from '../components/Categories/sale';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Sale = () => {
  const { category, type } = useParams();

  return (
    <div className='py-5'>
      <Container>
        <Row>
          <Col lg='2'>
            <Categories />
          </Col>
          <Col>
            {category ? (
              <Products page sale category={category} type={type} />
            ) : (
              <Products page sale/>
            )}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sale;