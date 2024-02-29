import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, subtitle }) => {
  return(
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={subtitle} image={image} />
    )}
    <div className={styles.details}>
      <div className={styles.content}>{subtitle}</div>
    </div>
  </div>
)
    }
export default Hero
