import React from 'react';
import '../style/Cards.css';
import ACardItem from './ACardItem';




function ACards() {

  return (
    <div className='cards'>
      <h1>Items</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ACardItem
              src='images/ring1.png'
              text='Diamond Ring'
              label='Rs. 100000 only'
              path='/accesories'
              isGame={false}

            />
            <ACardItem
              src='images/bracelet.png'
              text='Black unisex watch'
              label='Rs. 1999 only'
              path='/accesories'
              isGame={false}

            />
            <ACardItem
              src='images/watch1.png'
              text='Blue fashion watch'
              label='Rs. 2999 only'
              path='/accesories'
              isGame={false}

            />
          </ul>
          <ul className='cards__items'>
            <ACardItem
              src='images/watch3.png'
              text='Adidas grey sports watch'
              label='Rs. 1299 only'
              path='/accesories'
              isGame={false}

            />
            <ACardItem
              src='images/ring2.png'
              text='Natural Diamond Ring'
              label='Rs. 120000 only'
              path='/accesories'
              isGame={false}

            />
            <ACardItem
              src='images/ring3.png'
              text='Unique cut diamond ring'
              label='Rs. 99999 only'
              path='/accesories'
              isGame={false}

            />
          </ul>

        </div>
      </div>

    </div>

  );
}

export default ACards;
