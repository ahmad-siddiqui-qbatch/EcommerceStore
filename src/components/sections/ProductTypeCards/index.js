import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const productTypeData = [
  {
    linkTo: '/shop/Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80',
    subtitle: 'Crafted for the Modern Gentleman',
    title: 'Savoir Attire',
  },
  {
    linkTo: '/shop/Watch',
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80',
    subtitle: 'Timeless Elegance, Precision Refined',
    title: 'Horizon Timepieces',
  },
  {
    linkTo: '/shop/Shoes',
    imageUrl: 'https://images.unsplash.com/photo-1563434649554-58f91d22ec2c?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3879&q=80',
    subtitle: 'Where Comfort Meets Opulence',
    title: 'AristoStep Footwear',
  },
  {
    linkTo: '/shop/all',
    imageUrl: 'https://images.unsplash.com/photo-1530432999454-016a47c78af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2998&q=80',
    subtitle: 'Framing Your World in Luxury',
    title: 'Oculuxe Optics',
  },
];

const Index = () => {
  return (
    <div className='product-type-cards'>
      <Row className='g-0'>
        {productTypeData.map((productType, index) => (
          <Col xl={3} md={6} className='card' key={index}>
            <Link to={productType.linkTo}>
              <img className='background-image' src={productType.imageUrl} alt={`Product Type ${index + 1}`} />
              <div className='card-inner'>
                <div>
                  <span className='subtitle'>{productType.subtitle}</span>
                  <h3 className='golden-heading'>{productType.title}</h3>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Index;
