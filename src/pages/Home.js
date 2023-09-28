import React from 'react';

import Banner from '../components/sections/Banner';
import ProductsTabs from '../components/sections/ProductsTabs';
import ProductTypeCards from '../components/sections/ProductTypeCards'

const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductTypeCards />
      <ProductsTabs/>
    </div>
  );
};

export default Home;