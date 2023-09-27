import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from '../Rating';
import ProductPrice from '../Price';
import data from '../../../data.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Cart/CartContext';

import './style.scss';

function Products(props) {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const { category, type, related, sectionProductCount } = props;
  const { addToCart } = useCart(); 

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let filteredProducts = data.products;

    if (related) {
      filteredProducts = filteredProducts.sort((a, b) => {
        if (a.type === type && b.type !== type) return -1;
        if (a.category === category && b.category !== category) return -1;
        return 1;
      });
    } else {
      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === category
        );
      }

      if (type) {
        filteredProducts = filteredProducts.filter(
          (product) => product.type === type
        );
      }

      if (props.rating) {
        filteredProducts = filteredProducts.filter(
          (product) => product.rating === 5
        );
      }

      if (props.sale) {
        filteredProducts = filteredProducts.filter(
          (product) => typeof product.oldPrice !== 'undefined'
        );
      }
    }

    setProducts(filteredProducts);
  }, [props, category, type, related]);

  return (
    <div>
      {props.section && (
        <Row>
          {products.length <= 1 ? (
            <Col xs={12}>
              <p>No products match the selected criteria.</p>
            </Col>
          ) : (
            products.slice(0, sectionProductCount).map((product) => {
              const matchId = product.id == productId;
              return (
                !matchId && (
                  <Col xl={3} md={6} key={product.id}>
                      <div className='product'>

                    <Link onClick={scrollToTop} to={`/products/${product.id}`}>
                        <img
                          className='product-img'
                          src={product.image}
                          alt={product.name}
                        />

                    </Link>
                        <div className='product-info'>
                          <ProductPrice
                            oldPrice={product.oldPrice}
                            price={product.price}
                          />
                          <h4 className='product-heading'>{product.name}</h4>
                          <Rating rating={product.rating} />
                          <button className='btn btn-secondary' onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                      </div>
                  </Col>
                )
              );
            })
          )}
        </Row>
      )}

      {props.page && (
        <Row>
          {products.map((product) => (
            <Col xl={3} md={6} key={product.id}>
                <div className='product'>
              <Link to={`/products/${product.id}`}>
                  <img
                    className='product-img'
                    src={product.image}
                    alt={product.name}
                  />

              </Link>
                  <div className='product-info'>
                    <ProductPrice
                      oldPrice={product.oldPrice}
                      price={product.price}
                    />
                    <h4 className='product-heading'>{product.name}</h4>
                    <Rating rating={product.rating} />
                    <button className='btn btn-secondary' onClick={() => addToCart(product)}>Add to cart</button>
                  </div>
                </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Products;
