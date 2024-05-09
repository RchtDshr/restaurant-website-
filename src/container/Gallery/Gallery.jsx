import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const imageslist = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft +=300
    }
  }
  return(
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant '>Photo Gallery</h1>
        <p className="p__opensans" style={{marginTop: '2rem'}}>If you're new to 3D programming or are building a simpler application, Three. js is probably the best choice. If you're building a more complex application that requires advanced physics and animation, or if you're building a game or other immersive application, Babylon. js is the better choice.</p>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {imageslist.map((image,index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
            <img src={image} alt= {`gallery ${index}`} />
            <BsInstagram className='instagram' />
          </div>

        ))}
        </div>
        <div className="app_gallery-images_arrow">
          <BsArrowLeftShort className='galler-icon' onClick={() => {scroll('left')}}/>
          <BsArrowRightShort className='galler-icon' onClick={() => {scroll('right')}}/>

        </div>
      </div>
    </div>
  )
}

export default Gallery;
