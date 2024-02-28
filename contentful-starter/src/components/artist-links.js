import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from './container'
import * as styles from './article-preview.module.css'

const ArtistLinks = ({ image, title, text }) => (
  <Container>
    {image && (
      <GatsbyImage className={styles.image} alt="Karen among her art" image={image} />
    )}
    <h1>{title}</h1>
        <div className={styles.content}>{renderRichText(text)}</div>
  </Container>
)

export default ArtistLinks