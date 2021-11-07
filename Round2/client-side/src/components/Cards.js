import React from 'react';
import '../style/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Items</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/m1.png'
              text='Adidas Sports Wear'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
              
            />
            <CardItem
              src='images/m2.jpg'
              text='Chennai Super Kings Merchandise'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
            <CardItem
              src='images/m3.jpg'
              text='Nike Casual T-Shirt'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/4.jpg'
              text='White top'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
            <CardItem
              src='images/5.jpg'
              text='Red and White Nightwear'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
            <CardItem
              src='images/3.jpg'
              text='Black Sweatshirt'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Yellow top'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
            <CardItem
              src='images/2.jpg'
              text='Blue top'
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
            <CardItem
              src='images/7.jpg'
              text='Pink Dress '
              label='Rs. 599 only'
              path = '/virtualtryon'
              isGame={false}
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
