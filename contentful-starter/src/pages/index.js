import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import MediaPreview from '../components/media-preview'
import ArtistLinks from '../components/artist-links'


class RootIndex extends React.Component {
  render() {
    const media = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const [links]= get(this, 'props.data.allContentfulLinksAndWhatsNew.nodes')
    const home = {"home": true}

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Hero
          image={hero.main.gatsbyImage}
        />
        <ArtistLinks
            text={links.entry}
            title={links.title}
            images={links.bodyimages}
          />
        <MediaPreview posts={media}  heading="Work" key="works"/>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulLinksAndWhatsNew(
      filter: {id: {eq: "6d2fa557-db1e-57d5-9d00-86f489f5e4a4"}}
    ) {
      nodes {
        id
        title
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
        subtitle
        main {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 700
          )
        }
        signature {
          gatsbyImage(
            placeholder: BLURRED
            width: 380
            height: 30
          )
        }
      }
    }
    allContentfulMediaType(sort: {title: ASC}) {
      nodes {
        coverPhoto {
          gatsbyImage(width: 320)
        }
        title
        slug
        children {
          ... on ContentfulWorks {
            id
          }
        }
      }
    }
  }
`
