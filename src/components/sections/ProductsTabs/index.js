import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from '../../commonComponents/Products';
// import product1 from '../../assets/media/product-1.jpeg';
// import Rating from '../commonComponents/Rating';
// import ProductPrice from '../commonComponents/Price';

import './style.scss';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div>
      <Container>
        <div className='tabs-wrapper'>
          <h2 className='golden-heading text-h1 pb-3'>Spotlight</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="my-3"
          >
            <Tab eventKey="home" title="Best Deal">
            <Products sectionProductCount={4} sale section pageLink="/"/>
              <Link className='btn btn-primary' to='/'>View More</Link>
            </Tab>
            <Tab eventKey="profile" title="Best Sellers">
            <Products sectionProductCount={4} section pageLink="/" rating/>
              <Link className='btn btn-primary' to='/'>View More</Link>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default index;