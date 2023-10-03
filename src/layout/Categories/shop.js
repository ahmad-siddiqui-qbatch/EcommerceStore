import React from 'react';
import data from '../../data.json';
import { NavLink, useParams } from 'react-router-dom';

const CategoryShopSidebar = () => {
  const { category, type } = useParams();
  const categories = [...new Set(data.products.map((product) => product.category))];
  const typesByCategory = {};
  categories.forEach((cat) => {
    typesByCategory[cat] = [...new Set(data.products.filter((product) => product.category === cat).map((product) => product.type))];
  });

  return (
    <div>
      <div className='category-sidebar'>
        <h5>Categories</h5>
        <ul>
          <li><NavLink to='/shop/all' activeClassName="active">All</NavLink></li>
          {categories.map((cat, index) => (
            <li key={index}><NavLink to={`/shop/${cat}`} activeClassName="active">{cat}</NavLink></li>
          ))}
        </ul>
      </div>
      {typesByCategory[category]?.length > 0 && (
        <div className='type-sidebar'>
        <h5>Product Types</h5>
          <ul>
            {typesByCategory[category].map((t, index) => (
              <li key={index}>
                <NavLink
                  to={`/shop/${category}/${t}`}
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

export default CategoryShopSidebar;
