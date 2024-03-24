import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const WorksLinks = ({signature}) => (
  <nav role="navigation" className={styles.navContainer} aria-label="works">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/works/paintings" activeClassName="active">
          Drawing / Painting
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/works/mixed-media" activeClassName="active">
            Photography / Mixed Media
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/works/video" activeClassName="active">
          Video / Film
        </Link>
      </li>
    </ul>
  </nav>
)

export default WorksLinks
