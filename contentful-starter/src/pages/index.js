import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import MediaPreview from '../components/media-preview'

class RootIndex extends React.Component {
  render() {
    const reviews = get(this, 'props.data.allContentfulReviews.nodes')
    const media = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const home = {"home": true}

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Hero
          image={hero.main.gatsbyImage}

        />
        <MediaPreview posts={media}  heading="Work" key="works"/>
        <ArticlePreview posts={reviews} style={home} heading="Reviews" key="reviews"/>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulReviews {
      nodes {
        authorName
        date(formatString: "MMMM Do, YYYY")
        location {
          lon
          lat
        }
        publicationInstitution
        review {
          raw
        }
        role
        slug
        title
        exerpt
      }
      totalCount
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
            width: 320
            height: 30
          )
        }
      }
    }
    allContentfulMediaType {
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
