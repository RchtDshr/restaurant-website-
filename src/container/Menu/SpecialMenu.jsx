import React from 'react';
import { data, images } from '../../constants'
import { SubHeading, MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className="app__specialmenu">
      <div className="app__specialmenu-list">
        <SubHeading title="Menu that fits your please" />
        <h1 className='headtext__cormorant'> Today's Special</h1>
      </div>
      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-wines">
          <h1 className='p__cormorant'>Wine & Beer</h1>
          <div className="app__specialmenu-wineslist" style={{width: '100%'}} >
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} name={wine.title} tags={wine.tags} price={wine.price} />
            ))}
          </div>
        </div>
        <div className="app__specialmenu-img">

          <img src={images.menu} alt='menu' />
        </div>

        <div className="app__specialmenu-wines">
          <h1 className='p__cormorant'>Cocktails</h1>
          <div className="app__specialmenu-wineslist">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} name={cocktail.title} tags={cocktail.tags} price={cocktail.price} />
            ))}
          </div>
        </div>

      </div>
      {/* <button className='custom__button' type='button' style={{textAlign: 'center'}}>View More</button> */}

    </div>
  )
}

export default SpecialMenu;
