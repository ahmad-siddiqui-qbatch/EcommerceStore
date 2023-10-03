import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from '../Rating';
import ProductPrice from '../Price';
import WishListButton from '../WishListButton';
import data from '../../../data.json';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../GlobalContext';

function Products(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { productId } = useParams();
  const { category, type, related, sectionProductCount } = props;
  const { addToCart } = useGlobalContext();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let productsToDisplay = data.products;

    if (related) {
      productsToDisplay = productsToDisplay.sort((a, b) => {
        if (a.type === type && b.type !== type) return -1;
        if (a.category === category && b.category !== category) return -1;
        return 1;
      });
    } else {
      if (category) {
        productsToDisplay = productsToDisplay.filter(
          (product) => product.category === category
        );
      }

      if (type) {
        productsToDisplay = productsToDisplay.filter(
          (product) => product.type === type
        );
      }

      if (props.rating) {
        productsToDisplay = productsToDisplay.filter(
          (product) => product.rating === 5
        );
      }

      if (props.sale) {
        productsToDisplay = productsToDisplay.filter(
          (product) => typeof product.oldPrice !== 'undefined'
        );
      }
    }

    setFilteredProducts(productsToDisplay);
  }, [props, category, type, related]);

  return (
    <div>
      {props.section && (
        <Row>
          {filteredProducts.length <= 1 ? (
            <Col xs={12}>
              <p>No products match the selected criteria.</p>
            </Col>
          ) : (
            filteredProducts.slice(0, sectionProductCount).map((product) => {
              const matchId = product.id == productId;
              return (
                !matchId && (
                  <Col xl={3} xs={6} key={product.id}>
                    <div className='product'>
                      <Link
                        onClick={() => {
                          scrollToTop();
                        }}
                        to={`/products/${product.id}`}
                      >
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
                        <WishListButton productId={product.id} />
                        <button
                          className='btn btn-secondary'
                          onClick={() => addToCart(product)}
                        >
                          Add to cart
                        </button>
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
          {filteredProducts.map((product) => (
            <Col xl={3} md={4} sm={6} key={product.id}>
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
                  <WishListButton productId={product.id} />
                  <button
                    className='btn btn-secondary'
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
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
