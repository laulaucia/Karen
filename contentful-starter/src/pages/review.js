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

    return (
      <Layout location={this.props.location}>
        <Seo title="Review" />
        <Hero title="Review" />
        <ArticlePreview posts={reviews} />
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
        slug
        date(formatString: "MMMM Do, YYYY")
        review {
          raw
        }
      }
    }
  }
`
