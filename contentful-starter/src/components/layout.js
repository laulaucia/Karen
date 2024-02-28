import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props
    const signature = this.props.signature
    console.log(this.props)

    return (
      <>
        <Seo />
        <Navigation signature={signature}/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
