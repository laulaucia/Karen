import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class ReviewPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulReviews')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    console.log(this.props)
    // const plainTextDescription = documentToPlainTextString(
    //   JSON.parse(post.description.raw)
    // )
    const plainTextBody = documentToPlainTextString(JSON.parse(post.review.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)
    
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImage, description } = node.data.target
        return (
           <GatsbyImage
              image={getImage(gatsbyImage)}
              alt={description}
           />
         )
        },
      },
    };

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.exerpt}
        />
        <Hero
          title={post.subtitle}
          content={post.review}
        />
        <div className={styles.container}>
            <h1>{post.title}</h1>
          <span className={styles.meta}>
            {post.authorName} &middot;{' '}
            {post.publicationInstitution} &middot;{' '}
            <time dateTime={post.date}>{post.date}</time> –{' '}
            {timeToRead} minute read
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.review?.raw && renderRichText(post.review, options)}
            </div>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/reviews/${previous.slug}`} rel="prev">
                        ← {previous.slug}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/reviews/${next.slug}`} rel="next">
                        {next.slug} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default ReviewPostTemplate

export const pageQuery = graphql`
  query ReviewsBySlug(
    $slug: String
    $previousReviewsSlug: String
    $nextReviewsSlug: String
  ) {
    contentfulReviews(slug: { eq: $slug }) {
      slug
      title
      authorName
      publicationInstitution
      date(formatString: "MMMM Do, YYYY")
      rawDate: date
      review {
        raw
      }
    }
    previous: contentfulReviews(slug: { eq: $previousReviewsSlug }) {
      slug
      title
    }
    next: contentfulReviews(slug: { eq: $nextReviewsSlug }) {
      slug
      title
    }
  }
`
