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
        filter: {id: {eq: "5a5ea6dc-236e-5a0a-b15d-0d2be2257e0c"}}
      )  {
      nodes {
        title
        hero {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 240
          )
        }
        entry {
            raw
        }
        bodyimages {
            gatsbyImage(width: 700)
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
              width: 370
              height: 30
            )
          }
        }
      }
  }
`
