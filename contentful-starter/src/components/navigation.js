import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './navigation.module.css'

const Navigation = ({signature}) => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      {signature && (
          <GatsbyImage alt="the artist's signature" image={signature} />
        )}
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/artist/" activeClassName="active">
          The Artist
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/works/" activeClassName="active">
          Works
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/reviews/" activeClassName="active">
          Reviews
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
