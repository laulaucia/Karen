import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class ReviewIndex extends React.Component {
  render() {
    const reviews = get(this, 'props.data.allContentfulReviews.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Review" />
        <ArticlePreview posts={reviews} heading="Reviews" />
      </Layout>
    )
  }
}

export default ReviewIndex

export const pageQuery = graphql`
  query ReviewsIndexQuery {
    allContentfulReviews(sort: { date: DESC }) {
      nodes {
        title
        authorName
        publicationInstitution
        role
        slug
        exerpt
        date(formatString: "MMMM Do, YYYY")
        review {
          raw
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
