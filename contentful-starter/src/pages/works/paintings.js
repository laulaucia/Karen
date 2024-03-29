import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import BoxCarousel from '../../components/box-carousel'
import Container from '../../components/container'
import WorksLinks from '../../components/works-links'

class MixedMediaIndex extends React.Component {
  render() {
    const [post] = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const images = post.images

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Paintings" />
        <Container>
            <WorksLinks/>
            <h1>{post.title}</h1>
            <BoxCarousel images={images}/>
       </Container>
      </Layout>
    )
  }
}

export default MixedMediaIndex

export const pageQuery = graphql`
  query MediaIndexQuery {
    allContentfulMediaType(filter: {slug: {eq: "paintings"}}) {
        nodes {
          title
          id
          slug
          images {
            gatsbyImage(
                placeholder: BLURRED
                width: 300
            )
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
