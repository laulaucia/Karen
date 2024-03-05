import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../../components/seo'
import Layout from '../../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from '../../components/container'
import * as styles from './media.module.css'
import WorksLinks from '../../components/works-links'

class MixedMediaIndex extends React.Component {
  render() {
    const [post] = get(this, 'props.data.allContentfulMediaType.nodes')
    const [hero] = get(this, 'props.data.allContentfulHero.nodes')
    const images = post.images

    return (
      <Layout location={this.props.location} signature={hero.signature.gatsbyImage}>
        <Seo title="Blog" />
        <Container>
            <WorksLinks/>
            <h1>{post.title}</h1>
            <div className={styles.imageGrid}>
                {images?.map((img) => (
                  <div>
                    <GatsbyImage  alt={img.title} image={img.gatsbyImage} />
                    <h2>{img.title}</h2>
                    <p>{img.description}</p>
                  </div>
                    ))}
            </div>
            <Container>
                <div style={{padding:'62.5% 0 0 0', position:'relative'}}><iframe src="https://player.vimeo.com/video/160557567?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:'absolute', top:'0', left:'0', width: '100%', height:'100%'}} title="RUIDO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </Container>
            <Container>
                <div style={{padding:'62.5% 0 0 0', position:'relative', marginTop: '40px'}}><iframe src="https://player.vimeo.com/video/160558646?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%'}} title="SECRETOS DELICADOS"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
            </Container>
       </Container>
      </Layout>
    )
  }
}

export default MixedMediaIndex

export const pageQuery = graphql`
  query MediaIndexQuery {
    allContentfulMediaType(filter: {slug: {eq: "video"}}) {
        nodes {
          title
          id
          slug
          images {
            gatsbyImage(
                placeholder: BLURRED
                width: 300)
            title
            description
          }
          coverPhoto {
            gatsbyImage(
                placeholder: BLURRED
                layout: FULL_WIDTH
                width: 424
                height: 212)
          }
        }
      }
    allContentfulHero {
      nodes {
        signature {
          gatsbyImage(
            placeholder: BLURRED
            width: 320
            height: 30
          )
        }
      }
    }
  }
`

