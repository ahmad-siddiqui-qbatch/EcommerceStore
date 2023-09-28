import React from 'react';
import Wishlist from '../components/WishlistProducts'
import data from '../data.json';
import { Container } from 'react-bootstrap';

const WishList = () => {
  return (
    <div>
      <Container>
      <Wishlist products={data.products}/>
      </Container>
    </div>
  );
};

export default WishList;