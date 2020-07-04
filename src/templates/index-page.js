import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Categories from '../components/Categories'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndexPageTemplate = ({
  image,
  overlay_image,
  mainpitch,
  menu,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          maxHeight: '400px',
          maxWidth: '400px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          marginRight: 'auto',
          marginLeft: '3rem'
        }}
      >
        <div>
          <PreviewCompatibleImage imageInfo={overlay_image} />
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                </div>
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2">Menu</h3>
                </div>
                  {menu.categories.map((category) => (
                    <Categories categories={category} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  menu: PropTypes.shape({
    categories: PropTypes.arrayOf({
      title: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.arrayOf({
        text: PropTypes.string,
        item: PropTypes.string,
        price: PropTypes.string,
        options: PropTypes.array
      })
    }),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        overlay_image={frontmatter.overlay_image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        menu={frontmatter.menu}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
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
        overlay_image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
        }
        menu {
          categories {
            title
            description
            items {
              text
              item
              price
              options
            }
          }
        }
      }
    }
  }
`
