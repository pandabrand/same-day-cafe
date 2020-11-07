import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import instagramLogo from '../img/instagram.svg';

export const IndexPageTemplate = ({ image, second_hero, instagramPhotos }) =>
{
   return (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom center`,
      }}
    >
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="full-width-image-container">
              <div className="button-position-home">
                <a href="https://google.com" className="button is-primary is-uppercase">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div className="container has-background-primary is-fluid">
        <div className="columns">
          <div className="column">
            <a href="#" className="has-text-white p-1 has-text-centered ml-auto mr-auto is-block is-uppercase">Order for Pick Up or Delivery</a>
          </div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container has-text-centered mb-4">
          <div><img src={instagramLogo} style={{width: '60px', height: '60px'}}/></div>
        </div>
        <div className="container">
          <div className="columns is-multiline is-justify-content-center">
            {
              instagramPhotos.map((photo, index) => {
                return <div key={index} className="column is-one-quarter py-4">
                  <div className="is-flex is-justify-content-center is-align-items-center">
                    <img src={photo.localFile.childImageSharp.fixed.src} width="250" height="250" />
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div
        className="full-width-image secondary mt-0"
        style={{
          backgroundImage: `url(${
            !!second_hero.childImageSharp ? second_hero.childImageSharp.fluid.src : second_hero
          })`,
          backgroundPosition: `bottom 20px`,
        }}
      >
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="full-width-image-container">
                  <a href="https://google.com" className="button is-primary is-uppercase">Order Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { nodes } = data.allInstaNode

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        second_hero={frontmatter.second_hero}
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
        instagramPhotos={nodes}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allInstaNode: PropTypes.shape({
      nodes: PropTypes.array
    })
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        second_hero {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
        }
      }
    }
    allInstaNode(sort: {order: DESC, fields: timestamp}, limit: 8) {
      nodes {
        id
        timestamp
        original
        caption
        localFile {
          childImageSharp {
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
