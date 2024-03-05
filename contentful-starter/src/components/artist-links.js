import React from 'react'

import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from './container'
import * as styles from './artist-links.module.css'
import { first } from 'lodash'


const ArtistLinks = ({ image, title, text, images }) => { 
    
    const firstImage = images[0];
    const bodyImages = images.slice(1);

    
    return (

        <Container style={styles.content}>
            {image && (
            <GatsbyImage className={styles.image} alt="Karen among her art" image={image} />
            )}
            <h1>{title}</h1>
            <div className={styles.gridBox}>
                <div>
                    <div className={styles.content}>{text?.raw && renderRichText(text)}</div>
                    <div className={styles.contentImages}>
                     {bodyImages?.map((img) => (
                            <GatsbyImage  alt={img.title} image={img.gatsbyImage} />
                        ))}
                    </div>
                </div>
                <div className={styles.gridImage}>
                    <GatsbyImage alt={firstImage.title} image={firstImage.gatsbyImage} />
                </div>
            </div>
                
        </Container>
        )
    }
export default ArtistLinks