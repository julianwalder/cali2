import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
// import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
// import Popup from '../components/Popup'
import ButtonCTA from '../components/ButtonCTA'
import InstagramFeed from '../components/InstagramFeed'

// Export Template for use in CMS preview
export const MuntiiCalimaniTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  section3,
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
    <section className="section narrow" style={{paddingBottom: '0px', borderBottom: '0px',}}>
      <div className="container">
        <blockquote>{section3}</blockquote>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1 style = {{
          fontSize: "60px", 
          lineHeight: "110%",
          textTransform: "uppercase", 
          textAlign: "center", marginBottom: "6rem",}}>Descoperă călătoria apei</h1>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section narrow">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    {/* <section className="section"> 
      <div className="container">
        <Content source={section2} />
      </div>
    </section> */}

    <section className="BackgroundVideo-section section">
      <ButtonCTA>
          <Content source={section1} />
      </ButtonCTA>
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    {/* <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Popup>
          <Content source={section1} />
        </Popup>
      </div>
    </section>  */}
    <section className="section narrow">
      <div className="container">
        <Content source="Apa Izvoarele Călimani hidratează corpul cu delicatețe și este
asimilată ușor. Cu un pH identic cu cel al sângelui nostru, cu conținut
scăzut de săruri minerale și duritate scăzută, apa Izvoarele Călimani
hidratează corpul cu delicatețe și este recomandată în dietele
hiposodice, pentru prepararea hranei sugarilor sau în curele de
detoxifiere" />
    
        <h1 
        style = {{
          fontSize: "60px",
          lineHeight: "110%",
          textTransform: "uppercase", 
          textAlign: "center", 
          marginBottom: "1rem",}}>
            PICĂTURA TA DE INSPIRAȚIE</h1>
          <Content source="Urmărește-ne pe insta oricând ți-e sete de conținut bun:"/>
        
      </div>
    </section>

    <section>
      <InstagramFeed/>
    </section>


  </main>
)

const MuntiiCalimani = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <MuntiiCalimaniTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default MuntiiCalimani

export const pageQuery = graphql`
  query MuntiiCalimani($id: String!) {
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
        section3
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
