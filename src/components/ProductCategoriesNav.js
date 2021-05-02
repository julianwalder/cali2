import React from 'react'
import { Link } from 'gatsby'

import CatalogSearch from './CatalogSearch'
import './ProductCategoriesNav.css'

const ProductCategoriesNav = ({ categories, enableSearch }) => (
  <div className="ProductCategoriesNav">
    <Link className="NavLink" exact="true" to={`/catalog/`}>
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <CatalogSearch />}
  </div>
)

export default ProductCategoriesNav
