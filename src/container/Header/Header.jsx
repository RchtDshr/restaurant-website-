import React from 'react';
import {SubHeading} from '../../components';
// import {SubHeading} from '../../components/SubHeading/SubHeading';
import { images } from '../../constants'
import './Header.css';

const Header = () => {
  return(
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'> The Key to fine dining </h1>

        <p className="p__opensans" style={{ margin: '2rem 0'}} >Amul the taste of india</p>
        <button type='button' className='custom__button'>Explore Now</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header" className='welcomeimg' />
      </div>
    </div>
  )
}

export default Header;
