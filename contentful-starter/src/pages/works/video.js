import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from '../../components/container'


class MixedMediaIndex extends React.Component {
  render() {
    const [post] = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const images = post.images

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Blog" />
        <Hero  image={post.coverPhoto}/>
        <Container>
            <h1>{post.title}</h1>
            {images?.map((img) => (
                <Container>
                    <GatsbyImage  alt={img.title} image={img.gatsbyImage} />
                    <h2>{img.title}</h2>
                    <p>{img.description}</p>
                </Container>
                ))}
       </Container>
      </Layout>
    )
  }
}

export default MixedMediaIndex

export const pageQuery = graphql`
  query MediaIndexQuery {
    allContentfulMediaType(filter: {slug: {eq: "video"}}) {
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
            width: 320
            height: 30
          )
        }
      }
    }
  }
`

