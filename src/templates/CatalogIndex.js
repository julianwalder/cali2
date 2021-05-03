import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'

import PageHeader from '../components/PageHeader'
import ProductSection from '../components/ProductSection'
import ProductCategoriesNav from '../components/ProductCategoriesNav'
import Layout from '../components/Layout'

/**
 * Filter products by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show scheduled content. See docs
 *
 * @param {products} object
 */
export const byDate = products => {
  const now = Date.now()
  return products.filter(products => Date.parse(products.date) <= now)
}

/**
 * filter products by category.
 *
 * @param {products} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (products, title, contentType) => {
  const isCategory = contentType === 'productCategories'
  const byCategory = product =>
    product.categories &&
    product.categories.filter(cat => cat.category === title).length
  return isCategory ? products.filter(byCategory) : products
}

// Export Template for use in CMS preview
export const CatalogIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  products = [],
  productCategories = [],
  enableSearch = true,
  contentType
}) => (
  <Location>
    {({ location }) => {
      let filteredProducts =
        products && !!products.length
          ? byCategory(byDate(products), title, contentType)
          : []

      let queryObj = location.search.replace('?', '')
      queryObj = qs.parse(queryObj)

      if (enableSearch && queryObj.s) {
        const searchTerm = queryObj.s.toLowerCase()
        filteredProducts = filteredProducts.filter(product =>
          product.frontmatter.title.toLowerCase().includes(searchTerm)
        )
      }

      return (
        <main className="Catalog">
          <PageHeader
            title={title}
            subtitle={subtitle}
            backgroundImage={featuredImage}
          />

          {!!productCategories.length && (
            <section className="section thin">
              <div className="container">
                <ProductCategoriesNav enableSearch categories={productCategories} />
              </div>
            </section>
          )}

          {!!products.length && (
            <section className="section">
              <div className="container">
                <ProductSection products={filteredProducts} />
              </div>
            </section>
          )}
        </main>
      )
    }}
  </Location>
)

// Export Default CatalogIndex for front-end
const CatalogIndex = ({ data: { page, products, productCategories } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CatalogIndexTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      products={products.edges.map(product => ({
        ...product.node,
        ...product.node.frontmatter,
        ...product.node.fields
      }))}
      productCategories={productCategories.edges.map(product => ({
        ...product.node,
        ...product.node.frontmatter,
        ...product.node.fields
      }))}
    />
  </Layout>
)

export default CatalogIndex

export const pageQuery = graphql`
  ## Query for CatalogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query CatalogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        contentType
      }
      frontmatter {
        title
        excerpt
        template
        subtitle
        featuredImage
      }
    }

    products: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "products" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage
          }
        }
      }
    }
    productCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "productCategories" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
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
