import React from 'react';
import { useCart } from './CartContext';

import './style.scss';

function Cart() {
  const { cart, removeFromCart, totalProducts, totalPrice  } = useCart();

  const productQuantity = (productId) => {
    return cart.filter((item) => item.id === productId).length;
  };



  return (
    <div>
      {cart.length === 0 ? (
        <p className='mb-0'>Your cart is empty.</p>
      ) : (
        <div>
          <ul className='cart-list'>
            {Array.from(new Set(cart.map((item) => item.id))).map(
              (productId) => (
                <li key={productId}>
                  <div className='cart-item'>
                   <div className='cart-image-wrapper'>
                   <img
                      className='cart-product-image'
                      src={cart.find((item) => item.id === productId).image}
                      alt={cart.find((item) => item.id === productId).name}
                    />
                   </div>
                    <span className='product-name pe-2'>
                      {cart.find((item) => item.id === productId).name}
                    </span> 
                    <span className='product-count'>{productQuantity(productId)}{' '}</span>
                    <span className='product-price'>
                      ${cart.find((item) => item.id === productId).price.toFixed(2)}
                    </span>
                   
                  </div>
                  <button className='trash-button' onClick={() => removeFromCart(productId)}>
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </li>
              )
            )}
          </ul>
          <p className='total mb-3'><b>Total Products:</b> {totalProducts}</p>

          <p className='total'><b>Total Price:</b> ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
