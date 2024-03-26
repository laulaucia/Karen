import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import MediaPreview from '../components/media-preview'

class WorksIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const home = {"home": true}

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Works" />
        <MediaPreview posts={posts} heading="Works" style={home}/>
      </Layout>
    )
  }
}

export default WorksIndex

export const pageQuery = graphql`
  query WorkIndexQuery {
    allContentfulMediaType(sort: {title: ASC}) {
        nodes {
          images {
            gatsbyImage(layout: FULL_WIDTH, width: 300)
            title
            description
          }
          coverPhoto {
            gatsbyImage( width: 500)
          }
          title
          slug
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
