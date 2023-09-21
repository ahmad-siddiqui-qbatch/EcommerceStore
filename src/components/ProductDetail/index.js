/**
 * ProductDetails.js
 *
 * This file defines the ProductDetails component, which displays detailed information about a selected product. 
 * It retrieves product data from the data.json file based on the product ID provided in the URL using React Router's useParams hook.
 * It renders product details, including the product image, name, category, type, rating, and price. 
 * If an old price is available for the product, it also displays the old price.
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data.json';
import './style.scss'

import { Col, Row } from 'react-bootstrap';

function ProductDetails() {
  const { productId } = useParams();
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
            <h2>{selectedProduct.name}</h2>
            <p><b>Category:</b><Link to={`/shop/${selectedProduct.category}`}>{selectedProduct.category}</Link></p>
            <p><b>Type:</b> {selectedProduct.type}</p>
            <p><b>Rating:</b> {selectedProduct.rating}</p>
            <p className='product-price'>
              <b>Price: </b>
              <span className='old-price'>{selectedProduct.oldPrice && selectedProduct.oldPrice}</span>
              <span className='new-price'> ${selectedProduct.price}</span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia elit at bibendum suscipit. Nam cursus interdum elit, sit amet finibus quam consectetur a. Maecenas fermentum quam eu arcu laoreet ultricies. Fusce auctor purus vel vestibulum malesuada. Donec dapibus massa a nunc iaculis tincidunt. Nulla facilisi. Sed quis justo eu velit feugiat bibendum. Morbi a metus vestibulum, aliquet ipsum a, mattis metus. Maecenas gravida magna nec risus euismod volutpat. Curabitur interdum nibh ac elit sodales, sed vehicula arcu tincidunt. Nulla facilisi. Sed a interdum libero, non iaculis ipsum. Integer scelerisque felis ut justo lobortis, in tempus arcu malesuada. Nunc viverra justo eget risus laoreet, id interdum ante fringilla. Vivamus eget nunc ut nisi interdum ultrices.</p>
            </div>
          </Col>
        </Row>
    </div>
  );
}

export default ProductDetails;
