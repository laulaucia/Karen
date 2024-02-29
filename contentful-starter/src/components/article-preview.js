import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts, style, heading, key }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null
  var articleStyle

  if (style) {
    articleStyle = styles.articleListHome
  } else {
    articleStyle = styles.articleList
  }
  
  return (
    <Container >
      <h2>{heading}</h2>
      <ul className={articleStyle}>
        {posts.map((post) => {
          var titleImage;
          if (post.heroImage) {
            titleImage = <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />;
          }
          else if (post.coverPhoto) {
            titleImage = <GatsbyImage alt="" image={post.coverPhoto.gatsbyImage} />;
          }
          else {
            titleImage = ''
          }
          return (
            <li key={post.slug}>
              <Link to={`/reviews/${post.slug}`} className={styles.link}>
                {titleImage}
                <h2 className={styles.title}>{post.title}</h2>
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

export default ArticlePreview
