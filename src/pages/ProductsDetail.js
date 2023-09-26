import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ProductDetail from '../components/ProductDetail';
import Products from '../components/commonComponents/Products';
import { Container } from 'react-bootstrap';
import data from '../data.json';


const ProductsDetail = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { productId } = useParams();
  const selectedProduct = data.products.find(
    (product) => product.id.toString() === productId
  );
  
  if (!selectedProduct) {
    return <p>Product not found.</p>;
  }
  return (
    <div className='pb-5'>
      <Container className='py-5'>
        <div className='d-flex'>
          <button className='btn btn-secondary mt-5 me-auto' onClick={handleGoBack}><i className="fa-solid fa-arrow-left pe-3"></i>Go Back</button>
        </div>
        <ProductDetail />
        <h2 className='pb-4'>Related Products</h2>
        <Products sectionProductCount={5} section related category={selectedProduct.category} type={selectedProduct.type}/>
      </Container>
    </div>
  );
};

export default ProductsDetail;