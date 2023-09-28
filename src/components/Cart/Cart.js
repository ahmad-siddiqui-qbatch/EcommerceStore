import React from 'react';
import { useGlobalContext } from '../GlobalContext';

import './style.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalProducts, totalPrice } = useGlobalContext();

  const productQuantity = (productId) => {
    return cart.filter((item) => item.id === productId).length;
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p className='mb-0'>Your cart is empty.</p>
      ) : (
        <div>
          <Row>
            <Col lg={8}>
              <table>
                <thead>
                  <th>Product</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </thead>
                <tbody>
                  {Array.from(new Set(cart.map((item) => item.id))).map(
                    (productId) => (
                      <tr key={productId}>
                        <td>
                          <img
                            className='cart-product-image'
                            src={cart.find((item) => item.id === productId).image}
                            alt={cart.find((item) => item.id === productId).name}
                          />
                        </td>
                        <td>{cart.find((item) => item.id === productId).name}</td>
                        <td>
                          ${cart.find((item) => item.id === productId).price.toFixed(2)}
                        </td>
                        <td>
                          <span className='product-count'>
                            {productQuantity(productId)}{' '}
                          </span>
                        </td>
                        <td className='product-total'>
                          ${(
                            cart.find((item) => item.id === productId).price *
                            productQuantity(productId)
                          ).toFixed(2)}
                        </td>
                        <td>
                          <button
                            className='trash-button'
                            onClick={() => removeFromCart(productId)}
                          >
                            <i className='fa-regular fa-trash-can'></i>
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </Col>
            <Col>
              
              <div className='total-card'>
                <h5>Cart Totals</h5>
              <p className='total'>
                <b>Total Products:</b> {totalProducts}
              </p>
              <p className='total'>
                <b>Total Price:</b><span> ${totalPrice}</span>
              </p>
              <Link className='btn btn-primary w-100'>Proceed to Payment</Link>
              </div>
            </Col>
          </Row>

        </div>
      )}
    </div>
  );
}

export default Cart;
