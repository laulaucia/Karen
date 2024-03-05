import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './media-preview.module.css'

const MediaPreview = ({ posts, style, heading, key }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  var articleStyle

  if (style) {
    articleStyle = styles.imageList
  } else {
    articleStyle = styles.imageGrid
  }
  return (
    <Container >
      <h2>{heading}</h2>
      <ul className={articleStyle}>
        {posts.map((post) => {
          var titleImage;
          if (post.coverPhoto) {
            titleImage = <GatsbyImage alt="" image={post.coverPhoto.gatsbyImage} className={styles.linkImage}/>;
          }
          else {
            titleImage = ''
          }
          return (
            <li key={post.slug} >
              <Link to={`/works/${post.slug}`} className={styles.linkGrid}>
                <h2 className={styles.linkTitle}>{post.title}</h2>
                {titleImage}
                <p>{post.authorName} {post.publicationInstitution}</p>
              </Link>
              <div>
                {post.exerpt}
              </div>
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default MediaPreview
