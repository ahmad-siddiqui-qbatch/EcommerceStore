import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../GlobalContext';
import data from '../../data.json';

function Wishlist() {
  const { wishlist, addToCart, removeFromWishlist } = useGlobalContext();
  const { productId } = useParams();

  const isProductInWishlist = () => {
    return wishlist.includes(productId);
  };

  return (
    <div>
      <h1 className='golden-heading py-5 mt-4 d-block'>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className='pb-5 mb-4'>Your wishlist is empty.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Unit Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((productId) => {
                const product = data.products.find((item) => item.id === productId);
                if (!product) {
                  // Handle the case where the product is not found
                  return null;
                }
                return (
                  <tr key={productId}>
                    <td>
                      <img
                        className='wishlist-product-image'
                        src={product.image}
                        alt={product.name}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                     <div className='d-flex justify-content-around'>
                     <button
                        className='btn btn-primary'
                        onClick={() => {
                          if (!isProductInWishlist(productId)) {
                            addToCart(product);
                          }
                        }}
                        disabled={isProductInWishlist(productId)}
                      >
                        {isProductInWishlist(productId) ? 'Added to Cart' : 'Add to Cart'}
                      </button>

                      <button
                        className='trash-button'
                        onClick={() => removeFromWishlist(productId)}
                      >
                        <i className='fa-regular fa-trash-can'></i>
                      </button>
                     </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
