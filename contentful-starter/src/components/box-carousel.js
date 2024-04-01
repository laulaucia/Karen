import React from 'react'
import { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './box-carousel.module.css'

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function BoxCarousel({images}) {

  const [imageToShow, setImageToShow] = useState({});
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);


  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  
  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  
  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  
  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const handleKeyDown = (e, image) => {
    // check keys if you want
    if (e.keyCode === 27) {
      hideLightBox();
    }
    if (e.keyCode === 37) {
      showNext(e);
    }
    if (e.keyCode === 39) {
      showPrev(e);
    }
    if (e.keyCode === 13) {
      showImage(image);
    }

  } 
  
  //looping through our images array to create img elements
  const imageCards = images.map((image) => (
    <div className={styles.imageGrid} onClick={() => showImage(image)} onKeyDown={handleKeyDown(image)} tabIndex={0} role='tab'>
        <GatsbyImage  alt={image.title} image={image.gatsbyImage} />
        <div className={styles.description}>
          <strong>{image.title}</strong>
          <br/>
          {image.description}
        </div>
    </div>
  ));
  
  return (
    <>
      <div className={styles.imageGrid}>{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div className={styles.lightbox} onClick={hideLightBox} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
          <button onClick={showPrev} onKeyDown={handleKeyDown}>⇐</button>
          <div id="lightbox" className={styles.lightboxImg}>
              <GatsbyImage  alt={imageToShow.title} image={imageToShow.gatsbyImage} />
              <div className={styles.description}>
                <strong>{imageToShow.title}</strong>
                <br/>
                {imageToShow.description}
              </div>
          </div>
          <button onClick={showNext} onKeyDown={handleKeyDown}>⇒</button>
        </div>
       : ""
      }
    </>
  );
}

export default BoxCarousel;