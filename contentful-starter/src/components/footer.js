import React from 'react'
import { Link } from 'gatsby'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.disclaimer}>
        Copyright © 1996-2024 Karen Lamassonne. All rights reserved. <br/>No part of the images or text on these pages may be reproduced or transmitted in any form or by any means, electronic or mechanical, including photocopying, recording or any information storage or retrieval system, without prior permission in writing from the artist. 
      </div>
      <div className={styles.madeby}>Built by <a href="https://laurabuitrago.com/">Laura</a> and <Link to="/maurice/">Maurice</Link> ❤️</div>
    </div>
  </Container>
)

export default Footer
