import React from 'react';

import './MenuItem.css';

const MenuItem = (props) => {
  return (
    <>
    <div className='menuitem' style={{padding: '0.8rem 0'}}>
      <div className="wine-details flex__center" style={{justifyContent: 'space-between'}}>
        <p className='p__cormorant wine-name'> {props.name} </p>
        <div className="line"></div>
        <p className="p__cormorant wine-price">{props.price}</p>
      </div>

      <p className="p__opensans wine-tags"> {props.tags} </p>


    </div>
    </>
  )
}

export default MenuItem;
