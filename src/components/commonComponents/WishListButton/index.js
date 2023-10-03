import React, { useState } from 'react';
import { useGlobalContext } from '../../GlobalContext';

const WishListButton = ({ productId }) => {
  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useGlobalContext();
  const [isInWishlist, setIsInWishlist] = useState(isProductInWishlist(productId));

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className='like-button'
      >
        {isInWishlist ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
    </div>
  );
};

export default WishListButton;
