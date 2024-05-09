import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center'>
    <div className="app__oboutus-overlay flex__center">
      <img src={images.G} alt='g letter'/>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'> About Us</h1>
        <img src={images.spoon} alt='spoon' className='letter-g' />
        <p className="p__opensans">sdfghjk dfghjk tryuio ertyui xdcvbn retyu cxvbnrt rdftgyhgb rstrsts sdfghjk dfghjk tryuio ertyui xdcvbn dfghjk tryuio ertyui xdcvbn smdfhds jsdgf sdjsdgf retyu cxvbnrt rdftgyhgb rstrsts</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="knife flex__center">
        <img src={images.knife} alt='knife' />
      </div>
      {/* <div className="app__aboutus-content flex__center"> */}
        <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='letter-g' />
          <p className="p__opensans">sdfghjk dfghjk tryuio ertyui xdcvbn retyu cxvbnrt rdftgyhgb rstrsts sdfghjk dfghjk tryuio ertyui xdcvbn dfghjk tryuio ertyui xdcvbn smdfhds jsdgf sdjsdgf retyu cxvbnrt rdftgyhgb rstrsts</p>
        <button type='button' className='custom__button'>Know More</button>
        </div>
      {/* </div> */}
    </div>
  </div>
);

export default AboutUs;
