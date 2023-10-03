import React from 'react';

const ProductPrice = ({ oldPrice, price }) => {
  const isOnSale = oldPrice !== undefined && oldPrice > price;

  const formatPrice = (value) => {
    if (typeof value === 'number') {
      if (Math.floor(value) !== value) {
        return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        return value.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
      }
    }
    return value;
  };

  return (
    <div className="product-price">
      {isOnSale ? (
        <>
          <span className="old-price">${formatPrice(oldPrice)}</span>
          <span className="price">${formatPrice(price)}</span>
          <div className="badge">Sale</div>
        </>
      ) : (
        <span className="price">${formatPrice(price)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
