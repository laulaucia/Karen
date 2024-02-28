import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import ArticlePreview from '../../components/article-preview'

class PaintingsIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Blog" />
        <Hero subtitle="Blog" />
        <ArticlePreview posts={posts} style="blog"  heading="Blogs" key="blogs"/>
      </Layout>
    )
  }
}

export default PaintingsIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulHero {
      nodes {
        signature {
          gatsbyImage(
            placeholder: BLURRED
            width: 516
            height: 51
          )
        }
      }
    }
  }
`
