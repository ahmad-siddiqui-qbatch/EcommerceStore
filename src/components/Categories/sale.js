import React from 'react';
import data from '../../data.json';
import './style.scss';
import { Link, NavLink, useParams } from 'react-router-dom';

const CategorySidebar = () => {
  const { category, type } = useParams();
  const categories = [...new Set(data.products.map((product) => product.category))];
  const typesByCategory = {};
  categories.forEach((cat) => {
    typesByCategory[cat] = [
      ...new Set(
        data.products
          .filter((product) => product.category === cat && typeof product.oldPrice !== 'undefined')
          .map((product) => product.type)
      ),
    ];
  });

  return (
    <div>
      <div className='category-sidebar'>
        <h5>Categories</h5>
        <ul>
          <li><NavLink to='/sale/all' activeClassName="active">All</NavLink></li>
          {categories.map((cat, index) => (
            <li key={index}><NavLink to={`/sale/${cat}`} activeClassName="active">{cat}</NavLink></li>
          ))}
        </ul>
      </div>
      {typesByCategory[category]?.length > 0 && (
        <div className='type-sidebar'>
          <h5>Product Type</h5>
          <ul>
            {typesByCategory[category].map((t, index) => (
              <li key={index}>
                <NavLink
                  to={`/sale/${category}/${t}`}
                  activeClassName="active"
                  isActive={() => type === t}
                >
                  {t}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
