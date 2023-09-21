import React from 'react';
import Products from '../components/commonComponents/Products';
import Categories from '../components/Categories/shop';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Shop = () => {
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
              <Products page category={category} type={type} />
            ) : (
              <Products page/>
            )}
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
