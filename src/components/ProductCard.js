import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './ProductCard.css'

const ProductCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`ProductCard ${className}`}>
    {featuredImage && (
      <div className="ProductCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="ProductCard--Content">
      {title && <h3 className="ProductCard--Title">{title}</h3>}
      <div className="ProductCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {excerpt && <div className="ProductCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default ProductCard
