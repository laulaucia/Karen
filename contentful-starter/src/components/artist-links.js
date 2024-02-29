import React from 'react'

import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from './container'
import * as styles from './article-preview.module.css'


const ArtistLinks = ({ image, title, text }) => { 
    
    const plainTextDescription = documentToPlainTextString(
        JSON.parse(text.raw)
      )
    const plainTextBody = documentToPlainTextString(JSON.parse(text.raw))
    
    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const { gatsbyImage, description } = node.data.target
          return (
             <GatsbyImage
                image={getImage(gatsbyImage)}
                alt={description}
             />
           )
          },
        },
      };
      console.log(options)
    
    return (

        <Container>
            {image && (
            <GatsbyImage className={styles.image} alt="Karen among her art" image={image} />
            )}
            <h1>{title}</h1>
                <div className={styles.content}>{text?.raw && renderRichText(text, options)}</div>
                
        </Container>
        )
    }
export default ArtistLinks