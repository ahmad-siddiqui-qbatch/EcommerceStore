import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from '../Rating';
import ProductPrice from '../Price';
import data from '../../../data.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Products(props) {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const { category, type } = props;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let filteredProducts = data.products;

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

    setProducts(filteredProducts);
  }, [props, category, type]);

  return (
    <div>
      {props.section && (
        <Row>
          {products.length <= 1 ? (
            <Col xs={12}>
              <p>No products match the selected criteria.</p>
            </Col>
          ) : (
            products.slice(0, 5).map((product) => {
              const matchId = product.id == productId;
              return (
                !matchId && (
                  <Col xl={3} md={6} key={product.id}>
                    <Link onClick={scrollToTop} to={`/products/${product.id}`}>
                      <div className='product'>
                        <img
                          className='product-img'
                          src={product.image}
                          alt={product.name}
                        />
                        <div>
                          <Rating rating={product.rating} />
                          <h4 className='product-heading'>{product.name}</h4>
                          <ProductPrice
                            oldPrice={product.oldPrice}
                            price={product.price}
                          />
                        </div>
                      </div>
                    </Link>
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
              <Link to={`/products/${product.id}`}>
                <div className='product'>
                  <img
                    className='product-img'
                    src={product.image}
                    alt={product.name}
                  />
                  <div>
                    <Rating rating={product.rating} />
                    <h4 className='product-heading'>{product.name}</h4>
                    <ProductPrice
                      oldPrice={product.oldPrice}
                      price={product.price}
                    />
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Products;
