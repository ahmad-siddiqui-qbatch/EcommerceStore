import React from 'react';
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Products from '../../commonComponents/Products';

import { Link } from 'react-router-dom';

const tabsData = [
  {
    eventKey: 'home',
    title: 'Best Deal',
    sectionProductCount: 4,
    pageLink: '/sale/all',
    section: true,
    rating: false,
  },
  {
    eventKey: 'profile',
    title: 'Best Sellers',
    sectionProductCount: 4,
    pageLink: '/shop/all',
    section: true,
    rating: true,
  },
];

const Index = () => {
  return (
    <div>
      <Container>
        <div className='tabs-wrapper'>
          <h2 className='golden-heading text-h1 pb-3'>Spotlight</h2>
          <Tabs defaultActiveKey={tabsData[0].eventKey} id='uncontrolled-tab-example' className='my-3'>
            {tabsData.map((tab) => (
              <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title}>
                <Products sectionProductCount={tab.sectionProductCount} section={tab.section} pageLink={tab.pageLink} rating={tab.rating}
                />
                <Link className='btn btn-primary' to={tab.pageLink}>View More</Link>
              </Tab>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Index;
