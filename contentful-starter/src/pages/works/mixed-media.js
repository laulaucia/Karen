import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from '../../components/container'
import * as styles from './media.module.css'
import WorksLinks from '../../components/works-links'


class MixedMediaIndex extends React.Component {
  render() {
    const [post] = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const images = post.images

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Mixed Media" />
        <Container>
            <WorksLinks/>
            <h1>{post.title}</h1>
            <div className={styles.imageGrid}>
                {images?.map((img) => (
                  <div>
                    <GatsbyImage  alt={img.title} image={img.gatsbyImage} />
                    <p><strong>{img.title}</strong></p>
                    <p>{img.description}</p>
                  </div>
                    ))}
            </div>
       </Container>
      </Layout>
    )
  }
}

export default MixedMediaIndex

export const pageQuery = graphql`
  query MediaIndexQuery {
    allContentfulMediaType(filter: {slug: {eq: "mixed-media"}}) {
        nodes {
          title
          id
          slug
          images {
            gatsbyImage(
                placeholder: BLURRED
                width: 300)
            title
            description
          }
          coverPhoto {
            gatsbyImage(
                placeholder: BLURRED
                layout: FULL_WIDTH
                width: 424
                height: 212)
          }
        }
      }
    allContentfulHero {
      nodes {
        signature {
          gatsbyImage(
            placeholder: BLURRED
            width: 400
            height: 30
          )
        }
      }
    }
  }
`
