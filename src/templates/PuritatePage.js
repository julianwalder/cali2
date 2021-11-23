import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
// import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import ButtonCTA from '../components/ButtonCTA'
// import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const PuritatePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section narrow">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <ButtonCTA>
          <Content source={section1} />
      </ButtonCTA>
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

  </main>
)

const PuritatePage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <PuritatePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PuritatePage

export const pageQuery = graphql`
  query PuritatePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
