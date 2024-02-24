import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const reviews = get(this, 'props.data.allContentfulReviews.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={hero.main.gatsbyImage}
          title={author.name}
          content={author.shortBio}
        />
        <ArticlePreview posts={reviews} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
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
        main {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`
