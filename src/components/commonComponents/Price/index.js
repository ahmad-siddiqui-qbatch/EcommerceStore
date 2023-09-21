import React from 'react';
import './style.scss';

const ProductPrice = ({ oldPrice, price }) => {
  const isOnSale = oldPrice !== undefined && oldPrice > price;

  return (
    <div className="product-price">
      {isOnSale ? (
        <>
          <span className="old-price">${oldPrice.toFixed(2)}</span>
          <span className="price">${price.toFixed(2)}</span>
          <div className="badge">Sale</div>
        </>
      ) : (
        <span className="price">${price.toFixed(2)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
