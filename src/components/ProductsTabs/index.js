import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from '../commonComponents/Products';
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
          <span className='subtitle'>Weekly Selection</span>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Best Deal">
            <Products sale section pageLink="/"/>
              <Link to='/'>View</Link>
            </Tab>
            <Tab eventKey="profile" title="Best Sellers">
            <Products section pageLink="/" rating/>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default index;