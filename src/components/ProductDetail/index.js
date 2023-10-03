import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data.json';
import { useGlobalContext } from '../GlobalContext'; // Import the useGlobalContext hook

import { Col, Row } from 'react-bootstrap';

function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useGlobalContext(); 
  const selectedProduct = data.products.find(
    (product) => product.id.toString() === productId
  );

  if (!selectedProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='product-detail'>
      <Row className='align-items-center g-5'>
        <Col lg='6'>
          <img className='product-image' src={selectedProduct.image} alt={selectedProduct.name} />
        </Col>
        <Col lg='6'>
          <div className='product-details'>
            <h2 className='golden-heading'>{selectedProduct.name}</h2>
           <div className='product-inner-wrapper'>
           <p><b>Category: </b><Link to={`/shop/${selectedProduct.category}`}>{selectedProduct.category}</Link></p>
            <p><b>Type: </b><Link to={`/shop/${selectedProduct.category}/${selectedProduct.type}`}>{selectedProduct.type}</Link> </p>
            <p><b>Rating: </b> {selectedProduct.rating}</p>
           </div>
            <p className='product-price'>
              <b>Price: </b>
              <span className='old-price'>{selectedProduct.oldPrice && selectedProduct.oldPrice}</span>
              <span className='new-price'> ${selectedProduct.price}</span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            {/* Add the "Add to Cart" button here */}
            <button className='btn btn-primary' onClick={() => addToCart(selectedProduct)}>Add to cart <i className="fa-solid fa-cart-arrow-down"></i></button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetails;
