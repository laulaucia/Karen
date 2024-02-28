import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Built by <a href="https://laurabuitrago.com/">Laura</a> and <Link to="/maurice/">Maurice</Link> ❤️
    </div>
  </Container>
)

export default Footer
