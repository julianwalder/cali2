import React, { Fragment } from 'react'
import _get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SingleProduct.css'

export const SingleProductTemplate = ({
  title,
  date,
  body,
  nextProductURL,
  prevProductURL,
  categories = []
}) => (
  <main>
    <article
      className="SingleProduct section light"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="container skinny">
        <Link className="SingleProduct--BackButton" to="/catalog/">
          <ChevronLeft /> TOATE PRODUSELE
        </Link>
        <div className="SingleProduct--Content relative">
          <div className="SingleProduct--Meta">
            
            {categories && (
              <Fragment>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="SingleProduct--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>

          {title && (
            <h1 className="SingleProduct--Title" itemProp="title">
              {title}
            </h1>
          )}

          <div className="SingleProduct--InnerContent">
            <Content source={body} />
          </div>

          <div className="SingleProduct--Pagination">
            {prevProductURL && (
              <Link
                className="SingleProduct--Pagination--Link prev"
                to={prevProductURL}
              >
                Anteriorul
              </Link>
            )}
            {nextProductURL && (
              <Link
                className="SingleProduct--Pagination--Link next"
                to={nextProductURL}
              >
                Următorul
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  </main>
)

// Export Default SingleProduct for front-end
const SingleProduct = ({ data: { product, allProducts } }) => {
  const thisEdge = allProducts.edges.find(edge => edge.node.id === product.id)
  return (
    <Layout
      meta={product.frontmatter.meta || false}
      title={product.frontmatter.title || false}
    >
      <SingleProductTemplate
        {...product}
        {...product.frontmatter}
        body={product.html}
        nextProductURL={_get(thisEdge, 'next.fields.slug')}
        prevProductURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}

export default SingleProduct

export const pageQuery = graphql`
  ## Query for SingleProduct data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleProduct($id: String!) {
    product: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        subtitle
        date(formatString: "MMMM Do, YYYY")
        categories {
          category
        }
      }
    }

    allProducts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
