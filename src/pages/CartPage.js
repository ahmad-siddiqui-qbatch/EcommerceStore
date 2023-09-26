import React from 'react';
import Cart from '../components/Cart/Cart';
import { Container } from 'react-bootstrap';

const CartPage = () => {
  return (
    <div className='cart-page'>
      <Container>
        <h1 className='pb-5'>Cart</h1>
      <Cart/>
      </Container>
    </div>
  );
};

export default CartPage;