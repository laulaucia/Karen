import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArtistLinks from '../components/artist-links'

class RootIndex extends React.Component {
  render() {
    const [links]= get(this, 'props.data.allContentfulLinksAndWhatsNew.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <ArtistLinks
            text={links.entry}
            image={links.hero.gatsbyImage}
            title={links.title}
            images={links.bodyimages}
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ArtistQuery {
    allContentfulLinksAndWhatsNew(
        filter: {id: {eq: "87dc0360-a86d-57c8-b107-e99d60dcdd6e"}}
      )  {
      nodes {
        title
        hero {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        entry {
            raw
        }
        bodyimages {
            gatsbyImage(width: 300)
            description
            title
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
