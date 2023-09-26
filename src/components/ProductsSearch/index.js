import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';

import './style.scss';

const ProductSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = query
      ? data.products
          .filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
      : [];

    setFilteredProducts(filtered);
  };

  return (
    <div className="search-wrapper">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="searchbar"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      {searchQuery && filteredProducts.length === 0 && (
        <p className="no-products-found">No products found.</p>
      )}
      {searchQuery && (
        <ul className="search-list">
          {filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`}>
            <li key={product.id}>
              
                <img src={product.image} alt={product.name} />
                {product.name}
            </li>

            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductSearchBar;
