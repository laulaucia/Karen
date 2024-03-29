import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts, heading, key }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  
  return (
    <Container >
      <h2>{heading}</h2>
      <ul className={styles.articleListHome}>
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
                <p>{post.authorName} &middot;{' '} {post.publicationInstitution} &middot;{' '} <time dateTime={post.date}>{post.date}</time></p>
                <div>
                  {post.exerpt}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
